const TodoList = require('@models/todoList');
const passport = require('passport');
// noinspection JSAnnotator
require('@config/passport')(passport);

module.exports = (app, db) => {
    // Get user's lists
    app.get('/lists', (req, res) => {
        TodoList.find({user_id: req.user.id}).exec((err, lists) => {
            res.json(lists);
        })
    });
    app.post('/list/create', (req, res) => {
        let newList = new TodoList(req.body);
        newList.save((err, list) => {
            if (err) {
                res.json(err)
            } else {
                res.json(list)
            }
        });
    });
};