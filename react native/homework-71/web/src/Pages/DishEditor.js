import React, { useEffect, useState } from "react";
import { MDBBtn } from "mdbreact";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createDish,
  editDish,
  getDishById
} from "../store/actions/dishesActions";

const DishEditor = () => {
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();
  const isEdit = history.location.pathname.includes("edit");
  const name = isEdit ? "Dish editor" : "Dish Creator";
  const btnName = isEdit ? "Edit" : "Create";
  const [value, setValue] = useState({ url: "", name: "", price: "" });
  const dish = useSelector(state => state.dishes.dish);

  useEffect(() => {
    if (params.id && !Object.keys(dish).length) {
      dispatch(getDishById(`adminPanel/dishes/${params.id}`));
    }
    if (Object.keys(dish).length && params.id) {
      setValue(dish);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dish, dispatch, params.id]);

  const createNewDish = event => {
    event.preventDefault();
    dispatch(createDish("adminPanel/dishes", value));
    history.push("/dishes");
  };

  const valueChanger = event => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const dishEdit = async event => {
    event.preventDefault();
    await dispatch(editDish(`adminPanel/dishes/${params.id}`, value));
    history.push("/dishes");
  };

  return (
    <form className="ml-auto mr-auto w-50 mt-5 border rounded py-3 px-5">
      <p className="h4 text-center mb-4">{name}</p>
      <label htmlFor="ImgUrl" className="grey-text">
        IMG Url
      </label>
      <input
        type="text"
        name="url"
        id="ImgUrl"
        className="form-control"
        value={value.url}
        onChange={valueChanger}
      />
      <br />
      <label htmlFor="DishesName" className="grey-text">
        Dishes name
      </label>
      <input
        type="text"
        name="name"
        id="DishesName"
        className="form-control"
        value={value.name}
        onChange={valueChanger}
      />
      <br />
      <label htmlFor="DishesPrice" className="grey-text">
        Dishes price
      </label>
      <input
        type="text"
        name="price"
        id="DishesPrice"
        className="form-control"
        value={value.price}
        onChange={valueChanger}
      />
      <div className="text-center mt-4">
        <MDBBtn
          color="indigo"
          type="submit"
          onClick={isEdit ? dishEdit : createNewDish}
        >
          {btnName}
        </MDBBtn>
      </div>
    </form>
  );
};

export default DishEditor;
