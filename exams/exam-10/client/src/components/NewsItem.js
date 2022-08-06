import React from "react";
import { MDBCard, MDBCardBody, MDBCardHeader } from "mdbreact";
import { Link } from "react-router-dom";
import { deleteNews } from "../store/actions/newsActions";
import { useDispatch } from "react-redux";

const NewsItem = ({ title, id, image, date }) => {
  const dispatch = useDispatch();
  const localeDate = new Date(date).toLocaleString("ru", {
    hour: "numeric",
    minute: "numeric",
    year: "numeric",
    month: "short",
    day: "numeric"
  });

  return (
    <MDBCard border="cyan" className="m-3">
      <MDBCardHeader color="cyan">{title}</MDBCardHeader>
      <MDBCardBody className="text-secondary">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <img
              src={
                image
                  ? image
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRLFj-KHDTDnmPJZ-fV6s4jMkFlh9SR6jdwSRK9OytVGOvUEZ3"
              }
              alt=""
              style={{ width: 100, height: 100 }}
            />
            <small className="ml-3 cyan-text">At {localeDate}</small>
          </div>
          <div className="align-self-end">
            <i
              className="fas fa-trash"
              style={{
                fontSize: "20px",
                color: "#007bff",
                marginRight: 20,
                cursor: "pointer"
              }}
              onClick={() => dispatch(deleteNews(id))}
            />
            <Link to={`/news/${id}`}>Read more >>></Link>
          </div>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default NewsItem;
