const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    'secret': process.env.SECRET,
    'database': process.env.MONGO_URL,
};