const axios = require('axios');
const db = require('../models');

module.exports = {
    // createUrl: function(req, res) {
    //     const {query: params } = req;
    //     const randomResponseUrl = "https://api.thesneakerdatabase.com/v1/sneakers?limit=100";
    //     const namedResponseUrl = `https://api.thesneakerdatabase.com/v1/sneakers?limit=100${params.shoeName}${params.brand}${params.gender}${params.releaseYear}`;

    //     console.log("Hit the Get in the Route api/sneakers:", req.body, req.params);
    //     console.log("the following are the params: ", params);

    //     // Create if statement that switches URL based on if single param is blank. If blank ommit the param from search url.
    //     // currently if any are blank will use no params at all.
    //     if (params.shoeName  === "" || params.brand  === "" || params.gender  === "" || params.releaseYear === "") { 
    //         let url = randomResponseUrl;

    //         return url;
    //     } else {
    //         let url = namedResponseUrl;
    //         return url;
    //     }
    // },


    findAll: function (req, res) {
        const { query } = req;
        console.log('INCOMING REQ.QUERY ---> ', query)

        const reqShoeName = query.shoeName ? `&name=${query.shoeName}` : ''
        const reqBrand = query.brand ? `&brand=${query.brand}` : ''
        const reqGender = query.gender ? `&gender=${query.gender}` : ''
        const reqReleaseYear = query.releaseYear ? `&releaseYear=${query.releaseYear}` : ''
        const reqColorway = query.colorway ? `&colorway=${query.colorway}` : ''



        const completeUrl = `https://api.thesneakerdatabase.com/v1/sneakers?limit=100${reqShoeName}${reqBrand}${reqGender}${reqReleaseYear}${reqColorway}`;


        //console.log("Hit the Get in the Route api/sneakers:", req.body, req.params);
        //console.log("the following are the params: ", params);
      
        axios.get(completeUrl)

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
            .catch(err => {
                console.log("hitting the catch err res status 422 ---->", res)
                res.status(422).json(err)
            })
    }
}