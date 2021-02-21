const AdminBro = require('admin-bro');
const AdminBroExpress = require('admin-bro-expressjs');
const AdminBroMongoose = require('@admin-bro/mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const RevObj = require('../models/revObj');
AdminBro.registerAdapter(AdminBroMongoose);
const adminBro = new AdminBro({
    rootPath: '/admin',
    resources: [
        {
            resource: User,
            options: {
                // config
            }
        },
        {
            resource: RevObj,
            options: {
                // config
            }
        }
    ],
});


module.exports = adminRouter = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
    authenticate: async (email, password) => {
        const user = await User.findOne({ email });
        const matched = bcrypt.compare(password, user.password);
        if (user && matched && user.isAdmin === true) {
            return user;
        }
        return false;
    },
    
    cookiePassword: process.env.COOKIE_PASS,
});
