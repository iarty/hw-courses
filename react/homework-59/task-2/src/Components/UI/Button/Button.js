import React, { Component, Fragment } from 'react'
import classes from './Button.module.css'
import Preloader from '../Preloader/Preloader'

export default class Button extends Component {
  render() {
    return (
      <Fragment>
        <button className={[classes.ChuckButton, classes.Button].join(' ')} onClick={this.props.onClick}>Generate Jokes</button>&nbsp;&nbsp;
        {this.props.showPreloader ? <Preloader /> : null}
      </Fragment>
    )
  }
}
