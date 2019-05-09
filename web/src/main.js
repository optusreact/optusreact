import React, { Component } from "react";
import ReactDOM from "react-dom";
import configureStore from './app/store/store';
import { Provider } from 'react-redux';


import Router from './app/route/route';



const store = configureStore( window.REDUX_INITIAL_DATA);


ReactDOM.render(
	  
  <Provider store = {store}>
    <Router />
  </Provider>,
  document.getElementById('app')
);