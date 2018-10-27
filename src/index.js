import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import store from './store';
import App from './App';
import 'normalize.css/normalize.css';
import './assets/styles/base.scss';

const BASE_URL = 'https://ride-my-way-zaz.herokuapp.com/api/v1/';
axios.defaults.baseURL = BASE_URL;

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
