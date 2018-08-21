const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    age: {
        type: Number,
        required:  [true, 'Age is required'],
    }
});
let User = mongoose.model('users', UserSchema);

module.exports = User;