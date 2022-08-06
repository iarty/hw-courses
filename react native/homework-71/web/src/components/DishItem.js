import React from "react";
import { MDBCard, MDBCardTitle } from "mdbreact";
import { Link } from "react-router-dom";
import { removeDish } from "../store/actions/dishesActions";
import { useDispatch } from "react-redux";

const DishItem = ({ name, url, price, id }) => {
  const dispatch = useDispatch();
  const deleteDish = event => {
    event.preventDefault();
    dispatch(removeDish(`adminPanel/dishes/${id}`, id));
  };

  return (
    <MDBCard
      className="card-body flex-row p-4"
      style={{ width: "90%", margin: "1rem auto 0 auto" }}
    >
      <div className="mr-3">
        <img alt="" src={url} width="150px" height="150px" />
      </div>
      <div className="d-flex flex-grow-1 justify-content-between align-items-center">
        <MDBCardTitle>{name}</MDBCardTitle>
        <p style={{ fontSize: "1.5rem" }}>{price} KGS</p>
        <div className="">
          <Link to={`/dishes/${id}/edit`}>Edit</Link>
          <a href="#!" style={{ marginLeft: "1.25rem" }} onClick={deleteDish}>
            Delete
          </a>
        </div>
      </div>
    </MDBCard>
  );
};

export default DishItem;
