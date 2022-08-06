import React, { useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postLink } from "./store/actions/actions";

const App = () => {
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();
  const link = useSelector(state => state.link);

  const submit = async event => {
    event.preventDefault();
    await dispatch(postLink(url));
    setUrl("");
  };
  return (
    <div className="container text-center mt-5">
      <h1>Shorten your link!</h1>
      <form className="mt-3" onSubmit={submit}>
        <InputGroup className="mb-3">
          <FormControl
            value={url}
            onChange={event => setUrl(event.target.value)}
            placeholder="Link"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button type="submit" variant="outline-secondary">
              Shorten!
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </form>
      {!!Object.keys(link).length && (
        <div className="mt-5">
          <h2>Your link now looks like this:</h2>
          <a
            href={`http://localhost:8000/${link.short}`}
          >{`http://localhost:8000/${link.short}`}</a>
        </div>
      )}
    </div>
  );
};

export default App;
