import React, { Component } from "react";
import Select from "../../Components/UI/Select/Select";
import axios from "../../axios";
import Button from "../../Components/UI/Button/Button";
import classes from "./CatSearchImg.module.css";
import Preloader from "../../Components/UI/Preloader/Preloader";

export default class CatSearchImg extends Component {
	state = {
		cats: [],
		imageData: {
			type: "",
			perpage: "",
			breed: ""
		},
		images: [],
		loading: false
	};

	async componentDidMount() {
		const response = await axios.get("/breeds");
		const cats = response.data.map(cat => ({ id: cat.id, name: cat.name }));
		this.setState({ cats });
	}

	submitHandler = (event, val) => {
		const target = val.replace(/\s+/g, "").toLowerCase();
		const value = event.target.value;
		const imageData = { ...this.state.imageData };
		imageData[target] = value;
		this.setState({ imageData });
	};

	clickHandler = async () => {
		this.setState({ loading: true });
		const string = this.state.imageData;
		const url = `/images/search?limit=${string.perpage}&mime_types=${string.type}&order=Random&size=small&breed_ids=${string.breed}`;
		const response = await axios.get(url);
		const images = response.data;
		this.setState({ images, loading: false });
	};

	render() {
		return (
			<div className='container my-5'>
				<div className='d-flex'>
					<h1>Cat gallery</h1>
				</div>
				<div>
					<Select name='Breed' onChange={this.submitHandler}>
						{this.state.cats.map((item, index) => (
							<option key={index} value={item.id}>
								{item.name}
							</option>
						))}
					</Select>
					<div className='mt-3 d-flex'>
						<Select name='Type' onChange={this.submitHandler}>
							<option value='gif,jpg,png'>All</option>
							<option value='jpg,png'>Static</option>
							<option value='gif'>Animated</option>
						</Select>
						<div className='mx-2'></div>
						<Select name='Per page' onChange={this.submitHandler}>
							<option value='3'>3</option>
							<option value='6'>6</option>
							<option value='9'>9</option>
							<option value='18'>18</option>
						</Select>
					</div>
				</div>
				<div className='text-center my-4'>
					<Button searchCat={this.clickHandler}>Show cats</Button>
				</div>
				<hr />
				<div className='row wrap'>
					{this.state.loading ? (
						<Preloader />
					) : (
						this.state.images.map((img, index) => (
							<div
								key={index}
								className={classes.img_pos}
								style={{ background: `url("${img.url}") 50% / cover no-repeat` }}
							></div>
						))
					)}
				</div>
			</div>
		);
	}
}
