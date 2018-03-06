'use strict';

var express = require('express');

var router = express.Router();

router.use(require('./logs'));
router.use(require('./parser'));

module.exports = router;
