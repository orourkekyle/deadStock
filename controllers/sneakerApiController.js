const axios = require('axios');
const db = require('../models');

module.exports = {
    findAll: function(req, res) {
        const {query: params } = req;


        axios.get("https://api.thesneakerdatabase.com/v1/sneakers?limit=100")
        .then(results => 
            results.filter(
                result => 
                    result.id &&
                    result.brand &&
                    result.colorway &&
                    result.gender &&
                    result.shoe &&
                    result.year &&
                    result.brand &&
                    result.retailPrice &&
                    result.releaseDate &&
                    result.media.thumbUrl 
            )
        )
        .then((result) => {
            console.log("these are the results we want:", result);
        })
    }
}