import React, { Component } from 'react'
import classes from './MessageBox.module.css';
import MessageBoxItem from './MessageBoxItem/MessageBoxItem';
import ScrollableFeed from 'react-scrollable-feed';

export default class MessageBox extends Component {
  render() {
    return (
      <div className={classes.MessageBox}>
        <ScrollableFeed>
          {this.props.messages.map(message => <MessageBoxItem key={message._id} text={message.message} author={message.author} date={message.datetime} />)}
        </ScrollableFeed>
      </div>
    )
  }
}
