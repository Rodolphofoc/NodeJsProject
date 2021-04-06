'use strict';

const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.authenticate = async (data) => {
    const res = await User.findOne({
        email: data.email,
        password: data.password
    });
    return res;
}
