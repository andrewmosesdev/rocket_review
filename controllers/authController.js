const jwt = require('jsonwebtoken');
const util = require('util');
const router = require('express').Router();
const db = require('../models');
const signAsync = util.promisify(jwt.sign);

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        // Find user
        const user = await db.User.findOne({ email: email });

        if (!user) {
            res.status(400).send('User not found.');
        }
        const isGoodPassword = await user.validPassword(password);
        if (!isGoodPassword) {
            res.status(400).send('Invalid Password.');
        }
        // Create JWT token
        const token = await signAsync(
            { _id: user._id, email: user.email, isAdmin: user.isAdmin, firstName: user.firstName, lastName: user.lastName },
            process.env.SECRET,
            {
                expiresIn: '24h',
                algorithm: 'HS256'
            }
        );
        // send token and user data back. Selecting only certain parts of the user
        res.json({
            token, user: {
                _id: user._id,
                email: user.email
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;