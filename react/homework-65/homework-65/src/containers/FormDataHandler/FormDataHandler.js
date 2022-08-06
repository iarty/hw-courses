import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Select from "../../components/UI/Select/Select";
import axios from "../../axios/axios";
import { CATEGORIES } from "../../constants";
import { Planets } from "react-preloaders";
import TextArea from "../../components/UI/TextArea/TextArea";

export default class FormDataHandler extends Component {
	state = {
		title: "",
		content: "",
		category: CATEGORIES[0],
		loading: true
	};

	async componentDidMount() {
		const response = await axios.get(`/${this.state.category}.json`);
		const data = response.data;
		this.setState({ title: data.title, content: data.content, loading: false });
	}

	async componentDidUpdate(prevProps, prevState) {
		if (prevState.category !== this.state.category) {
			const response = await axios.get(`/${this.state.category}.json`);
			const data = response.data;
			this.setState({ title: data.title, content: data.content, loading: false });
		}
	}

	valueChanger = event => this.setState({ [event.target.name]: event.target.value });

	textAreaValueChanger = text => this.setState({ content: text });

	pageEdit = async event => {
		event.preventDefault();
		const data = { title: this.state.title, content: this.state.content };
		await axios.patch(`/${this.state.category}.json`, data);
		this.props.history.push(`/pages/${this.state.category}`);
	};

	render() {
		return (
			<MDBContainer className='mt-5'>
				<MDBRow center>
					<MDBCol md='6'>
						<form onSubmit={this.pageEdit}>
							<p className='h4 text-center mb-4'>Edit page</p>
							<label htmlFor='defaultFormContactSubjectEx' className='black-text'>
								Select page
							</label>
							<Select value={this.state.category} onChange={this.valueChanger} />
							<br />
							<label htmlFor='defaultFormContactSubjectEx' className='black-text'>
								Title
							</label>
							<input
								name='title'
								type='text'
								id='defaultFormContactSubjectEx'
								className='form-control'
								onChange={this.valueChanger}
								value={this.state.title}
								required
							/>
							<br />
							<label htmlFor='defaultFormContactMessageEx' className='black-text'>
								Page content
							</label>
							<TextArea text={this.state.content} onChange={this.textAreaValueChanger} />
							<div className='mt-4'>
								<MDBBtn color='info' type='submit'>
									Save
								</MDBBtn>
							</div>
						</form>
					</MDBCol>
				</MDBRow>
				<Planets customLoading={this.state.loading} />;
			</MDBContainer>
		);
	}
}
