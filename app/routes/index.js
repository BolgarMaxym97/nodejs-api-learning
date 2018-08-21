const usersRouter = require('./users');
const authRouter = require('./auth');

module.exports = (app, db) => {
    usersRouter(app, db);
    authRouter(app, db);
};