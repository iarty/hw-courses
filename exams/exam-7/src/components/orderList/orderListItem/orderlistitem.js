import React from 'react';
import { MDBListGroupItem } from "mdbreact";
import { MDBCloseIcon } from "mdbreact"



export default function orderlistitem({ DataItem, removeItem }) {
  return (
    <MDBListGroupItem color="warning d-flex justify-content-between">
      <div>
        <span>{DataItem.name}</span> <span>x{DataItem.value}</span>
      </div>
      <div>
        <span>{DataItem.price * DataItem.value}</span>&nbsp;&nbsp;
        <MDBCloseIcon onClick={() => removeItem(DataItem.name)} />
      </div>
    </MDBListGroupItem>
  )
}
