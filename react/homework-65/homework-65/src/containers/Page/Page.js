import React, { Component, Fragment } from "react";
import axios from "../../axios/axios";
import { Planets } from "react-preloaders";
import ReactHtmlParser from "react-html-parser";
import Spinner from "../../components/UI/Spinner/Spinner";

export default class Page extends Component {
	state = {
		page: {
			title: "",
			content: ""
		},
		loading: true
	};

	async componentDidMount() {
		const response = await axios.get(`/${this.props.match.params.name}.json`);
		const page = response.data;
		if (page) {
			this.setState({ page, loading: false });
		}
		this.setState({ loading: false });
	}

	async componentDidUpdate(prevProps) {
		if (prevProps.match.params.name !== this.props.match.params.name) {
			this.setState({ loading: true });
			const response = await axios.get(`/${this.props.match.params.name}.json`);
			const page = response.data;
			if (page) {
				this.setState({ page, loading: false });
			}
			this.setState({ loading: false });
		}
	}

	render() {
		return (
			<Fragment>
				{this.state.loading ? (
					<Spinner />
				) : (
					<div className='text-center'>
						<h1 className='text-center'>{this.state.page.title || "Start Page!"}</h1>
						<hr />
						<div className='text-center p-3'>
							{ReactHtmlParser(
								this.state.page.content ||
									"wysiwyg при редактировании страниц с картинками, портит верстку"
							)}
						</div>
					</div>
				)}
				<Planets customLoading={this.state.loading} />
			</Fragment>
		);
	}
}
