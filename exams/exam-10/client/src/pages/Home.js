import React, { useEffect } from "react";
import NewsItem from "../components/NewsItem";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import { getNews } from "../store/actions/newsActions";

const Home = () => {
  const dispatch = useDispatch();
  const news = useSelector(state => state.news.news);
  const error = useSelector(state => state.news.error);
  const loading = useSelector(state => state.news.loading);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <div>
      <h1>Posts</h1>
      <hr />
      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : error ? (
        <div
          style={{
            background: "rgba(193, 66, 66, 0.3)",
            border: "1px solid red",
            marginBottom: 5,
            padding: 10
          }}
        >
          <p>{error}</p>
        </div>
      ) : news.length ? (
        news.map(item => (
          <NewsItem
            key={item.id}
            title={item.title}
            id={item.id}
            image={item.image}
            date={item.date}
          />
        ))
      ) : (
        <span>No News</span>
      )}
    </div>
  );
};

export default Home;
