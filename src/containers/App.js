import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			robots: [],
			searchfield: ''
		};
		this.onSearchChange = this.onSearchChange.bind(this);
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: users }));
	}

	onSearchChange(event) {
		this.setState({
			searchfield: event.target.value
		});
	}

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});

		return !robots.length ? (
			<h1>Loading...</h1>
		) : (
			<div className='tc'>
				<h1 className='f2'>Robofriends</h1>
				<Searchbox searchChange={this.onSearchChange} />
				<Scroll>
					<Cardlist robots={filteredRobots} />
				</Scroll>
			</div>
		);
	}
}

export default App;
