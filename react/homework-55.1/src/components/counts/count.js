import React from 'react';
import classes from './count.module.css'

export default function count({ count }) {
  return (
    <div className={classes.countWrap}>
      <span className={classes.count}>Tries: {count}</span>
    </div>
  )
}
