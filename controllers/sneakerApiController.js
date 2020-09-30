const axios = require("axios");
// will need to create model for saving shoes into
const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        const { query: params } = req;

        const randomResponseUrl = `https://api.thesneakerdatabase.com/v1/sneakers?limit=100`;
        const completeUrl = `https://api.thesneakerdatabase.com/v1/sneakers?limit=100${params.shoeName}`
        // console.log("params", params);
        // console.log("URL:", randomResponseUrl);
        // var url = "";

        // if (params.shoeName === "") {
        //     url = randomResponseUrl;
        // } else {
        //     url = completeUrl;
        // }

        console.log(" --- HIT: sneakerApiController ----");

        axios
            .get(randomResponseUrl)
            .then(results => {
                // console.log("this is results in axios get: ", results.data.results);
                return results.data.results.filter(
                    result =>
                        result.id &&
                        result.brand &&
                        result.colorway &&
                        result.gender &&
                        result.retailPrice &&
                        result.shoe &&
                        result.year &&
                        result.media.thumbUrl      
                )
            })
            .then(apiSneakers => 
                db.Wishlist.find().then(dbWishlist => apiSneakers.filter(apiSneakers => dbWishlist.every(dbWishlist =>
                    dbWishlist.sneakerId.toString() !== apiSneakers.id)
                    )
                )
            )
            .then((result) => {
                // console.log("result: ", result);
                return res.json(result);
            })
            .catch(err => res.status(422).json(err));
    }
}