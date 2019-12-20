import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

class App extends Component {
	constructor() {
		super();

		this.state = {
			persons: [],
			searchField: ""
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(users => this.setState({ persons: users }));
	}

	onSearchChange = event => {
		this.setState({ searchField: event.target.value });
	};

	render() {
		const { persons, searchField } = this.state;
		const filteredPersons = persons.filter(person =>
			person.name.toLowerCase().includes(searchField.toLowerCase())
		);

		return (
			<div className="App">
				<h1>Search Person</h1>
				<SearchBox onSearchChange={this.onSearchChange} />
				<CardList persons={filteredPersons} />
			</div>
		);
	}
}

export default App;
