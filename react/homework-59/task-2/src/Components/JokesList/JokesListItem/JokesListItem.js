import React from 'react'
import classes from './JokesListItem.module.css'

export default function JokesListItem({ value }) {
  return (
    <div className={classes.JokesListItem}>
      <p>{value}</p>
    </div>
  )
}
