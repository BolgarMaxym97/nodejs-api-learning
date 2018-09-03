const passport = require('passport');
// noinspection JSAnnotator
require('@config/passport')(passport);

const authRouter = require('./auth');
const usersRouter = require('./users');
const todoListRouter = require('./todoList');

module.exports = (app, db) => {
    // Unprotected routes
    app.use('/', (req, res, next) => {
        authRouter(app, db);
        next();
    });

    // Protected routes
    app.use('/', passport.authenticate('jwt', {session: false}), (req, res, next) => {
        usersRouter(app, db);
        todoListRouter(app, db);
        next();
    });
};