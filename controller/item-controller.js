const {User} = require('../models');
const handle = require('../utils/promise-handler');

const getMe = async (req, res) => {
    console.log(req.user._id);
    const [itemErr, itemList] = await handle(User.findById(req.user._id));
    console.log(itemList);

    if (itemErr) {
        return res.status(500).json(err);
    }
    console.log(movieList);
    User.find({
        $and: [
            {
                items: {
                    $in: [...itemList.items]
                }
            },
            { _id: { $eq: req.user._id} }
        ]
    }).then(function (me) {
        res.json(me)
    }).catch(function (err) {
        console.log(err);
        res.status(422).json(err)
    })
}


const getUsers = async (req, res) => {
    console.log(req.user._id);
    const [itemErr, itemList] = await handle(User.findById(req.user._id))
    console.log(itemList)

    if (itemErr){
        return res.status(500).json(err);
    }
    console.log(itemList);
    User.find({
        $and: [
            {
                movies: {
                    $in: [...itemList.items]
                }
            },
            {_id: {$ne: req.user._id}}
        ]
    }).then(function (itemMatches) {
        res.json(itemMatches)
    }).catch(function (err) {
        console.log(err);
        res.status(422).json(err)
    })
}

const getSavedItems = (req, res) => {
    User.find({})
    .then(dbItemData => res.json(dbItemData))
    .catch(err => {
        console.log(err);
        res.json(err);
    })
}

const saveItem = (req, res) => {
    User.findByIdandUpdate(req.user._id, {
        $push: {items: req.body}
    }, {new: true})
    .then(dbMovieData => res.json(dbMovieData))
    .catch(err => {
        console.log(err);
        res.json(err);
    });
};

const removeItem = (req, res) => {
    console.log(typeof req.params.id);
    console.log(req.params.id);
    console.log(req.user._id);
    User.findOneAndUpdate({
        _id: req.user._id
    }, {
        $pull: {
            items: {
                itemId: parseInt(req.params.id)
            }
        }
    }, {new: true})
    .then(dbItemData => res.json(dbItemData))
    .catch(err => {
        console.log(err);
        res.json(err);
    });
};

module.exports = {
    getSavedItems,
    saveItem,
    removeItem,
    getUsers,
    getMe
}