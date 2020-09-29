const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const createUserSchema = new Schema({
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
    },
    profilePic: {
        type: String,
        required: false,
        trim: true
    }
});

// createUserSchema.addHook("beforeCreate", user => {
//     user.password = bcrypt.hashSync(
//         user.password,
//         bcrypt.genSaltSync(10),
//         null
//     );
// });

const CreateUser = mongoose.model("createuser", createUserSchema);

module.exports = CreateUser;