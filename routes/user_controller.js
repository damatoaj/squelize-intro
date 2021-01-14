const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const DB = require('../models');

//index -   get /usersd
ROUTER.get('/', (req, res) => {
    console.log('----------get /users--------')
    //query my database for all users
    DB.user.findAll()
    .then(users => {
        res.send(users);
    }).catch(err => {
        console.log(err);
        res.send('ERROR')
    })
    
})

//new - get /users/new
ROUTER.get('/new', (req, res) => {
    console.log('----------get /users/new--------')
    res.render('users/new');
})

//create - post /users
ROUTER.post('/', (req, res) => {
    console.log('----------post /users--------')
    //create a new user with the information from req.body
    DB.user.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: Math.floor(req.body.age),
        email: req.body.email
    }).then(user => {
        console.log(`user ${user.name} was created!`)
        //redirect to the index for all users
        res.redirect('/users')
    }).catch(err => {
        console.log(err)
        res.redirect('/users/new')
    })

    // DB.user.create(req.body) is an alternative if you want to use all data
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