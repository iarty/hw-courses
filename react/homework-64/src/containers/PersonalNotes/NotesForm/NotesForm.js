import React, { Component } from "react";
import classes from "./NotesForm.module.css";
import Input from "../../../components/UI/Input/Input";
import { MDBBtn } from "mdbreact";
import axios from "../../../axios/axios";
import TextArea from "../../../components/UI/TextArea/TextArea";
import { Sugar } from "react-preloaders";

export default class NotesForm extends Component {
	state = {
		note: {
			author: "",
			text: ""
		},
		loading: false
	};

	async componentDidMount() {
		this.setState({ loading: false });
		if (this.props.match.params.id) {
			const response = await axios.get(`/notes/${this.props.match.params.id}.json`);
			const note = response.data;
			this.setState({ note, loading: false });
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps !== this.props) {
			this.setState({
				note: {
					author: "",
					text: ""
				},
				loading: false
			});
		}
	}

	valueChanger = event => {
		const note = { ...this.state.note };
		note[event.target.name] = event.target.value;
		this.setState({ note });
	};

	sendData = async event => {
		event.preventDefault();
		await axios.post("/notes.json", this.state.note);
		this.props.history.push("/notes");
	};

	updateData = async () => {
		await axios.put(`/notes/${this.props.match.params.id}.json`, this.state.note);
		this.props.history.push("/notes");
	};

	render() {
		const cls = [classes.FormDataHandler, "container"];
		return (
			<div className={cls.join(" ")}>
				<h1 className='mb-5'>{this.props.headline ? this.props.headline : "Add new note"}</h1>
				<Input
					name='author'
					label='Author'
					value={this.state.note.author}
					onChange={this.valueChanger}
				/>
				<TextArea name='text' value={this.state.note.text} onChange={this.valueChanger} />
				<MDBBtn onClick={this.props.btn ? this.updateData : this.sendData}>
					{this.props.btn ? this.props.btn : "Add"}
				</MDBBtn>
				<Sugar customLoading={this.state.loading} />
			</div>
		);
	}
}
