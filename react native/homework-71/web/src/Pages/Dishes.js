import React, { useEffect } from "react";
import DishItem from "../components/DishItem";
import Button from "../components/UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { getDishes } from "../store/actions/dishesActions";

const Dishes = () => {
  const { dishes } = useSelector(state => state.dishes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishes("/adminPanel/dishes"));
  }, [dispatch]);

  return (
    <div>
      <div className="mt-3 d-flex justify-content-between">
        <h1>Dishes</h1>
        <Button create>Add new dishes</Button>
      </div>
      <hr />
      {dishes &&
        dishes.map(dish => (
          <DishItem
            key={dish.id}
            name={dish.name}
            price={dish.price}
            url={dish.url}
            id={dish.id}
          />
        ))}
    </div>
  );
};

export default Dishes;
