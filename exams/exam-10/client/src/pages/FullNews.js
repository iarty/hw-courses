import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewsById } from "../store/actions/newsActions";
import { useParams } from "react-router-dom";
import CommentForm from "../components/CommentForm";
import { getCommentById } from "../store/actions/commentsActions";
import CommentItem from "../components/CommentItem";
import { MDBListGroup } from "mdbreact";
import Spinner from "../components/Spinner";

const FullNews = () => {
  const dispatch = useDispatch();
  const oneNews = useSelector(state => state.news.oneNews);
  const loadingNews = useSelector(state => state.news.loading);
  const comments = useSelector(state => state.comments.comments);
  const loadingComment = useSelector(state => state.comments.loading);
  const { id } = useParams();
  let { title, image, data } = oneNews;

  if (image) {
    image = "http://localhost:3000/" + image;
  }

  useEffect(() => {
    dispatch(getNewsById(id));
    dispatch(getCommentById(id));
  }, [dispatch, id]);

  return (
    <>
      {loadingNews ? (
        <div>
          <Spinner />
        </div>
      ) : (
        !!Object.keys(oneNews).length && (
          <div>
            <h1>{title}</h1>
            <hr />
            <div className="d-flex">
              <img
                src={
                  image
                    ? image
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRLFj-KHDTDnmPJZ-fV6s4jMkFlh9SR6jdwSRK9OytVGOvUEZ3"
                }
                alt=""
                style={{ width: 350, height: 350 }}
              />
              <p className="ml-3">{data}</p>
            </div>
            <hr />
            <h4>Comments</h4>
            <MDBListGroup>
              {loadingComment ? (
                <div>
                  <Spinner />
                </div>
              ) : !!comments.length ? (
                comments.map(el => (
                  <CommentItem
                    key={el.id}
                    author={el.author}
                    comment={el.comment}
                    date={el.date}
                    id={el.id}
                  />
                ))
              ) : (
                <div>No comments!</div>
              )}
            </MDBListGroup>
            <hr />
            <CommentForm />
          </div>
        )
      )}
    </>
  );
};

export default FullNews;
