
'use strict';

const express = require('express');
const router = express.Router();
router.get('/healthcheck', function (req, res, next) {
    res.status(200).send({
        title: "First Project Node.Js",
        version: "0.0.3"
    });
});
module.exports = router;