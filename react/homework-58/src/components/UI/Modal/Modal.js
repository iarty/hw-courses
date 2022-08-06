import React, { Fragment } from 'react';
import classes from './Modal.module.css';
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => (
  <Fragment>
    <Backdrop
      show={props.show}
      onClick={props.close}
    />
    <div className={classes.Modal} style={{
      transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: props.show ? '1' : '0'
    }}>
      <div className={classes.ModalTitleWrap}>
        <h1 className={classes.ModalTitle}>{props.title}</h1>
        <i className="far fa-window-close" onClick={props.close} style={{ cursor: 'pointer' }}></i>
      </div>
      <hr />
      {props.children}
    </div>
  </Fragment>
);

export default Modal;