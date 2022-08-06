import React, { Fragment } from 'react';
import classes from '../CostsList.module.css'

export default function TotalPrice({ costs }) {
  const totalPrice = costs.reduce((result, el) => +el.price + result, 0)

  return (
    <Fragment>
      {totalPrice
        ?
        <div className="text-right">
          <span className={classes.TotalPrice}>Total price: {totalPrice}</span>
          <hr />
        </div>
        :
        null}
    </Fragment>
  )
}
