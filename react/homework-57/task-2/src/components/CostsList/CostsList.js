import React from 'react';
import classes from './CostsList.module.css';
import CostsListItem from './CostsListItem/CostsListItem';
import TotalPrice from './TotalPrice/TotalPrice'
import { MDBListGroup, MDBContainer } from "mdbreact";

export default function CostsList({ costs, removeCostsItem }) {
  const cls = [classes.CostsList, 'col-4', 'p-4'];
  return (
    <div className={cls.join(' ')}>
      <MDBContainer>
        <TotalPrice costs={costs} />
        <MDBListGroup>
          {costs.map((el, i) => <CostsListItem key={el.item + i} index={i} costs={el} removeCostsItem={removeCostsItem} />)}
        </MDBListGroup>
      </MDBContainer>
    </div>
  )
}
