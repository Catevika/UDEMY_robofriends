import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './constants.js';

const initialStateSearch = {
	searchField: ''
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
	switch (action.type) {
		case CHANGE_SEARCH_FIELD:
			return { ...state, action, searchField: action.payload };
		default:
			return state;
	}
};

const initialStateRobots = {
	isPending: false,
	robots: [],
	error: ''
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
	switch (action.type) {
		case REQUEST_ROBOTS_PENDING:
			return { ...state, action, isPending: true };
		case REQUEST_ROBOTS_SUCCESS:
			return {
				...state,
				action,
				robots: action.payload,
				isPending: false
			};
		case REQUEST_ROBOTS_FAILED:
			return {
				...state,
				action,
				error: action.payload,
				isPending: false
			};
		default:
			return state;
	}
};
