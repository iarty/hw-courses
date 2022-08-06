import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBCollapse
} from "mdbreact";

const Navigation = () => {
  return (
    <MDBNavbar color="cyan" dark expand="md">
      <MDBNavbarBrand>
        <strong className="white-text">News</strong>
      </MDBNavbarBrand>
      <MDBCollapse id="navbarCollapse3" navbar>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink to="/">Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/add-news">Add new post</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default Navigation;
