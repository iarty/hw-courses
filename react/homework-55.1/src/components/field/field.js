import React from 'react';
import Square from '../square/square';
import classes from './field.module.css';

export default function field(props) {
  return (
    <div className={classes.field}>
      {props.squares.map((el, i) => <Square key={i} item={el} isHide={props.hide} index={i} newGame={props.newGame} tries={props.tries} stopGame={props.stopGame}/>)}
    </div>
  )
}
