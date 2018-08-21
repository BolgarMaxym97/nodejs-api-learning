const usersRouter = require('./users');
module.exports = (app, db) => {
    usersRouter(app, db);
    // Other handlers
};