import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { decoder, encoder } from "./store/actions/actions";

const App = () => {
  const [password, setPassword] = useState("");
  const [decodeValue, setDecodeValue] = useState("");
  const [encodeValue, setEncodeValue] = useState("");
  const decodeInput = useRef(null);
  const encodeInput = useRef(null);
  const dispatch = useDispatch();
  const { decode, encode } = useSelector(state => state);

  useEffect(() => {
    if (decode) {
      setEncodeValue(decode);
    }
    if (encode) {
      setDecodeValue(encode);
    }
  }, [decode, encode]);

  const decoding = () => {
    if (password) {
      dispatch(
        decoder({
          password,
          message: encodeValue
        })
      );
      setEncodeValue("");
      decodeInput.current.focus();
    }
  };

  const encoding = () => {
    if (password) {
      dispatch(
        encoder({
          password,
          message: decodeValue
        })
      );
      setDecodeValue("");
      encodeInput.current.focus();
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div
          className="row"
          style={{
            marginTop: "2rem",
            border: "1px solid #cecece",
            borderRadius: 5,
            padding: 10
          }}
        >
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6 offset-l3">
                <textarea
                  id="textarea1"
                  className="materialize-textarea"
                  value={decodeValue}
                  onChange={event => setDecodeValue(event.target.value)}
                  ref={decodeInput}
                />
                <label className="active" htmlFor="textarea1">
                  Decoded message
                </label>
              </div>
            </div>
          </form>
          <div className="col s6 offset-l4">
            <i
              className="material-icons"
              style={{ cursor: "pointer", marginRight: "20px" }}
              onClick={decoding}
            >
              arrow_upward
            </i>
            <input
              id="password"
              type="password"
              placeholder="password"
              className="validate"
              style={{ width: "50%" }}
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
            <i
              className="material-icons"
              style={{ cursor: "pointer", marginLeft: "20px" }}
              onClick={encoding}
            >
              arrow_downward
            </i>
          </div>
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6 offset-l3">
                <textarea
                  id="textarea2"
                  className="materialize-textarea"
                  value={encodeValue}
                  onChange={event => setEncodeValue(event.target.value)}
                  ref={encodeInput}
                />
                <label className="active" htmlFor="textarea1">
                  Encoded message
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
