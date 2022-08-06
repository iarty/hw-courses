import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
import { useDispatch } from "react-redux";
import { postNews } from "../store/actions/newsActions";
import { useHistory } from "react-router-dom";

const NewsForm = () => {
  const [formData, setFormData] = useState({ title: "", data: "", image: {} });
  const dispatch = useDispatch();
  const history = useHistory();

  const sendData = async event => {
    event.preventDefault();
    await dispatch(postNews(formData));
    history.push("/");
  };

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6" className="m-auto">
          <form onSubmit={sendData}>
            <p className="h4 text-center mb-4">News creator</p>
            <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="defaultFormContactNameEx"
              className="form-control"
              value={formData.title}
              onChange={event =>
                setFormData({
                  ...formData,
                  [event.target.name]: event.target.value
                })
              }
            />
            <br />
            <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
              Image
            </label>
            <br />
            <input
              type="file"
              id="defaultFormContactSubjectEx"
              name="image"
              onChange={event =>
                setFormData({
                  ...formData,
                  [event.target.name]: event.target.files
                })
              }
            />
            <br />
            <label
              htmlFor="defaultFormContactMessageEx"
              className="grey-text mt-3"
            >
              Your message
            </label>
            <textarea
              type="text"
              id="defaultFormContactMessageEx"
              className="form-control"
              rows="3"
              name="data"
              value={formData.data}
              onChange={event =>
                setFormData({
                  ...formData,
                  [event.target.name]: event.target.value
                })
              }
            />
            <div className="text-center mt-4">
              <MDBBtn color="cyan" outline type="submit" size="sm">
                Send
                <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default NewsForm;
