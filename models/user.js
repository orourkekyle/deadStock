const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require ("bcrypt");

const userSchema = new Schema({
    data: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true,
        trim: true,
        validate: [({ length }) => length >=6, "Username must be at LEAST 6 characters."]
    },
    password: {
        type: Password,
        required: true,

    }
})