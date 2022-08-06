import React from 'react';
import classes from './Alert.module.css'

export default function Alert(props) {
  const cls = [classes.Alert, classes[props.type]]
  return (
    <div
      className={cls.join(' ')}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0',
        cursor: props.clickDismissable && props.dismiss ? 'pointer' : 'default'
      }}
      onClick={props.clickDismissable ? props.dismiss : null}
    >
      {props.dismiss && !props.clickDismissable
        ?
        <span className={classes.Closebtn} onClick={props.dismiss}>&times;</span>
        :
        null}
      {props.children}
    </div>
  )
}
