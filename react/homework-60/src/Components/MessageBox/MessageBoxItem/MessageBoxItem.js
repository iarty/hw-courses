import React from 'react';
import classes from './MessageBoxItem.module.css'


export default function MessageBoxItem(props) {
  const date = new Date(props.date).toLocaleString('ru', {
    hour: 'numeric',
    minute: 'numeric',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  return (
    <div className={classes.MessageBoxItem}>
      <div className={classes.MessageBoxItem__header}>
        <strong>{props.author}</strong>  |&nbsp;
        <small className={classes.MessageBoxItem__headerDate}><i className="fas fa-calendar-day" /> {date}</small>
      </div>
      <hr className={classes.MessageBoxItem__hr} />
      <p className={classes.MessageBoxItem__text}>{props.text}</p>
    </div>
  )
}
