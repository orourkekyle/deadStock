const db = require("../models/user");


module.exports = {
    create: function(req, res) {
        db.User 
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    
    findByUsername: function(req, res){
        db.User
            .findByUsername(req.body.username)
            .then(dbModel => validate)
    }
}