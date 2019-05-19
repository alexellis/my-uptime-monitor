"use strict"

const crypto = require('crypto');

module.exports = (event, context) => {

    const key = crypto.pbkdf2Sync(crypto.randomBytes(16), crypto.randomBytes(16), 35000, 32, 'sha512');
    const result = key.toString('hex');

    context
        .status(200)
        .succeed(result);
}
