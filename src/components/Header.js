import React, { Component, Fragment } from 'react';
import CounterButton from './CounterButton';

export class Header extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}

	render() {
		return (
			<Fragment>
				<h1 className='f2'>Robofriends</h1>;
				<CounterButton style={{ color: 'green' }} />
			</Fragment>
		);
	}
}

export default Header;
