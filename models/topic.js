const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const topicSchema = new Schema(
    {
        topic: {
            type: String,
            trim: true
        },
        date: {
            type: Date,
            default: () => new Date()
        }
    }
);

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;