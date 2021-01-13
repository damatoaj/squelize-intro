// Get all our models
const db = require('./models');

// ---------------- Create ----------------
// db.user.create({
//     name: 'Steve Peters',
//     age: 45,
//     email: 'stpets@bigdaddybezos.com'
// }).then(newUser => {
//     // create promise returns the new row of data that has been created
//     // otherwise it throws an error
//     console.log(newUser.name);
//     // terminate the node process at this point so it doesn't just timeout or we have to manually quit it
//     process.exit();
// }).catch(err => console.log(err));

// ---------------- Read ----------------
// db.user.findOne({
//     where: {
//         name: 'Steve Peters'
//     }
// }).then(user => {
//     console.log(`Found user ${user.name}`);
//     process.exit();
// }).catch(err => console.log(err));

// db.user.findOrCreate({
//     where: {
//         name: 'Brandi Butler'
//     },
//     defaults: {
//         email: 'brandi@notwilliams.com',
//         age: 35
//     }
// }).then(([user, created]) => {
//     // user is an obj, created is a boolean
//     console.log(`User ${user.name} was ${created ? 'created' : 'found'}`);
//     process.exit();
// }).catch(err => {
//     console.log('🐻 Bad news bears, there be an error');
//     console.log(err);
// });

// db.user.findAll()
// .then(users => {
//     console.log(`I have ${users.length} user${users.length === 1 ? '' : 's'}`);
// });

// ⛔️ ------- Ye olde way for findOrCreate
// .spread((user, created) => {
//     // user will be an obj
//     // created is a boolean
//     console.log(`User ${user.name} was ${created ? 'created' : 'found'}`);
// })

// ---------------- Update ----------------
// First param is key:value to be updated, 2nd param is standard query obj
// db.user.update({
//     name: 'Steven Peters',
//     age: 46
// }, {
//     where: {
//         id: 1
//     }
// }).then(numRowsUpdated => {
//     // numRowsUpdated is an array with one value which is the number of rows updated
//     console.log(numRowsUpdated);
// }).catch(err => console.log(err));

// ---------------- Destroy ----------------
// db.user.destroy({
//     where: {
//         name: 'Brandi Butler'
//     }
// }).then(numRowsDeleted => {
//     // numRowsDeleted is a number that represents the number of rows deleted
//     console.log(numRowsDeleted);
// }).catch(err => console.log(err));

let firstUser;

db.user.findByPk(1)
.then(user => {
    firstUser = user;
    console.log(`First user is ${firstUser.name}`);
})
.catch(err => console.log(err));
