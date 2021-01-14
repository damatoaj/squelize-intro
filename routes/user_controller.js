const express = require('express');
const router = express.Router();
const db = require('../models');

// Index — GET /users
router.get('/', (req, res) => {
    console.log('🏄‍ ------- GET /users');
    // query my database for all users
    db.user.findAll()
    .then(users => {
        res.send(users);
    }).catch(err => {
        console.log(err);
        res.send('ERROR')
    });
});

// New — GET /users/new
router.get('/new', (req, res) => {
    console.log('👑 ------- GET /users/new');
    res.render('users/new');
});

// Create — POST /users
router.post('/', (req, res) => {
    console.log('🦕 ------- POST /users');
    // Create a new user with the information from req.body
    // db.user.create(req.body) 
    db.user.create({
        name: req.body.name,
        age: Math.floor(req.body.age),
        email: req.body.email
    }).then(user => {
        console.log(`User ${user.name} was created! 😎`);
        // redirect to the index for all users
        res.redirect('/users');
    }).catch(err => {
        console.log(err);
        res.redirect('/users/new');
    });
});

// Show/Details — GET /users/:id

// Edit — GET /users/:id/edit

// Update — PUT /users/:id

// Destroy — DELETE /users/:id

module.exports = router;