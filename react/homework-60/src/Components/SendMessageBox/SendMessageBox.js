import React from 'react';
import classes from './SendMessageBox.module.css'
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

export default function SendMessageBox(props) {
  return (
    <div className={classes.SendMessageBox}>
      <form onSubmit={props.sendMsg} className={classes.Form}>
        <Input label onChange={props.msgData} value={props.msgValue.author} />
        <div className={classes.sendMsg}>
          <Input placeholder="Type a message" onChange={props.msgData} value={props.msgValue.message} />
          <Button />
        </div>
      </form>
    </div>
  )
}
