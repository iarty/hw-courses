import React, { useContext } from "react";
import { TvaMazeContext } from "../../Context/TvMazeSearch";

const Input = ({ value, onChange }) => {
  const { setToggler, toggler } = useContext(TvaMazeContext);

  const valueChanger = event => {
    setToggler();
    onChange(event.target.value);
  };

  return (
    <div className="form-group mb-0">
      <label htmlFor="formGroupExampleInput">Search for TV Show</label>
      <input
        type="text"
        className="form-control"
        id="formGroupExampleInput"
        value={toggler ? value : ""}
        onChange={valueChanger}
      />
    </div>
  );
};

export default Input;
