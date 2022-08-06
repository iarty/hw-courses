import React from 'react'
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";

const ListGroupPage = ({ ingredients, onDelete }) => {
  return (
    <MDBContainer className="mb-3">
      <MDBListGroup style={{ width: "22rem" }}>
        {ingredients.map((el, i) => {
          return (
            <MDBListGroupItem key={i} href="#" onClick={() => onDelete(i)}>
              <div className="d-flex">
                <div className="align-self-center">
                  <img src={el.image} alt="ingredients" className="w-100" />
                </div>
                <div className="col-8">
                  <h5>{el.name}</h5>
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