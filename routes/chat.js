'use strict';

var express = require('express');

var router = express.Router();

router.post('/new', (req, res, next) => {
    res.send('initiating new session');
});

module.exports = router;
