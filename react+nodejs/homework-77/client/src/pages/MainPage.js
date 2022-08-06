import React, { useEffect, useState } from "react";
import ModalPage from "../components/ModalPage";
import { useDispatch, useSelector } from "react-redux";
import { getThreads } from "../store/actions/actions";
import ThreadItem from "../components/ThreadItem";

const MainPage = () => {
  const dispatch = useDispatch();
  const threads = useSelector(state => state.threads);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    dispatch(getThreads());
  }, [dispatch]);

  return (
    <div className="mt-5">
      <span
        onClick={() => setModal(!modal)}
        style={{ color: "#34345c", fontSize: "2rem", cursor: "pointer" }}
        className="text-center d-block"
      >
        [START A NEW THREAD]
        {error && (
          <p
            style={{
              textAlign: "center",
              color: "red",
              fontSize: "18px",
              fontWeight: "bold"
            }}
          >
            {error}
          </p>
        )}
      </span>
      <hr color="#34345c" size="4" />
      <ModalPage show={modal} onClick={() => setModal(!modal)} />
      {loading ? (
        <div>Loading...</div>
      ) : (
        !!threads.length &&
        threads.map(el => (
          <ThreadItem
            key={el.id}
            author={el.author}
            comment={el.comment}
            url={el.image}
            date={el.date}
          />
        ))
      )}
    </div>
  );
};

export default MainPage;
