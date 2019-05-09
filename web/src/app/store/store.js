import 'regenerator-runtime/runtime';
import { createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducer from '../rootReducer';

import {createLogger} from 'redux-logger';


export default function configureStore(initalState) {
  
	return createStore(
		reducer,
		initalState,
		applyMiddleware(			
			thunk,			
			createLogger(true)
			)
		)
}