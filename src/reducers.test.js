import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './constants.js';

import { setSearchField, requestRobots } from './actions';

import * as reducers from './reducers';

describe('searchRobots', () => {
	const inititalStateSearch = {
		searchField: ''
	};

	it('should return the initial state', () => {
		expect(reducers.searchRobots(undefined, {})).toEqual(inititalStateSearch);
	});

	const state = inititalStateSearch;
	const action = setSearchField('abc');

	it('should handle the CHANGE_SEARCH_FIELD', () => {
		expect(reducers.searchRobots(state, action)).toEqual({
			...state,
			action,
			searchField: 'abc'
		});
	});
});

/* requestRobots reducer tests */

const initialStateRobots = {
	isPending: false,
	robots: [],
	error: ''
};

it('should return the initial state', () => {
	expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
});

const state = initialStateRobots;

it('should handle REQUEST_ROBOTS_PENDING', () => {
	const action = {
		type: REQUEST_ROBOTS_PENDING
	};

	expect(reducers.requestRobots(state, action)).toEqual({
		...state,
		action,
		isPending: true
	});
});

it('should handle REQUEST_ROBOTS_SUCCESS', () => {
	const action = {
		type: REQUEST_ROBOTS_SUCCESS,
		payload: [
			{
				id: 123,
				name: 'test',
				email: 'test@gmail.com'
			}
		]
	};

	expect(reducers.requestRobots(state, action)).toEqual({
		...state,
		action,
		robots: action.payload,
		isPending: false
	});
});

it('should handle REQUEST_ROBOTS_FAILED', () => {
	const action = {
		type: REQUEST_ROBOTS_FAILED,
		payload: 'ERROR !!!'
	};

	expect(reducers.requestRobots(state, action)).toEqual({
		...state,
		action,
		error: action.payload,
		isPending: false
	});
});
