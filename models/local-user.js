const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const LocalUserSchema = new Schema({
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

// LocalUserSchema.addHook("beforeLocal", user => {
//     user.password = bcrypt.hashSync(
//         user.password,
//         bcrypt.genSaltSync(10),
//         null
//     );
// });

const LocalUser = mongoose.model("localuser", LocalUserSchema);

module.exports = LocalUser;