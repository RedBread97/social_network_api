const { ObjectId } = require('mongoose').Types;
const req = require('express/lib/request');
const { Users, Thoughts } = require('../models');


module.exports = {
    getUsers(req, res) {
    Users.find()
        .then(async (users) => {
            return res.json(users);
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        })
    },

    createUser(req, res) {
        Users.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err))
    },
    
    getSingleUser(req, res) {
        Users.findOne({ _id: req.params.userId})
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err))
    },

    updateUser(req, res) {
        Users.findOneAndUpdate(
            { _id: req.params.userId },
            { ...req.body },
        )
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err))
    }

};