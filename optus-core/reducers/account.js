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

function getProfileData() {
    return {
        'Name': 'Gian Johansen',
        'Date of Birth': '18/11/1991',
    }
}

function getCardData() {
    var cards = [];
    for (var i = 0; i < 3; i++) {
        cards.push(getCreditCardNumber());
    }
    return cards;
}

function getUsageData() {
    var usages = [];
    for (var i = 0; i < 3; i++) {
        usages.push(i * 18 + 46 );
    }
    return usages;
}

function getUsageBreakdown() {

}

function getBillingData() {
    return {
        'total': 23.6,
        'due': '20 May',
        'recent': [
            {
                period: "11 Jan - 10 Feb",
                value: 34.18,
                percentage: 58.70
            },
            {
                period: "11 Feb - 10 Mar",
                value: 23.09,
                percentage: 39.65
            },
            {
                period: "11 Mar - 10 Apr",
                value: 58.23,
                percentage: 100
            },
            {
                period: "11 Apr -10 May",
                value: 23.60,
                percentage: 40.53
            }
        ]
    };
}

function getAccountData() {

    var account = getProfileData();
    var cards = getCardData();
    var usages = getUsageData();
    // var billing = getBillingData();

    return {
        'account': account,
        'cards': cards,
        'usage': usages,
        // 'billing': billing
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

        case 'GET_USER':
            console.log(['REDUX:GET_USER', action, state]);

            /* get user details */
            var account = getAccountData();

            return Object.assign({}, state, {
                authenticated: true,
                account: account,
                error: null
            });
        default:
            return state
    }
}

export default login