import React, { Fragment, Component } from 'react';
import Field from './components/field/field';
import ResetButton from './components/resetButton/button';
import SquareGenerate from './squareGenerate';
import Count from './components/counts/count';

export default class App extends Component {
  state = {
    squares: [],
    count: 0,
    endGame: false,
  }
  constructor() {
    super();
    this.state.squares = new SquareGenerate().gen()
  }

  hideSqr = (index, state) => {
    if (state) {
      this.setState({ endGame: true });
    }
    this.setState(prevState => {
      return {
        squares: prevState.squares.filter(el => el.id === index ? { ...el, ...el.show = true } : el),
        count: prevState.count + 1,
      }
    })
  }

  newGame = () => {
    const squares = new SquareGenerate().gen();
    this.setState({ squares, count: 0, endGame: false })
  }

  render() {
    return (
      <Fragment>
        <Field squares={this.state.squares} hide={this.hideSqr} newGame={this.newGame} tries={this.state.count} stopGame={this.state.endGame} />
        <div style={{ marginLeft: 50, alignSelf: 'center' }}>
          <Count count={this.state.count} />
          <ResetButton newGame={this.newGame} />
        </div>
      </Fragment>
    )
  }
}

