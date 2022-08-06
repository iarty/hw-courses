import React from 'react'
const classes = {'Салат':'Salad','Сыр':'Cheese', 'Мясная котлета':'Meat', 'Бекон':'Bacon'};

export default ({ingredients}) => {
  return (
    <div className={classes[ingredients]}></div>
  )
}
