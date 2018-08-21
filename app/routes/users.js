const User = require('@models/user');

module.exports = (app, db) => {
    // Get users
    app.get('/users', (req, res) => {
        User.find().select('id name age').exec((err, users) => {
            res.send(users);
        })
    });

    //Create user
    app.post('/user', (req, res) => {
        let newUser = new User(req.body);
        newUser.save((err, user) => {
            if (err) {
                res.send(err)
            } else {
                res.send(user)
            }
        });
    });

    //Delete user
    app.delete('/user', (req, res) => {
        User.remove({_id: req.body.id}, (err, removed) => {
            if (removed.n !== 0) {
                res.send(true);
            } else {
                res.send(false);
            }
        });
    });
};