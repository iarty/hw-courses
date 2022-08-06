import React, { Component } from 'react';
import OutputNumber from './components/lottery/lottery.js'

export default class Lottery extends Component {
  state = {
    num: []
  }

  numberGenerator = () => {
    let arr = [];
    do {
      arr.push(Math.floor(Math.random() * (36 - 6)) + 5)
      arr = arr.filter((item, index) => {
        return arr.indexOf(item) === index
      });
    } while (arr.length < 5);
    return arr.sort((a, b) => {
      return a - b
    });
  }

  changeState = () => {
    const numArr = this.numberGenerator();
    this.setState({ num: numArr })
  }

  render = () => (<OutputNumber genNum={this.changeState} num={this.state.num} />)
}
