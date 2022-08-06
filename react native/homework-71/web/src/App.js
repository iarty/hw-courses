import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dishes from "./Pages/Dishes";
import Order from "./Pages/Order";
import Navbar from "./components/Navbar/Navbar";
import DishEditor from "./Pages/DishEditor";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <Switch>
          <Route path={"/" || "/dishes"} component={Dishes} exact />
          <Route path="/orders" component={Order} />
          <Route path="/dishes/create" component={DishEditor} />
          <Route path="/dishes/:id/edit" component={DishEditor} />
          <Redirect to="/" />
        </Switch>
      </main>
    </>
  );
};

export default App;
