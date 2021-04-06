'use strict';

const loginService = require('../service/loginService');
const jwtService = require('../jwtHelpers/JwtHelper');
const md5 = require('md5');

exports.get = (req, res, next) => {
    res.status(200).send('Get acessado');
};

exports.post = async (req, res, next) => {

    try {

        var user = await loginService.authenticate({
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY)
        });

        if (!user) {
            res.status(404).send({
                message: 'Usuário ou senha inválidos'
            });
            return;
        }

        const token = await jwtService.generateToken({
            id: user.id,
            email: user.email,
            name: user.name
        });

        res.status(201).send({
            data: {
                token: token
            }
        });

    }
    catch (e) {
        res.status(500).send('Algo de errado aconteceu');
    }


};

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};