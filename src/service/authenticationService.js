const userAccessor = require('../accessor/userAccessor');

const isTokenValid = (email, token, tokenCB) => {
    userAccessor.getUserByEmail(email, function(err, userDetail) {
        if(err || userDetail === null || typeof userDetail === 'undefined') {
            tokenCB('Please login before accessing the API');
        } else {
            tokenCB(undefined, userDetail);
        }
    })
}

module.exports = {
    isTokenValid
}