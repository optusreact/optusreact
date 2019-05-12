export const _userLoggdIn = 'login/USERLOGGEDIN';
import axios from "axios";

export const userLoggedIn = (user) => ({
	type:_userLoggdIn,
	user
})

export const login = (credential) =>(dispatch) =>{
	console.log('login action triggered', credential);

		return new Promise(function(resolve, reject) {
		 setTimeout(() => {
	         dispatch(userLoggedIn('true'));
	         resolve('true');
	      }, 2000);
		});
}

