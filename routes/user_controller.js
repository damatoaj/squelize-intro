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
    console.log(req.body);
    res.send('NEW USER WHO DIS');
});

// Show/Details — GET /users/:id

// Edit — GET /users/:id/edit

// Update — PUT /users/:id

// Destroy — DELETE /users/:id

module.exports = router;