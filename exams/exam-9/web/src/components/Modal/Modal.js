import React, { useEffect, useState } from "react";
import classes from "./Modal.module.css";
import Backdrop from "./Backdrop/Backdrop";
import { MDBBtn, MDBCloseIcon } from "mdbreact";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContact,
  getContactById,
  modalHandler
} from "../../store/actions/contactsActions";
import { Redirect } from "react-router-dom";
import Spinner from "../Spinner";

const Modal = () => {
  const { loading, toggler, id, contact } = useSelector(state => state);
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactById(id));
  }, [dispatch, id]);

  const handlerModal = () => {
    dispatch(modalHandler());
  };

  const moveToEdit = async () => {
    await setRedirect(true);
    handlerModal();
  };

  const removeContact = async () => {
    await dispatch(deleteContact(id));
    handlerModal();
  };

  if (redirect) {
    return <Redirect to={`/contacts/${id}/edit`} />;
  }

  return (
    <>
      <Backdrop show={toggler} onClick={handlerModal} />
      <div
        className={classes.Modal}
        style={{
          transform: toggler ? "translateY(0)" : "translateY(-100vh)",
          opacity: toggler ? "1" : "0"
        }}
      >
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className={classes.ModalTitleWrap}>
              <MDBCloseIcon onClick={handlerModal} />
            </div>

            <div className="d-flex">
              <div>
                <img
                  src={contact.avatarUrl}
                  alt={""}
                  style={{ width: 100, height: 100 }}
                />
              </div>
              <div className="ml-5">
                <h3>{contact.name}</h3>
                <p>
                  <i className="fas fa-phone-alt" /> {contact.number}
                </p>
                <p>
                  <i className="fas fa-envelope" />{" "}
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </p>
              </div>
            </div>
            <hr />
            <div className="text-right">
              <MDBBtn size="sm" onClick={moveToEdit}>
                Edit <i className="fas fa-edit" />
              </MDBBtn>
              <MDBBtn color="danger" size="sm" onClick={removeContact}>
                Delete <i className="fas fa-trash-alt" />{" "}
              </MDBBtn>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Modal;
