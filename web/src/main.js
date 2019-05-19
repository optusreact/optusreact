import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import doctorsApp from 'optus-core/reducers'
import Router from './app/route/route';

let store = createStore(doctorsApp);

ReactDOM.render(
	<Provider store = {store}>
		<Router />
	</Provider>,
	document.getElementById('app')
);
