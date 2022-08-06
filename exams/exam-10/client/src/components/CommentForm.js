import React, { useState } from "react";
import { MDBBtn } from "mdbreact";
import { useDispatch, useSelector } from "react-redux";
import { postComment } from "../store/actions/commentsActions";
import { useParams } from "react-router-dom";

const CommentForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({ author: "", comment: "", id });
  const error = useSelector(state => state.comments.error);
  const dispatch = useDispatch();

  const sendData = async event => {
    event.preventDefault();
    await dispatch(postComment(formData));
    setFormData({ author: "", comment: "", id });
  };

  return (
    <>
      {error && (
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
      )}
      <form onSubmit={sendData} className="w-50" style={{ margin: "auto" }}>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Your name</label>
          <input
            type="text"
            name="author"
            className="form-control"
            id="formGroupExampleInput"
            value={formData.author}
            onChange={event =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value
              })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Your message</label>
          <textarea
            className="form-control"
            name="comment"
            id="exampleFormControlTextarea1"
            rows="5"
            value={formData.comment}
            onChange={event =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value
              })
            }
          />
        </div>
        <MDBBtn type="submit" color="cyan" size="sm">
          Send comment
        </MDBBtn>
      </form>
    </>
  );
};

export default CommentForm;
