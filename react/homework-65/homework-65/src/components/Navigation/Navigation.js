import React, { Component } from "react";
import { LINKS } from "../../constants";
import classes from "./Navigation.module.css";
import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavItem,
	MDBNavLink,
	MDBNavbarToggler,
	MDBCollapse
} from "mdbreact";

class NavbarPage extends Component {
	render() {
		return (
			<MDBNavbar color='indigo' dark expand='md'>
				<MDBNavbarBrand>
					<MDBNavLink to='/pages'>
						<strong className='white-text'>Logo</strong>
					</MDBNavLink>
				</MDBNavbarBrand>
				<MDBNavbarToggler onClick={this.toggleCollapse} />
				<MDBCollapse id='navbarCollapse3' navbar>
					<MDBNavbarNav right>
						{LINKS.map((link, index) => {
							return (
								<MDBNavItem key={index}>
									<MDBNavLink className={classes.link} to={link.to} exact={link.exact}>
										{link.label}
									</MDBNavLink>
								</MDBNavItem>
							);
						})}
					</MDBNavbarNav>
				</MDBCollapse>
			</MDBNavbar>
		);
	}
}

export default NavbarPage;
