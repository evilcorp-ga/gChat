'use strict';

var morgan = require('morgan');
var logger = require('../lib/logs');

module.exports = morgan("combined", { "stream": logger.stream });
