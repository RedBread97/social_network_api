const {Schema, model} = require('mongoose')
const reactionSchema = require('./reactions')

const thoughtsSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now, //how to set to current time?

    },
    username: {
        type: String,
        required: true,
        ref: 'users',
    },
    reactions: [reactionSchema],
},
{
    toJSON: {
        getters: true,
    },
});
thoughtsSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thoughts = model('thought', thoughtsSchema);

module.exports = Thoughts;