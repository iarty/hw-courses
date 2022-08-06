import React from "react";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import FullNews from "./pages/FullNews";
import NewsForm from "./pages/NewsForm";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <>
      <Navigation />
      <div className="container mt-3">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/news/:id" component={FullNews} />
          <Route path="/add-news" component={NewsForm} />
        </Switch>
      </div>
    </>
  );
};

export default App;
