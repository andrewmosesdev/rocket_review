const mongoose = require('mongoose');
const db = require('../models');


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rocket_review', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

let userSeed = [
    {
        email: 'admin@admin.com',
        password: 'admin',
        firstName: 'admin',
        lastName: 'mcadmin',
        isAdmin: true,
    }
];

let revObjSeed = [
    {
        question: 'Question 1',
        answer: 'Answer 1',
        isFlagged: false,
        topic: 'Topic 1',
        subtopic: 'Subtopic 1',
        difficulty: 'Week 1'
    }
];

db.User.findOneAndUpdate(userSeed);
db.RevObj.findOneAndUpdate(revObjSeed);
