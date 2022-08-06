import React, { Component, Fragment } from "react";
import TodoItem from "../../components/TodoItem/TodoItem";
import axios from "../../axios/axios";
import { Sugar } from "react-preloaders";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";

export default class ToDo extends Component {
	state = {
		text: "",
		todoItems: [],
		loading: true
	};

	async componentDidMount() {
		console.log("Todo componentDidMount");
		const response = await axios.get("/todo.json");
		this.dataHandler(response.data);
	}

	dataHandler = async data => {
		if (data) {
			const todoItems = Object.keys(data).map(key => ({
				id: key,
				...data[key]
			}));
			this.setState({ todoItems, loading: false, text: "" });
		}
		this.setState({ loading: false });
	};

	onChanged = event => this.setState({ [event.target.name]: event.target.value });

	onDelete = async id => {
		await axios.delete(`/todo/${id}.json`);
		this.setState(prevState => ({ todoItems: prevState.todoItems.filter(el => el.id !== id) }));
	};

	onCompleted = async id => {
		const index = this.state.todoItems.findIndex(p => p.id === id);
		const todoItems = [...this.state.todoItems];
		todoItems[index].isCompleted = !todoItems[index].isCompleted;
		this.setState({ todoItems });
		await axios.put(`/todo/${id}.json`, this.state.todoItems[index]);
	};

	addTodoItems = async event => {
		event.preventDefault();
		const newTodo = { value: this.state.text, isCompleted: false };
		await axios.post("/todo.json", newTodo);
		const response = await axios.get("/todo.json");
		this.dataHandler(response.data);
	};

	render() {
		return (
			<Fragment>
				<div className='w-50 container  mt-5'>
					<form
						className='p-3 d-flex justify-content-around align-items-start'
						onSubmit={this.addTodoItems}
					>
						<Input name='text' value={this.state.text} onChange={this.onChanged} />
						<Button> Add</Button>
					</form>
					<div>
						<h3 className='my-4'>Todo list</h3>
						<small className='d-block text-right'>
							There are {this.state.todoItems.length} todos.
						</small>
						<div className='list-group'>
							{this.state.todoItems.map((item, index) => {
								return (
									<TodoItem
										completed={item.isCompleted}
										key={index}
										value={item.value}
										onDelete={() => this.onDelete(item.id)}
										onCompleted={() => this.onCompleted(item.id)}
									/>
								);
							})}
						</div>
					</div>
				</div>
				<Sugar customLoading={this.state.loading} />
			</Fragment>
		);
	}
}
