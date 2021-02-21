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
    },
    {
        question: 'Question 2',
        answer: 'Answer 2',
        isFlagged: false,
        topic: 'Topic 2',
        subtopic: 'Subtopic 2',
        difficulty: 'Week 2'
    },
    {
        question: 'Question 3',
        answer: 'Answer 3',
        isFlagged: false,
        topic: 'Topic 3',
        subtopic: 'Subtopic 3',
        difficulty: 'Week 3'
    },
   
];

db.User.create(userSeed);
db.RevObj.create(revObjSeed);
