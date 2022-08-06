import React from "react";
import { MDBCard } from "mdbreact";
import { useDispatch } from "react-redux";
import { removeOrder } from "../store/actions/orderActions";

const OrderItem = ({ data, id }) => {
  const dispatch = useDispatch();
  const delivery = 150;

  const totalPrice = () => {
    let total = 0;
    data.forEach(item => (total += item.price * item.amount));
    return total + delivery;
  };

  const deleteOrder = event => {
    event.preventDefault();
    dispatch(removeOrder(`adminPanel/orders/${id}`, id));
  };

  return (
    <MDBCard
      className="card-body p-4 flex-row"
      style={{ width: "90%", margin: "1rem auto 0 auto" }}
    >
      <div className="d-flex flex-column flex-grow-1">
        {data.map((el, index) => (
          <div key={index}>
            <span className="mr-5">
              {el.name} x{el.amount}
            </span>
            <span>{el.price * el.amount} KGS</span>
          </div>
        ))}
      </div>
      <div>
        <p>Order total</p>
        <p>Delivery: {delivery} KGS</p>
        <p>{totalPrice()} KGS</p>
        <button onClick={deleteOrder}>Complete order</button>
      </div>
    </MDBCard>
  );
};

export default OrderItem;
