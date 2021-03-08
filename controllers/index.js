const router = require('express').Router();

module.exports = function () {
    // import controllers
    const revObjRoutes = require('./revObjController');
    const userRoutes = require('./usersController');
    const authRoutes = require('./authController');
    const topicRoutes = require('./topicController');
    const subTopicRoutes = require('./subTopicController');

    // hook up to router
    router.use('/api/users', userRoutes);
    router.use('/api/revObjs', revObjRoutes);
    router.use('/api/auth', authRoutes);
    router.use('/api/topics', topicRoutes);
    router.use('/api/subTopicRoutes', subTopicRoutes);
    
    return router;
};