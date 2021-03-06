'use strict';

var express = require('express');
var morgan = require('morgan');
var helmet = require('helmet')

module.exports.start = (config) => {
    return new Promise((resolve, reject) => {
        if (!config.repo) {
            throw new Error('Please provide a repo');
        }
        if (!config.port) {
            throw new Error('No port, no cake');
        }

        //the app
        var app = express();
        app.use(morgan('dev'));
        //Help secure Express apps with various HTTP headers
        app.use(helmet())

        //the api
        require('../api/cakes')(app, config);

        //listen
        var server = app.listen(config.port, () => {
            resolve(server);
        });

    });
};
