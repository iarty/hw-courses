import React, { useContext, useEffect, useState } from "react";
import Input from "../components/UI/Input";
import Dropdown from "../components/Dropdown/Dropdown";
import { TvaMazeContext } from "../Context/TvMazeSearch";
import TvShowPage from "./TvShowPage";
import { Route, Switch } from "react-router-dom";

const SearchTvShow = () => {
  const [value, setValue] = useState("");
  const { selectedTvShow, searchTvShow } = useContext(TvaMazeContext);

  useEffect(() => {
    searchTvShow(value);
  }, [searchTvShow, value]);

  return (
    <div className="mt-5">
      <Input value={value} onChange={setValue} />
      <Dropdown />
      <Switch>
        <Route to="/show/:id" component={TvShowPage} />
      </Switch>
      {/*{!!Object.keys(selectedTvShow).length && <TvShowPage />}*/}
    </div>
  );
};

export default SearchTvShow;
