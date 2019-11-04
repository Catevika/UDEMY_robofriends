import React from 'react';
import CounterButton from './CounterButton';
import { shallow } from 'enzyme'; // mount and render can also be used - see Enzyme documentation

describe('CounterButton component', () => {
	it('expects to render CounterButton component', () => {
		const mockStyle = { color: 'red' };
		expect(
			shallow(<CounterButton style={mockStyle} />).debug()
		).toMatchSnapshot();
	});
	it('correctly increments the counter', () => {
		const mockStyle = { color: 'red' };
		const wrapper = shallow(<CounterButton style={mockStyle} />);

		wrapper.find('[id="counter"]').simulate('click');
		expect(wrapper.state()).toEqual({ count: 1 });
		wrapper.find('[id="counter"]').simulate('click');
		expect(wrapper.state()).toEqual({ count: 2 });
		expect(wrapper.props().style).toEqual({ color: 'red' });
	});
});
