const router = require('express').Router();

module.exports = function () {
    // import controllers
    const revObjRoutes = require('./revObjController');
    const userRoutes = require('./usersController');
    const authRoutes = require('./authController');

    // hook up to router
    router.use('/api/users', userRoutes);
    router.use('/api/revObjs', revObjRoutes);
    router.use('/api/auth', authRoutes);
    
    return router;
};