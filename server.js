const moduleAlias = require('module-alias/register');
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');
const config = require('@config/main');
const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(passport.initialize());

mongoose.connect(config.database, {
    useNewUrlParser: true
}).then(() => console.log('-Connection to DB is successfully'))
    .catch(e => console.log('-Connection error-' + e));

// noinspection JSAnnotator
require('./app/routes')(app, mongoose.Schema);
app.listen(port, () => {
    console.log('Port is ' + port);
});