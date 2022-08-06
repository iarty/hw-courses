import React, { Component } from "react";
import InputGroup from "../../components/InputGroup/InputGroup";
import WatchList from "../../components/WatchList/WatchList";
import axios from "../../axios/axios";
import { Sugar } from "react-preloaders";

export default class FilmWatchList extends Component {
	state = {
		text: "",
		filmList: [],
		loader: true,
		spinner: true
	};

	async componentDidMount() {
		console.log("Films componentDidMount");
		const response = await axios.get("/films.json");
		this.dataHandler(response.data);
	}

	dataHandler = async data => {
		if (data) {
			const filmList = Object.keys(data).map(key => ({
				id: key,
				...data[key]
			}));
			this.setState({ filmList, loading: false, text: "", spinner: false });
		}
		this.setState({ loading: false, spinner: false });
	};

	valueChanger = event => this.setState({ [event.target.name]: event.target.value });

	addFilm = async event => {
		event.preventDefault();
		this.setState({ spinner: true });
		await axios.post("/films.json", { name: this.state.text });
		const response = await axios.get("/films.json");
		this.dataHandler(response.data);
	};

	WatchListItemHandler = (e, index) => {
		const value = e.target.value;
		const filmList = [...this.state.filmList];
		filmList[index].name = value;
		this.setState({ filmList });
	};

	saveFilm = async id => {
		let filmList = [...this.state.filmList];
		const sendData = filmList.reduce(
			(acc, el) => (el.id === id ? (acc = { id: id, name: el.name }) : null),
			{}
		);
		await axios.put(`/films/${id}.json`, sendData);
	};

	removeFilm = async id => {
		await axios.delete(`/films/${id}.json`);
		this.setState(prevState => ({ filmList: prevState.filmList.filter(el => el.id !== id) }));
	};

	render() {
		return (
			<div className='container mt-5 w-50'>
				<InputGroup
					addFilm={this.addFilm}
					inputHandler={this.valueChanger}
					inputValue={this.state.text}
					name='text'
					spinner={this.state.spinner}
				/>
				<WatchList
					films={this.state.filmList}
					removeFilm={this.removeFilm}
					saveFilm={this.saveFilm}
					inputHandler={this.WatchListItemHandler}
				/>
				<Sugar customLoading={this.state.loading} />
			</div>
		);
	}
}
