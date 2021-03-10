// const db = require('../models');
// const router = require('express').Router();
// const isAuthenticated = require('../utils/middleware').isAuthenticated;


// router.get('/', isAuthenticated, function(req, res) {
//     db.Topic.find(req.query)
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
// });

// router.get('/:id', isAuthenticated, function(req, res) {
//     db.Topic.findById(req.params.id)
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
// });

// router.post('/', isAuthenticated, function(req, res) {
//     db.Topic.create({
//         user: req.user._id,
//         ...req.body
//     })
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
// });


// router.put('/:id', isAuthenticated, function(req, res) {
//     db.Topic.findByIdAndUpdate(req.params.id, req.body)
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
// });


// router.delete('/:id', isAuthenticated, function(req, res) {
//     db.Topic.findByIdAndDelete(req.params.id)
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
// });

// router.patch('/:id', isAuthenticated, function(req, res) {
//     db.Topic.findByIdAndUpdate(req.params.id, req.body)
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
// });


// module.exports = router;
