import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { TvMazeSearch } from "./Context/TvMazeSearch";

const app = (
  <Router>
    <TvMazeSearch>
      <App />
    </TvMazeSearch>
  </Router>
);

ReactDOM.render(app, document.getElementById("root"));
