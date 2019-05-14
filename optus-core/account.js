function getCreditCardNumber() {
    var num = "" + (Math.floor(Math.random() * 9999999999999999) + 1000000000000000);
    // num = obfuscateNumber(num);
    var segments = num.match(/.{1,4}/g);
    return segments.join(" ");
}
function obfuscateNumber(num) {
    return num.replace(/^.{12}/g, '*'.repeat(12));
}

export function getAccountDetails() {
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
