import React, { useContext } from "react";
import "./Dropdown.css";
import { TvaMazeContext } from "../../Context/TvMazeSearch";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const { searchResult, getTvShow, toggler } = useContext(TvaMazeContext);

  return (
    <div
      className="Dropdown mt-1"
      style={
        toggler && searchResult.length
          ? { display: "block", position: "absolute" }
          : { display: "none" }
      }
    >
      {searchResult.map((show, index) => (
        <div key={index}>
          <Link
            to={`/show/${show.id}`}
            className="hoverable"
            style={{ color: "#000" }}
            onClick={() => getTvShow(show.id)}
          >
            {show.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
