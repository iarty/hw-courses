import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import SearchTvShow from "./Pages/SearchTvShow";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <SearchTvShow />
      </div>
    </Fragment>
  );
};

export default App;
