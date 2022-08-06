import React, { useEffect, useState } from "react";
import { MDBBtn } from "mdbreact";
import { Redirect, useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  editContactData,
  getContactById,
  postContacts
} from "../store/actions/contactsActions";

const ContactForm = () => {
  const params = useParams();
  const location = useLocation();
  const isEdit = location.pathname.includes("edit");
  const [contactData, setContactData] = useState({
    name: "",
    number: "",
    email: "",
    avatarUrl: ""
  });
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);
  const { loading, contact } = useSelector(state => state);
  const name = isEdit ? "Contacts Editor" : "Contacts Creator";
  const btnName = isEdit ? "Edit" : "Create";

  useEffect(() => {
    setContactData({
      name: "",
      number: "",
      email: "",
      avatarUrl: ""
    });
    if (params.id) {
      dispatch(getContactById(params.id));
      setContactData({ ...contact });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, params.id]);

  const valueChanger = event => {
    setContactData({ ...contactData, [event.target.name]: event.target.value });
  };

  const postContact = async event => {
    event.preventDefault();
    await dispatch(postContacts(contactData));
    setRedirect(true);
  };

  const backToContacts = () => {
    setRedirect(true);
  };

  const editContact = async event => {
    event.preventDefault();
    await dispatch(editContactData(params.id, contactData));
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <form className="ml-auto mr-auto w-50 mt-5 border rounded py-3 px-5">
      <p className="h4 text-center mb-4">{name}</p>
      <div className="text-center">
        <img
          src={contactData.avatarUrl}
          alt=""
          style={{ width: 100, height: 100 }}
        />
      </div>
      <label htmlFor="ContactName" className="grey-text">
        Name
      </label>
      <input
        type="text"
        name="name"
        id="ContactName"
        className="form-control"
        value={contactData.name}
        onChange={valueChanger}
        required
      />
      <br />
      <label htmlFor="ContactPhone" className="grey-text">
        Phone [Format: 0555-123-456]
      </label>
      <input
        type="tel"
        pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
        name="number"
        id="ContactPhone"
        className="form-control"
        value={contactData.number}
        onChange={valueChanger}
        required
      />
      <br />
      <label htmlFor="ContactEmail" className="grey-text">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="ContactEmail"
        className="form-control"
        value={contactData.email}
        onChange={valueChanger}
        required
      />
      <br />
      <label htmlFor="ContactPhoto" className="grey-text">
        Photo
      </label>
      <input
        type="text"
        name="avatarUrl"
        id="ContactPhoto"
        className="form-control"
        value={contactData.avatarUrl}
        onChange={valueChanger}
        required
      />

      <div className="text-center mt-4">
        <MDBBtn
          color="secondary"
          type="button"
          size="sm"
          onClick={backToContacts}
        >
          <i className="fas fa-arrow-left" /> Back to contacts
        </MDBBtn>
        <MDBBtn
          color="indigo"
          type="submit"
          size="sm"
          onClick={isEdit ? editContact : postContact}
        >
          <i className={isEdit ? "fas fa-edit" : "fas fa-save"} /> {btnName}
        </MDBBtn>
      </div>
    </form>
  );
};

export default ContactForm;
