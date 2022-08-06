import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse
} from "mdbreact";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!setIsOpen);
  };

  return (
    <MDBNavbar color="indigo" dark expand="md">
      <MDBNavbarBrand>
        <MDBNavLink to="/" className="white-text">
          <i className="fas fa-address-book" /> Contacts Book
        </MDBNavLink>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink to="/new-contact">Add new contact</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/">
              <i className="fas fa-home" />
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default Navbar;
