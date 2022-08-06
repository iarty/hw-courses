import React, { Component } from "react";
import axios from "../../axios";
import Select from "../../Components/UI/Select/Select";
import CatInfo from "../../Components/CatInfo/CatInfo";
import Preloader from "../../Components/UI/Preloader/Preloader";

export default class CatBreeds extends Component {
	state = {
		cats: [],
		selectedCat: "",
		loading: false,
		selectBlock: false
	};

	async componentDidMount() {
		const response = await axios.get("/breeds");
		const cats = response.data.map(cat => ({ id: cat.id, name: cat.name }));
		this.setState({ cats });
	}

	submitHandler = async event => {
		this.setState({ loading: true });
		const id = event.target.value;
		const response = await axios.get(`/images/search?breed_id=${id}`);
		const selectedCat = response.data[0];
		this.setState({ selectedCat });
		this.setState({ loading: false });
	};

	render() {
		return (
			<div className='container my-5'>
				<div>
					<h1>Cat breed info</h1>
					<Select onChange={this.submitHandler} name='Select cat'>
						{this.state.cats.map((item, index) => (
							<option key={index} value={item.id}>
								{item.name}
							</option>
						))}
					</Select>
				</div>
				<div className='p-5'>
					{this.state.loading ? <Preloader /> : <CatInfo data={this.state.selectedCat} />}
				</div>
			</div>
		);
	}
}
