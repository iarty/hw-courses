import React, { Fragment } from 'react';
import classes from './Close.module.css'

export default function Close({ onClick, index }) {
  return (
    <Fragment>
      <button className={classes.Close} onClick={() => onClick(index)}>
        <span>×</span>
      </button>
    </Fragment>
  )
}
