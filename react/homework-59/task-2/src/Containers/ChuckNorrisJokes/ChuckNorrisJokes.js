import React, { Component } from 'react'
import Header from '../../Components/Header/Header'
import classes from './ChuckNorrisJokes.module.css'
import JokesList from '../../Components/JokesList/JokesList'

export default class ChuckNorrisJokes extends Component {
  state = {
    jokes: [],
    showPreloader: false
  }

  componentDidMount() {
    this.dataHandler()
  }

  dataHandler = async () => {
    this.setState({ showPreloader: true })
    const promises = [];

    for (let index = 0; index < 5; index++) {
      promises.push(fetch('https://api.chucknorris.io/jokes/random'))
    }

    const responses = await Promise.all(promises);
    const jokes = await Promise.all(responses.map(response => response.json()));
    this.setState({ jokes, showPreloader: false });
  }


  clickHandler = () => {
    this.dataHandler()
  }

  render() {
    return (
      <div className={classes.Container}>
        <Header showPreloader={this.state.showPreloader} newJokes={this.clickHandler} />
        <JokesList jokes={this.state.jokes} />
      </div>
    )
  }
}
