const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    'secret': process.env.SECRET,
    'database': process.env.MONGO_URL,
    'token_expires_time': process.env.TOKEN_EXPIRES_TIME,
};