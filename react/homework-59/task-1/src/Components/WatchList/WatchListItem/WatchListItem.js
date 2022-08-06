import React, { Component } from 'react'
import Input from '../../UI/Input/Input'
import CloseBtn from '../../UI/Close/Close'
import classes from './WatchListItem.module.css'

export default class WatchListItem extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value
  }
  render() {
    const { onChange, value, removeFilm, index } = { ...this.props }
    return (
      <div className={classes.WatchListItem}>
        <Input value={value} onChange={onChange} />
        <CloseBtn onClick={removeFilm} index={index} />
      </div>
    )
  }
}
