'use strict';

// const repository = require('../repositories/AccessRepository');
const jwt = require('jsonwebtoken');


exports.authenticate = async (data) => {
    try {

        const res = {
            id: 1,
            email: 'Email',
            name: 'Rodolpho'
        };
        return res;

    } catch (e) {
        return {
            message: 'Falha ao processar sua requisição'
        };
    }

}