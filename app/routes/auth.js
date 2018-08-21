const User = require('@models/user');
const jwt = require('jsonwebtoken');
const config = require('@config/main');

module.exports = (app, db) => {
    //Registration new user
    app.post('/register', (req, res) => {
        if (!req.body.email || !req.body.password) {
            res.json({success: false, message: 'Please enter email and password.'});
        } else {
            let newUser = new User(req.body);
            newUser.save((err, user) => {
                if (err) {
                    return res.json({success: false, message: 'That email address already exists or server error.'});
                }
                res.json({success: true, message: 'Successfully created new user.', user: user});
            });
        }
    });

    // Authenticate the user and get a JSON Web Token to include in the header of future requests.
    app.post('/login', (req, res) => {
        User.findOne({
            email: req.body.email
        }, (err, user) => {
            if (err) throw err;

            if (!user) {
                res.send({success: false, message: 'Authentication failed. User not found.'});
            } else {
                user.comparePassword(req.body.password, (err, isMatch) => {
                    if (isMatch && !err) {
                        let token = jwt.sign(user.toJSON(), config.secret, {
                            expiresIn: 10800
                        });
                        res.json({success: true, token: 'JWT ' + token});
                    } else {
                        res.send({success: false, message: 'Authentication failed. Passwords did not match.'});
                    }
                });
            }
        });
    });
};