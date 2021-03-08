const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subTopicSchema = new Schema(
    {
        subTopic: {
            type: String,
            trim: true
        },
        date: {
            type: Date,
            default: () => new Date()
        }
    }
);

const SubTopic = mongoose.model('subTopic', subTopicSchema);

module.exports = SubTopic;