const axios = require('axios');
const db = require('../models');

module.exports = {
    findAll: function(req, res) {
        const {query: params } = req;
        const url = "https://api.thesneakerdatabase.com/v1/sneakers?limit=100&"
        console.log("Hit the Get in the Route api/sneakers:", req.body, req.params)
        console.log("the following are the params: ", params)
        axios.get(`https://api.thesneakerdatabase.com/v1/sneakers?limit=100&${params.q}`)
        .then(results => {
            console.log("The results console log", results.data.results)
        
         return   results.data.results.filter(
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
            })
        .then((result) => {
                console.log("these are the results we want:", result);
                res.json(result)
            })
            .catch (err => console.log(err))
    }
}