import React, { Fragment } from 'react';
import cls from './CostsListItem.module.css'
import { MDBListGroupItem, MDBCloseIcon } from "mdbreact";

const ListGroupPage = ({ index, costs, removeCostsItem }) => {
  const classes = [
    'mt-2',
    'd-flex',
    'justify-content-between',
    costs.select === 'Car' ? cls.Car : costs.select === 'Food' ? cls.Food : cls.Entertainment,
  ]
  return (
    <Fragment>
      <MDBListGroupItem className={classes}>
        <span>{costs.item}</span>
        <div>
          <span className="mr-3">{costs.price} KGS</span>
          <MDBCloseIcon onClick={() => removeCostsItem(index)} />
        </div>
      </MDBListGroupItem>
    </Fragment>
  );
};

export default ListGroupPage;