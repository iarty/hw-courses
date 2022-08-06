import React, { Fragment } from 'react';
import classes from './button.module.css'

export default function button({ newGame }) {
  return (
    <Fragment>
      <button className={classes.resetBtn} onClick={newGame}>Reset</button>
    </Fragment>
  )
}
