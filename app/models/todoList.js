const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoListSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'UserId is required'],
    },
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    desc: {
        type: String,
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
});

let TodoList = mongoose.model('todoLists', TodoListSchema);

module.exports = TodoList;