import React, { Fragment } from "react";
import { MDBCard, MDBCardBody } from "mdbreact";
import { NavLink } from "react-router-dom";
import Btn from "../UI/Btn/Btn";

export default function Posts(props) {
	return (
		<Fragment>
			<li className='chat-message d-flex justify-content-between mb-4'>
				<MDBCard>
					<MDBCardBody style={{ width: 900 }}>
						<div className='d-flex justify-content-between'>
							<h3>{props.title}</h3>
							<div>
								<NavLink to={"/notes/" + props.id}>
									<Btn type='edit' />
								</NavLink>
								<Btn type='close' onClick={() => props.removeNote(props.id)} />
							</div>
						</div>
						<hr />
						<div className='mb-3 p-2'>{props.text}</div>
					</MDBCardBody>
				</MDBCard>
			</li>
		</Fragment>
	);
}
