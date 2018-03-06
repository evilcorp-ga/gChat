'use strict';

module.exports = function (req, res, next) {
    req.ctx = {};
    req.ctx.title = 'geoChat';
    req.ctx.env = process.env;
    next();
}
