import React from 'react';
import OrderListItem from './orderListItem/orderlistitem';
import { MDBListGroup } from "mdbreact";


export default function orderlist({ DataItem, removeItem }) {
  let totalPrice = 0;
  DataItem.forEach(element => {
    totalPrice += element.price * element.value
  });
  return (
    <div>
      <div>
        <h4>Order Details:</h4>
      </div>
      <div className="border border-dark rounded p-3" style={{width:330}}>
        {!DataItem.length ? <span style={{ fontSize: 18, fontWeight: 'bold' }}>Order is empty!<br />
          Please add some items!</span> :
          [<MDBListGroup key='k1' className="my-4 mx-4" style={{ width: "22rem" }}>
            {DataItem.map((el, i) => <OrderListItem key={i} removeItem={removeItem} DataItem={el} />)}
          </MDBListGroup>,
          <hr key='k2' />,
          <span key='k3'>Total price: {totalPrice} KGS</span>]}
      </div>
    </div>
  )
}
