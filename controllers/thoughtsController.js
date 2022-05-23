const { ObjectId } = require('mongoose').Types;

const { Users, Thoughts } = require('../models');

module.exports = {

    getThoughts(req, res) {
        Thoughts.find()
            .then(async (thoughts) => res.json(thoughts))
            .catch((err) => {
                console.error(err);
                res.status(500).json(err)
        })
    },

    createThought(req, res) {
            Thoughts.create({
                thoughtText: req.body.thoughtText,
                username: req.body.username
            })
            .then((thought) => Users.findOneAndUpdate(
                { _id: thought.username },
                { $addToSet: { thoughts: thought._id } },
                { runValidators: true, new: true }
            ))
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
            
        },
        
    getOneThought(req, res) {
        Thoughts.findOne({ _id: req.params.id })
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err))
    },

    updateThought(req, res) {
        Thoughts.findOneAndUpdate(
            { _id: req.params.id},
            { ...req.body }
        )
        .then((thought) => res.json(thought))
        }

    };