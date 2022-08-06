import React, { Component } from 'react';
import Menu from './components/menu/menu';
import OrderList from './components//orderList/orderlist'
import burgerImg from './assets/burgerImg.jpg';
import teaImg from './assets/teaImg.jpg';
import coffeeImg from './assets/coffeeImg.jpg';
import pizzaImg from './assets/pizzaImg.jpeg';
import rollsImg from './assets/rollsImg.jpeg';
import colaImg from './assets/colaImg.jpeg';

const menuItemsArr = [
  { name: 'Burger', price: 80, image: burgerImg, value: 1 },
  { name: 'Tea', price: 15, image: teaImg, value: 1 },
  { name: 'Coffee', price: 20, image: coffeeImg, value: 1 },
  { name: 'Pizza', price: 320, image: pizzaImg, value: 1 },
  { name: 'Rolls', price: 180, image: rollsImg, value: 1 },
  { name: 'Cola', price: 40, image: colaImg, value: 1 },
]
export default class App extends Component {
  state = {
    toOrderList: [],
  }

  addToOrderList = (data) => {
    const toOrderList = this.state.toOrderList;
    if (toOrderList.findIndex(el => el.name === data.name) === -1) {
      this.setState(prevState => prevState.toOrderList.push(data))
    } else {
      this.setState(prevState => prevState.toOrderList.map(el => el.name === data.name ? { ...el, ...el.value++ } : el))
    }
  }

  removeItem = (name) => {
    this.setState({ toOrderList: this.state.toOrderList.filter(el => el.name !== name) })
  }

  render() {
    return (
      <div className="container" >
        <div className="row">
          <OrderList removeItem={this.removeItem} DataItem={this.state.toOrderList} />
          <Menu MenuItemsArr={menuItemsArr} addToOrderList={this.addToOrderList} />
        </div>
      </div>
    )
  }
}
