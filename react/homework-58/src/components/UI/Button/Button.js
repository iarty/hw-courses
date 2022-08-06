import React, { Fragment } from 'react'
import classes from './Button.module.css';

export default function Button(props) {
  const cls = [
    classes.Button,
    classes[props.type]
  ]

  return (
    <Fragment>
      <button className={cls.join(' ')}
        onClick={props.clicked}
      >
        {props.children}
      </button>
    </Fragment>
  )
}
