import React, { useEffect } from "react";
import OrderItem from "../components/OrderItem";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../store/actions/orderActions";
import { getDishes } from "../store/actions/dishesActions";

const Order = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector(state => state.orders);
  const { dishes } = useSelector(state => state.dishes);
console.log(orders);
  const refOrders = orders.map(order => {
    const orders = [];
    Object.keys(order).forEach(orderItem => {
      dishes.forEach(dish => {
        if (dish.id === orderItem) {
          orders.push({
            name: dish.name,
            price: dish.price,
            id: dish.id,
            amount: order[orderItem]
          });
        }
      });
    });
    return { id: order["id"], orders };
  });

  useEffect(() => {
    dispatch(getOrders("adminPanel/orders"));
    if (!dishes.length) {
      dispatch(getDishes(`/adminPanel/dishes`));
    }
  }, [dispatch, dishes.length]);

  return (
    <div className="mt-3">
      <h1>Orders</h1>
      <hr />
      <div>
        {!!refOrders.length &&
          refOrders.map((order, index) => (
            <OrderItem key={index} id={order.id} data={order.orders} />
          ))}
      </div>
    </div>
  );
};

export default Order;
