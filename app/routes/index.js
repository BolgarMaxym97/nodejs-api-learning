const passport = require('passport');
// noinspection JSAnnotator
require('@config/passport')(passport);

const usersRouter = require('./users');
const authRouter = require('./auth');

module.exports = (app, db) => {
    // Unprotected routes
    app.use('/', (req, res, next) => {
        authRouter(app, db);
        next();
    });

    app.use('/', passport.authenticate('jwt', {session: false}), (req, res, next) => {
        // Protected routes
        usersRouter(app, db);
        next();
    });
};