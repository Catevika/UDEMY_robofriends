import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './containers/App';
import './index.css';
import * as serviceWorker from './serviceWorker';

import 'tachyons';

import { createStore, applyMiddleware } from 'redux';
import { searchRobots } from './reducers';

const store = createStore(
	searchRobots,
	composeWithDevTools(applyMiddleware(logger))
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
