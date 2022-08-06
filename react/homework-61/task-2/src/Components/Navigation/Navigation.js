import React, { Component } from "react";
import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavItem,
	MDBNavLink,
	MDBNavbarToggler,
	MDBCollapse
} from "mdbreact";

const links = [
	{ to: "/", label: "", exact: true },
	{ to: "/breeds", label: "Breeds", exact: false },
	{ to: "/imgsearch", label: "Images/Search", exact: false }
];

class NavbarPage extends Component {
	state = {
		isOpen: false
	};

	toggleCollapse = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		return (
			<MDBNavbar color='indigo' dark expand='md'>
				<MDBNavbarBrand>
					<MDBNavLink to='/'>
						<strong className='white-text'>Cat</strong>
					</MDBNavLink>
				</MDBNavbarBrand>
				<MDBNavbarToggler onClick={this.toggleCollapse} />
				<MDBCollapse id='navbarCollapse3' isOpen={this.state.isOpen} navbar>
					<MDBNavbarNav left>
						{links.map((link, index) => {
							return (
								<MDBNavItem key={index}>
									<MDBNavLink to={link.to} exact={link.exact}>
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
