// noinspection JSAnnotator
const JwtStrategy = require('passport-jwt').Strategy;
// noinspection JSAnnotator
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('@models/user');
const config = require('./main');

// Setup work and export for the JWT passport strategy
module.exports = function (passport) {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        User.findOne({id: jwt_payload.id}, (err, user) => {
            if (err) {
                return done(err, false);
            }
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        });
    }));
};