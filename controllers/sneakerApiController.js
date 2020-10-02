const axios = require('axios');
const db = require('../models');

module.exports = {
    findAll: function(req, res) {
        const { query } = req;
        console.log('INCOMING REQ.QUERY ---> ', query)

        const reqShoeName = query.shoeName? `&name=${query.shoeName}` : ''
        const reqBrand = query.brand? `&brand=${query.brand}` : ''
        const reqGender = query.gender? `&gender=${query.gender}` : ''
        const reqReleaseYear = query.releaseYear? `&releaseYear=${query.releaseYear}` : ''
        
        const annoyingPlaceholderUrl = "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0";
        
        const completeUrl = `https://api.thesneakerdatabase.com/v1/sneakers?limit=100${reqShoeName}${reqBrand}${reqGender}${reqReleaseYear}`;

        //console.log("Hit the Get in the Route api/sneakers:", req.body, req.params);
        //console.log("the following are the params: ", params);
      
        axios.get(completeUrl)
        .then(results => {
            // console.log("The results console log", results.data.results)
        
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
                // console.log("these are the results we want:", result);
                return res.json(result);
            })
            .catch (err => console.log(err))
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