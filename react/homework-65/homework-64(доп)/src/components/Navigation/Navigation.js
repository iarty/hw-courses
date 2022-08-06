import React, { Component } from "react";
import { MAINLINK } from "../../Constants";
import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavItem,
	MDBNavLink,
	MDBNavbarToggler,
	MDBCollapse,
	MDBDropdown,
	MDBDropdownToggle,
	MDBDropdownMenu
} from "mdbreact";

class NavbarPage extends Component {
	render() {
		return (
			<MDBNavbar color='indigo' dark expand='md'>
				<MDBNavbarBrand>
					<MDBNavLink to='/'>
						<strong className='white-text'>Logo</strong>
					</MDBNavLink>
				</MDBNavbarBrand>
				<MDBNavbarToggler onClick={this.toggleCollapse} />
				<MDBCollapse id='navbarCollapse3' navbar>
					<MDBNavbarNav right>
						{MAINLINK.map((link, index) => {
							return (
								<MDBNavItem key={index}>
									<MDBNavLink to={link.to} exact={link.exact}>
										{link.label}
									</MDBNavLink>
								</MDBNavItem>
							);
						})}
						<MDBDropdown className={classes.DropDown}>
							<MDBDropdownToggle nav caret>
								<span className='mr-2' style={{ color: "#fff" }}>
									Personal notes
								</span>
							</MDBDropdownToggle>
							<MDBDropdownMenu>
								<NavLink to='/notes' exact>
									Home
								</NavLink>
								<br />
								<NavLink to='/notes/add'>Add</NavLink>
							</MDBDropdownMenu>
						</MDBDropdown>
					</MDBNavbarNav>
				</MDBCollapse>
			</MDBNavbar>
		);
	}
}

export default NavbarPage;
