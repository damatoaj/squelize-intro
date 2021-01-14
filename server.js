//requires
const EXPRESS = require('express');
const METHODOVERRIDE = require('method-override');
const LAYOUTS = require('express-ejs-layouts');

//App setup
const APP = EXPRESS();
//VIEW SETUP
APP.set('view engine', 'ejs');
APP.use(EXPRESS.static('public'));
APP.use(LAYOUTS);
//ACCEPTING RESTFUL FORM DATA
APP.use(EXPRESS.urlencoded({ extended: false})); //body parsing middleware
APP.use(METHODOVERRIDE('_method')); //to use PUT and DELETE routes

//Default routes
APP.get('/', (req, res) => {
    res.send('home');
});

//Controllers go here

APP.get('/*', (req, res) => {
    res.send("404");
});

APP.listen(process.env.PORT || 8000, () => console.log(`listening at Port: ${process.env.PORT || 8000}`));
