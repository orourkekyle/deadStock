const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
    shoeName: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    colorway: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    retailPrice: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    sneakerId: {
        type: String,
        required: true,
        unique: true
    },
    googleIds: []
});

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

module.exports = Wishlist;