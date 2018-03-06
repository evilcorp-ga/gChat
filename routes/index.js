'use strict';

var express = require('express');

var router = express.Router();

var chatRoutes = require('./chat');

router.use('/chat', chatRoutes);

router.get('/', (req, res, next) => {
    res.render('pages/index', req.ctx);
});

module.exports = router;
