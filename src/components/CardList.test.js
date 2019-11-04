import React from 'react';
import Cardlist from './CardList';
import { shallow } from 'enzyme'; // mount and render can also be used - see Enzyme documentation

describe('CardList component', () => {
	it('expects to render Cardlist component', () => {
		const mockRobots = [
			{
				id: 1,
				name: 'John Snow',
				email: 'john@gmail.com'
			}
		];
		expect(shallow(<Cardlist robots={mockRobots} />).debug()).toMatchSnapshot();
	});
});
