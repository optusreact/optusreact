import { combineReducers } from "redux";
import * as login_actions from "./actions";

const initialState = {
	
}
const user = (state=initialState , action) => {
	switch (action.type) {
		case login_actions._userLoggdIn:
			return action.user;
		default:
			return state;
	}
};

export default combineReducers({
	user:user
})


