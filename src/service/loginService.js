'use strict';

const jwt = require('jsonwebtoken');
const repository = require('../repositories/userRepository');


exports.authenticate = async (data) => {
    try {

        if (!data.email || !data.password) {
            return;
        }

        return repository.authenticate(data);

    } catch (e) {
        return {
            message: 'Falha ao processar sua requisição'
        };
    }

}