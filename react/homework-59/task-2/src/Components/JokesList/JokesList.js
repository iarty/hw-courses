import React from 'react'
import classes from './JokesList.module.css'
import JokesListItem from './JokesListItem/JokesListItem'

export default function JokesList(props) {
  return (
    <div className={classes.JokesList}>
      {props.jokes.map((el, i) => <JokesListItem key={i} value={el.value} />)}
    </div>
  )
}
