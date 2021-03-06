import React, { Component } from 'react';

export class CounterButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
		this.updateCount = this.updateCount.bind(this);
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (this.state.count !== nextState.count) {
			return true;
		}
		return false;
	}

	updateCount() {
		this.setState(state => {
			return { count: state.count + 1 };
		});
	}

	render() {
		return (
			<button id='counter' style={this.props.style} onClick={this.updateCount}>
				Count: {this.state.count}{' '}
			</button>
		);
	}
}

export default CounterButton;
