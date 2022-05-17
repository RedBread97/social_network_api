const { ObjectId } = require('mongoose').Types;
const req = require('express/lib/request');
const res = require('express/lib/response');
const { Users, Thoughts } = require('../models');

module.exports = {

    addFriend(req, res) {
        Users.findOne({ _id: req.params.friendId })
            .then((friend) =>
                !friend
                    ? res.status(404).json({ message: 'No user has that ID.' })
                    : Users.findOneAndUpdate(
                        { _id: req.params.userId },
                        { $addToSet: { friends: friend } },
                        { runValidators: true, new: true }
                    ))
            .then((user) => res.json({ message: 'friend added!' }))
            .catch((err) => res.status(500).json(err));

    },

    removeFriend(req, res) {
        Users.findOne({ _id: req.params.friendId })
            .then((friend) =>
                !friend
                    ? res.status(404).json({ message: 'No user has that ID.' })
                    : Users.findOneAndUpdate(
                        { _id: req.params.userId },
                        { $pull: { friends: friend._id } },
                        { runValidators: true, new: true }
                    ))
            .then((user) => res.json({ message: 'friend removed!' }))
            .catch((err) => res.status(500).json(err));
    }
};