import React from 'react';
import classes from './Input.module.css'

export default function Input({ label, onChange, value, placeholder }) {
  const target = label ? 'author' : 'message';
  const htmlFor = `id-${Math.random()}`;
  const cls = [
    classes.Input,
    !label ? classes.InputWidth : null
  ]
  return (
    <div className={cls.join(' ')}>
      {label
        ? <label htmlFor={htmlFor}>Username</label>
        : null
      }
      <input
        type="text"
        id={htmlFor}
        className={cls.join(' ')}
        onChange={event => onChange(event, target)}
        value={value}
        placeholder={placeholder}
        required
      />
    </div>
  )
}
