const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const signUpUserSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true,
        trim: true,
        required: [true, "must enter username."]
    },
    password: {
        type: String,
        required: true,
        trim: true,
        required: [true, "must enter password."]
    }
});

signUpUserSchema.addHook("beforeCreate", user => {
    user.password = bcrypt.hashSync(
        user.password,
        bcrypt.genSaltSync(10),
        null
    );
});

const SignUpUser = mongoose.model("signupuser", signUpUserSchema);

module.exports = SignUpUser;