const moduleAlias = require('module-alias/register');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

dotenv.config();
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
}).then(() => console.log('-Connection to DB is successfully'))
    .catch(e => console.log('-Connection error-' + e));

// noinspection JSAnnotator
require('./app/routes')(app, mongoose.Schema);
app.listen(port, () => {
    console.log('Port is ' + port);
});