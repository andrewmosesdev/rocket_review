const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const revObjSchema = new Schema(
    {
        question: {
            type: String,
            trim: true
        },
        answer: {
            type: String,
            trim: true
        },
        date: {
            type: Date,
            default: () => new Date()
        },
        isFlagged: {
            type: Boolean,
            default: false
        },
        topic: {
            type: String,
            trim: true
        },
        subtopic: {
            type: String,
            trim: true
        },
        difficulty: {
            type: String,
            trim: true
        }
    }
);

const RevObj = mongoose.model('RevObj', revObjSchema);

module.exports = RevObj;