const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require ("bcrypt");

const UserSchema = new Schema({
    data: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate: [({ length }) => length >=6, "Username must be at LEAST 6 characters."]
    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate: [({ length }) => length >=6, "Password must be at LEAST 6 characters."]
    }
});

const User = mongoose.model("User", UserSchema);
User.prototype.validPassword = function(password) {
    console.log(password, this.password) // password probably regular pass and this.password is probably hashed
    return bcrypt.compareSync(password, this.password);
  };

User.addHook("beforeCreate", user => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

export default User;