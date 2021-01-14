const express = require('express');
const router = express.Router();
const db = require('../models');

// Index — GET /users
router.get('/', (req, res) => {
    console.log('🏄‍♂️ ------- GET /users');
    res.send('GET ALL THE USERS');
});

// New — GET /users/new
router.get('/new', (req, res) => {
    console.log('👑 ------- GET /users/new');
    res.send('SHOW FORM FOR NEW USER');
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