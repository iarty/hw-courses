import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getThreads, postThread } from "../store/actions/actions";

const ModalPage = ({ show, onClick }) => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const [threadData, setThreadData] = useState({
    author: "",
    comment: "",
    image: {}
  });

  const postNewThread = async event => {
    event.preventDefault();
    await dispatch(postThread(threadData));
    setThreadData({ author: "", comment: "", image: {} });

    if (!error) {
      dispatch(getThreads());
    }

    if (!loading) {
      onClick();
    }
  };

  return (
    <Modal show={show} onHide={onClick}>
      <Modal.Header closeButton>
        <Modal.Title>New Thread</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={postNewThread}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="author"
              type="text"
              placeholder="Anonymous"
              value={threadData.author}
              onChange={event =>
                setThreadData({
                  ...threadData,
                  [event.target.name]: event.target.value
                })
              }
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              name="comment"
              as="textarea"
              rows="3"
              value={threadData.comment}
              onChange={event =>
                setThreadData({
                  ...threadData,
                  [event.target.name]: event.target.value
                })
              }
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="file"
              name="image"
              onChange={event =>
                setThreadData({
                  ...threadData,
                  [event.target.name]: event.target.files
                })
              }
            />
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={onClick}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Post
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalPage;
