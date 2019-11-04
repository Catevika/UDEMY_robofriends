import React, { Component } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';
import './MainPage.css';

class MainPage extends Component {
	componentDidMount() {
		this.props.onRequestRobots();
	}

	filteredRobots = () => {
		return this.props.robots.filter(robot => {
			return robot.name
				.toLowerCase()
				.includes(this.props.searchField.toLowerCase());
		});
	};

	render() {
		const { onSearchChange, robots, isPending } = this.props;

		return (
			<div className='tc'>
				<Header />
				<Searchbox searchChange={onSearchChange} />
				<Scroll>
					{isPending ? (
						<h1>Loading...</h1>
					) : (
						<ErrorBoundary>
							<CardList robots={this.filteredRobots()} />
						</ErrorBoundary>
					)}
				</Scroll>
			</div>
		);
	}
}

export default MainPage;
