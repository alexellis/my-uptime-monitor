"use strict"

// Copyright: Zack Bloom MIT
// https://gist.github.com/zackbloom/96e946e0c616e3c0bf160d5b93cf8e31

const crypto = require('crypto');

module.exports = (event, context) => {

    const key = crypto.pbkdf2Sync(crypto.randomBytes(16), crypto.randomBytes(16), 35000, 32, 'sha512');
    const result = key.toString('hex');

    context
        .status(200)
        .succeed(result);
}
