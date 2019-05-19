import sortBy from 'lodash/sortBy'

import { getUser } from '../actions'

function getCreditCardNumber() {
    var num = "" + (Math.floor(Math.random() * 9999999999999999) + 1000000000000000);
    num = obfuscateNumber(num);
    var segments = num.match(/.{1,4}/g);
    return segments.join(" ");
}
function obfuscateNumber(num) {
    return num.replace(/^.{12}/g, '*'.repeat(12));
}

function performAuth() {
    return true;
}
function getAccountData() {
    var cards = [],
        usages = [];
    for (var i = 0; i < 3; i++) {
        cards.push(getCreditCardNumber());
        usages.push(i * 18 + 46 );
    }
    return {
        'account': {
            'Name': 'Gian Johansen',
            'Date of Birth': '18/11/1991',
        },
        'cards': cards,
        'usages': usages
    }
}

const login = (state = { authenticated: false, error: null, account: {} }, action) => {
    switch(action.type) {
        
        case 'LOGIN':
            console.log(['REDUX:LOGIN', action, state]);

            /* perform auth */
            var auth = performAuth();

            /* get user details */
            var account = getAccountData();

            if (auth) {
                return Object.assign({}, state, {
                    authenticated: true,
                    account: account,
                    error: null
                });
            } else {
                return Object.assign({}, state, {
                    authenticated: false,
                    error: 'Login failed, please try again'
                });
            }

        default:
            return state
    }
}

export default login