const { ObjectId } = require('mongoose').Types;
const req = require('express/lib/request');
const res = require('express/lib/response');
const { Users, Thoughts } = require('../models');
module.exports = {

    createReaction(req, res) {
        Thoughts.findOneAndUpdate(
            { thoughtId: req.params.id },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        )
        .then((reaction) => res.json({ message: 'Reaction added!' }))
        .catch((err) => res.status(500).json(err));
    },

};