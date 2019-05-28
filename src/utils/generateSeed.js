'use-strict'

const randomstring = require('randomstring');

const length = 81;
const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ9';

module.exports = () => {
    return randomstring.generate({
        length: length,
        charset: charset
    });
};