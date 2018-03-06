'use strict';

var express = require('express');

var router = express.Router();

router.use(require('./static'));
router.use(require('./logs'));
router.use(require('./parser'));
router.use(require('./context'));

module.exports = router;
