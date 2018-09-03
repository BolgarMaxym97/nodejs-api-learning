const User = require('@models/user');
const passport = require('passport');
// noinspection JSAnnotator
require('@config/passport')(passport);

module.exports = (app, db) => {
    // Get users
    app.get('/users', (req, res) => {
        User.find().select('id name role username').exec((err, users) => {
            res.json(users);
        })
    });

    // Get user
    app.get('/user', (req, res) => {
        User.findOne().select('id name role username').exec((err, user) => {
            res.json(user);
        })
    });

    //Create user
    app.post('/user', (req, res) => {
        let newUser = new User(req.body);
        newUser.save((err, user) => {
            if (err) {
                res.json(err)
            } else {
                res.json(user)
            }
        });
    });

    //Delete user
    app.delete('/user', (req, res) => {
        User.remove({_id: req.body.id}, (err, removed) => {
            if (removed.n !== 0) {
                res.json(true);
            } else {
                res.json(false);
            }
        });
    });
};