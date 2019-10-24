import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { logger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './containers/App';
import { searchRobots, requestRobots } from './reducers';
import './index.css';
import 'tachyons';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({ searchRobots, requestRobots });

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunkMiddleware, logger))
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,

	document.getElementById('root')
);

// If you want your Card to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
