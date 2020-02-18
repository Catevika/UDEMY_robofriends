import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './constants.js';

import * as actions from './actions';

import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureStore([thunkMiddleware]);

describe('setSearchField', () => {
	it('should create an action to search robots', () => {
		const text = 'Wooo';
		const expectedAction = {
			type: CHANGE_SEARCH_FIELD,
			payload: text
		};
		expect(actions.setSearchField(text)).toEqual(expectedAction);
	});

	it('handles requesting robots API', () => {
		const store = mockStore();
		store.dispatch(actions.requestRobots());
		const action = store.getActions();
		const expectedAction = {
			type: REQUEST_ROBOTS_PENDING
		};
		expect(action[0]).toEqual(expectedAction);
	});
});
