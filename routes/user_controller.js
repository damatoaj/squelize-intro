const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const DB = require('../models');

//index -   get /usersd
ROUTER.get('/', (req, res) => {
    console.log('----------get /users--------')
    res.send("get all users");
})

//new - get /users/new
ROUTER.get('/new', (req, res) => {
    console.log('----------get /users/new--------')
    res.send("form for new users");
})

//create - post /users
ROUTER.post('/', (req, res) => {
    console.log('----------post /users--------')
    console.log(req.body);
    res.send("post the new users");
})

//show/details - get users/:id
ROUTER.get('/', (req, res) => {
    console.log('----------get /users--------')
    res.send("get all users");
})

//edit - get /users/:id/edit

//update - put /users/:id

//destroy - DELETE /users/:id

module.exports = ROUTER;