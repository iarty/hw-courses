import React from "react";
import { Card } from "react-bootstrap";

const ThreadItem = ({ author, comment, url }) => {
  return (
    <Card className="mt-3">
      <Card.Body>
        <Card.Title>{author}</Card.Title>
        <hr />
        {url && (
          <img
            src={url}
            alt=""
            style={{ width: 150, height: 150 }}
            className="float-left mr-5"
          />
        )}
        <Card.Text>{comment}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ThreadItem;
