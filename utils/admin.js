const AdminBro = require('admin-bro');
const AdminBroExpress = require('admin-bro-expressjs');
const AdminBroMongoose = require('@admin-bro/mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const RevObj = require('../models/revObj');
const Topic = require('../models/topic');
const SubTopic = require('../models/subTopic');
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
        },
        // {
        //     resource: Topic,
        //     options: {
        //         // config
        //     }
        // },
        // {
        //     resource: SubTopic,
        //     options: {
        //         // config
        //     }
        // }
    ],
});


module.exports = adminRouter = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
    authenticate: async (email, password) => {
        const user = await User.findOne({ email });
        if (user) {
            const matched = await bcrypt.compare(password, user.password);
            if (matched) {
                if (user.isAdmin === true) {
                    return user;
                }
            } else {
                return false
            }
        }
        return false;
    },

    cookiePassword: process.env.COOKIE_PASS,
});
