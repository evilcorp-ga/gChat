'use strict';

var express = require('express');

var router = express.Router();



router.get('/', (req, res, next) => {
    res.render('pages/index', req.ctx);
});

module.exports = router;
