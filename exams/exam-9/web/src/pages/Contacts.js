import React, { useEffect } from "react";
import ContactItem from "../components/ContactItem";
import { getContacts } from "../store/actions/contactsActions";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal/Modal";
import Spinner from "../components/Spinner";

const Contacts = () => {
  const dispatch = useDispatch();
  const { contacts, loading, toggler } = useSelector(state => state);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Contacts</h1>
      <hr />
      <div className="d-flex flex-wrap">
        {toggler && <Modal />}
        {loading && !contacts.length ? (
          <Spinner />
        ) : (
          contacts.map(contact => (
            <ContactItem
              key={contact.id}
              name={contact.name}
              url={contact.avatarUrl}
              id={contact.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Contacts;
