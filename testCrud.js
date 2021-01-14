//using our models
//const User = require('./models/user');//individual models
const db = require('./models'); //get all models

//create
// db.user.create({
//     name: 'Steve Peters',
//     age: 45,
//     email: 'stpets@bigdaddybezos.com'
// }).then(newUser => {
//     //create promise returns the new row of data that has been created
//     //otherwise it throws an error
//     console.log(newUser);
//     //termina the node process at this point so that  it doesn't just timeout or we have to manually quit it
// }).catch(err => console.log(err));

//read
// db.user.findOne({
//     where: {
//         name: 'Steve Peters"'
//     }
// }).then(user => {
//     console.log(`found user ${user.name}`)
        
// }).catch(err => console.log(err));

// db.user.findOrCreate({
//     where: {
//         firstName: 'Brandi'
//     },
//     defaults: {
//         email: 'brand@notwilliams.com',
//         age: 35
//     }
// }).then(([user, created]) => {   //spread syntax
//     //user is an object, created is a boolean
//     console.log(`user ${user.firstName} was ${created ? 'created' : 'found'}`);
//     process.exit();
// }).catch(err => console.log(err));

//update
// db.user.findAll()
// .then(users => {
//     console.log(`I have ${users.length} user ${users.length === 1 ? '' : 's'}`)
// })

//first param is key:value to be updated, 2nd param is standard query obj
// db.user.update({
//     firstName: 'Steven',
//     age: 46
// }, {
//     where: {
//         id: 1
//     }
// }).then(numRowsUpdated => {
//     console.log(numRowsUpdated)
//     //numRowsUpdated is an array with one value which is the number of rows updated
// }).catch(err => console.log(err));

// // //delete
// db.user.destroy({
//         where: {
//             firstName: 'Brandi'
//         }
// }).then(numRowsDeleted => {
//     //numRowsDeleted is an integer that represents the number of rows deleted
//     console.log(numRowsDeleted)
// }).catch(err => console.log(err));
// let firstUser;
// let user;
// db.user.findByPk(1)  //Pk equals primary key
// .then(user => {
//     firstUser= user;
//     console.log(`first user is ${firstUser.firstName}`);
// })
// .catch(err => console.log(err))
