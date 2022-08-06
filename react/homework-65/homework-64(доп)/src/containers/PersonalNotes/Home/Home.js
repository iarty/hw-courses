import React, { Component } from "react";
import Notes from "../../../components/Notes/Notes";
import axios from "../../../axios/axios";
import { Sugar } from "react-preloaders";
import Button from "../../../components/UI/Button/Button";
import { NavLink } from "react-router-dom";

export default class Home extends Component {
	state = {
		notes: [],
		loading: true
	};

	async componentDidMount() {
		const response = await axios.get("/notes.json");
		this.dataHandler(response.data);
	}

	dataHandler = async data => {
		if (data) {
			const notes = Object.keys(data).map(key => ({ id: key, ...data[key] }));
			this.setState({ notes, loading: false });
		}
		this.setState({ loading: false });
	};

	removeNote = async id => {
		await axios.delete(`/notes/${id}.json`);
		this.setState(prevState => ({ notes: prevState.notes.filter(el => el.id !== id) }));
	};

	render() {
		return (
			<div className='container mt-5'>
				{!this.state.notes.length ? (
					<div className='text-center'>
						<NavLink to='/notes/add'>
							<Button>Add new note</Button>
						</NavLink>
					</div>
				) : (
					<ul className='d-flex flex-column align-items-center'>
						{this.state.notes.map((post, index) => (
							<Notes
								removeNote={this.removeNote}
								key={index}
								id={post.id}
								title={post.author}
								text={post.text}
							/>
						))}
					</ul>
				)}
				<Sugar customLoading={this.state.loading} />
			</div>
		);
	}
}
