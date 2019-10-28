import React, { Component, Fragment } from 'react';
import CounterButton from './CounterButton';

export class Header extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}

	render() {
		// console.log('Header');
		return (
			<Fragment>
				<h1 className='f2'>Robofriends</h1>;
				<CounterButton color={'red'} />
			</Fragment>
		);
	}
}

export default Header;
