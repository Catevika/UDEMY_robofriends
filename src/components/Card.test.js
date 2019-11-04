import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme'; // mount and render can also be used - see Enzyme documentation

it('expects to render Card component', () => {
	expect(shallow(<Card />).debug()).toMatchSnapshot();
});
