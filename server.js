// Requires
const express = require('express');
const methodOverride = require('method-override');
const layouts = require('express-ejs-layouts');

// App setup
const app = express();
// View setup
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(layouts);
// Accepting Restful form data
app.use(express.urlencoded({ extended: false })); // body parsing middleware
app.use(methodOverride('_method')); // To use PUT and DELETE

// Default routes
app.get('/', (req, res) => {
    res.send("HOME");
});

// controllers will go here
app.use('/users', require('./routes/user_controller'));

// TODO: Uncomment
// app.get('/*', (req, res) => {
//     res.send("404");
// });

app.listen(process.env.PORT || 8000, () => console.log(`🎧 Listening at Port: ${process.env.PORT || 8000} 🎧`));