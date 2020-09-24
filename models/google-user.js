const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String
    },
    googleId: {
        type: String
    }
});

const User = mongoose.model("user", userSchema);

module.exports = User;