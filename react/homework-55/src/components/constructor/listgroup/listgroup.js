import React from 'react'
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";

const ListGroupPage = ({ ingredients, hover, mouseEnter, mouseLeave, pickIngredients }) => {
  const active = {};
  if (hover) {
    active['hover'] = 'hover';
  }
  return (
    <MDBContainer onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="mb-3">
      <MDBListGroup style={{ width: "22rem" }}>
        {ingredients.map((item, i) => {
          return (
            <MDBListGroupItem key={i} {...active} href="#" onClick={() => pickIngredients(i)}>
              <div className="d-flex">
                <div className="col-7">
                  <h5>{item.name}</h5>
                  <p>{item.weight} грамм ({item.price} сом)</p>
                </div>
                <div className="col-6 align-self-center">
                  <img src={item.image} alt="ingredients" className="w-100" />
                </div>
              </div>
            </MDBListGroupItem>
          )
        })}
      </MDBListGroup>
    </MDBContainer>
  );
};

export default ListGroupPage;