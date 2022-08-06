import React from 'react';
import './burger.css';
import Ingredients from './burger-ingredients/burger-ingredients';

export default ({ name, pickedIngredients, burgerParams }) => {
  let price = 0;
  let weight = 0;

  burgerParams.forEach(el => {
    price += el.price;
    weight += el.weight;
  })

  return (
    <div className="col-5">
      <div className="text-center">
        <h1 style={{ minHeight: 50 }}>{name}</h1>
      </div>
      <div className="Burger">
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
        {pickedIngredients.map((el, i) => <Ingredients key={i} ingredients={el.name} />)}
        <div className="BreadBottom"></div>
      </div>
      <div className="d-flex flex-column align-items-center mt-3">
        <span>Цена: {20 + price} сом</span>
        <span>Вес: {30 + weight} гр</span>
      </div>
    </div>
  )
}