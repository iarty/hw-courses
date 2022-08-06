import React, { Component } from 'react';
import Axios from '../../Axios/Axios';
import MessageBox from '../../Components/MessageBox/MessageBox';
import classes from './Chat.module.css'
import SendMessageBox from '../../Components/SendMessageBox/SendMessageBox';

export default class Chat extends Component {
  state = {
    messages: [],
    lastMessage: null,
    sendMessage: {
      author: '',
      message: '',
    },
  }

  intervalID = null

  async componentDidMount() {
    const msg = await Axios.get('/messages?endpoint');
    const messages = msg.data;
    const lastMessage = messages[messages.length - 1];
    this.setState({ messages, lastMessage });
    this.newMsg();
  }

  newMsg = () => {
    this.intervalID = setInterval(async () => {
      const date = this.state.lastMessage.datetime;
      const msg = await Axios.get(`/messages?datetime=${date}`);
      const newMsg = msg.data;
      if (newMsg.length) {
        this.setState(prevState => ({ messages: [...prevState.messages, ...newMsg], lastMessage: newMsg[newMsg.length - 1] }))
      }
    }, 2000)
  }

  messageDataHandler = (event, target) => {
    const text = event.target.value
    const sendMessage = { ...this.state.sendMessage };
    sendMessage[target] = text;
    this.setState({ sendMessage })
  }

  handleSubmit = async event => {
    clearInterval(this.intervalID)
    event.preventDefault();
    const data = new URLSearchParams();
    data.set('message', this.state.sendMessage.message)
    data.set('author', this.state.sendMessage.author)
    try {
      Axios.post('/messages', data)
    } catch (error) {
      console.log('Error');
    }
    this.setState({ sendMessage: { author: '', message: '' } });
    this.newMsg()
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return (
      <div className={classes.Container}>
        <h1 className={classes.Headline}>Chat</h1>
        <div className={classes.ChatWrap}>
          <MessageBox messages={this.state.messages} />
          <SendMessageBox msgData={this.messageDataHandler} sendMsg={this.handleSubmit} msgValue={this.state.sendMessage} />
        </div>
      </div>
    )
  }
}
