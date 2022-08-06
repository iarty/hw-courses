import React, { Component } from 'react';
import Burger from './components/burger/burger';
import Constructor from './components/constructor/constructor'
import IngredientsList from './components/IngredientsList/ingredientsList'
import MeatImage from './assets/meat.png';
import BaconImage from './assets/bacon.png';
import CheeseImage from './assets/cheese.png';
import SaladImage from './assets/salad.png';

const ingredients = [
  { name: 'Мясная котлета', price: 50, image: MeatImage, weight: 90 },
  { name: 'Бекон', price: 30, image: BaconImage, weight: 60 },
  { name: 'Сыр', price: 20, image: CheeseImage, weight: 40 },
  { name: 'Салат', price: 5, image: SaladImage, weight: 10 },
]
export default class App extends Component {
  state = {
    ingredients: [],
    hover: false,
    burgerName: '',
    weight: 0,
    price: 20,
  };

  ingredientsCount = (index) => {
    this.setState(prevState => prevState.ingredients.push(ingredients[index]));
  }

  toggleHover = () => {
    this.setState({ hover: !this.state.hover })
  }

  burgerName = (e) => {
    let burgerName = e.target.value
    this.setState({ burgerName });
  }

  deleteIngredients = (index) => {
    this.setState(prevState => prevState.ingredients.splice(index, 1))
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <Constructor pickIngredients={this.ingredientsCount} burgerName={this.burgerName} mouseEnter={this.toggleHover} mouseLeave={this.toggleHover} ingredients={ingredients} hover={this.state.hover} />
          <Burger name={this.state.burgerName} pickedIngredients={this.state.ingredients} burgerParams={this.state.ingredients} />
          <IngredientsList onDelete={this.deleteIngredients} ingredients={this.state.ingredients} />
        </div>
      </div>
    )
  }
}
