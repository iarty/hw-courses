import React from 'react'
import classes from './InputGroup.module.css'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'

export default function InputGroup(props) {
  return (
    <div className={classes.InputGroupWrap}>
      <form className={classes.Form} onSubmit={props.addFilm} action="#">
        <Input onChange={props.inputHandler} label='Название фильма' value={props.inputValue} />
        <Button>Add</Button>
      </form>
    </div>
  )
}
