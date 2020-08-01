const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const path = require('path');
const createError = require('http-errors');
const routes = require('./routes');

module.exports = (config) => {
    const app = express()
    const port = 5000;

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser());

    app.use(session({
        secret: 'very secret 12345',
        resave: true,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
    }));

    if (app.get('env') === 'development') {
        app.locals.pretty = true;
    }

    // use routes
    app.get('/health', (req, res) => res.status(200).send({ status: 'OK' }));
    app.listen(port, () => console.log(`App listening at http://localhost:${port}`));

    return app;
}