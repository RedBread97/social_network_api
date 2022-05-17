const router = require('express').Router()

const { getThoughts, createThought, getOneThought, updateThought, deleteThought } = require('../../controllers/thoughtController');
const { createReaction, deleteReaction } = require('../../controllers/reactionsController');

router.route('/').get(getThoughts).post(createThought);

router.route('/:id').get(getOneThought).put(updateThought).delete(deleteThought);

router.route('/:id/reactions').post(createReaction);

router.route('/:id/deleteReaction/:reaction').put(deleteReaction)
module.exports = router;