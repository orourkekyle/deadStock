const axios = require("axios");
// will need to create model for saving shoes into
// const db = require("../models");

module.exports = {
    findall: function(req, res) {
        const { query: params } = req;

        const url = `https://api.thesneakerdatabase.com/v1/sneakers?limit=100&name=${params.shoeName}`;
        console.log("params", params);
        console.log("URL", url);

        console.log("Hit the findAll inside sneakerController", req.body, req.params);

        axios
            .get(`https://api.thesneakerdatabase.com/v1/sneakers?limit=100&${params.shoeName}`)
            .then(results => {
                console.log("this is results in axios get: ", results.data.results);
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
            .then((result) => {
                console.log("these are the results we want: ", result)
                res.json(result);
            })
    }
}