import React from "react";
import { MDBCloseIcon, MDBListGroupItem } from "mdbreact";
import { useDispatch } from "react-redux";
import { deleteComment } from "../store/actions/commentsActions";

const CommentItem = ({ author, comment, date, id }) => {
  const dispatch = useDispatch();
  const localeDate = new Date(date).toLocaleString("ru", {
    hour: "numeric",
    minute: "numeric",
    year: "numeric",
    month: "short",
    day: "numeric"
  });

  return (
    <MDBListGroupItem>
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{author}</h5>
        <div>
          <small className="mr-5">{localeDate}</small>
          <MDBCloseIcon onClick={() => dispatch(deleteComment(id))} />
        </div>
      </div>
      <hr />
      <p className="mb-1">{comment}</p>
    </MDBListGroupItem>
  );
};

export default CommentItem;
