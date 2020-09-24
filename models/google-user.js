const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const googleUserSchema = new Schema({
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

const GoogleUser = mongoose.model("googleuser", googleUserSchema);

module.exports = GoogleUser;