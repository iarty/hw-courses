import React from 'react'
import classes from './Preloader.module.css'

export default function Preloader() {
  return (
    <div className={classes.Preloader}>
      <span className={classes.Spinner}></span>
    </div>
  )
}
