/*
Once the association is set up, we can use:
createModel
getModels
setModel
addModel
----Replace "Model" with your model name
*/

const DB = require('./models');

// //make a pet
// DB.pet.findOrCreate({
//     where: {
//         name: 'Ballad'
//     },
//     defaults: {
//         species: 'dog',
//         description: 'v cute chocolate lab'
//     }
// }).then(([dog, created]) => {
//     console.log(`${dog.name} is ${dog.description}`)
// }).catch(err => console.log(err));

//Create an associated item with createModel
// DB.user.findOne()
// .then(user => {
//     console.log(`-----adding pet to ${user.firstName}`);
//     user.createPet({
//         name: 'Spot',
//         species: 'dog',
//         description: 'loves life with their family',
//     }).then(createdPet => {
//         console.log(`${user.firstName} just adopted their pet ${createdPet.species} ${createdPet.name}`)
//     });
// });

//Load associated items `getPet`
// DB.user.findByPk(2)
// .then(user => {
//     //load the pets for this user
//     user.getPets()
//         .then( pets => {
//             //do something to this
//             console.log('Happy face');
//             console.log(pets);
//         })
// })

//`setPet` and `addPet`
// DB.pet.findByPk(1)
// .then(pet => {
//     DB.user.findByPk(5)
//     .then(user => {
//         //associate them
//         user.addPet(pet)
//         console.log('Adopt a pet to reduce crankiness')
//     })
// })

//Eager Loading 
DB.user.findAll({
    include: [DB.pet]
}).then(users => {
    //each user object (each item in the users array)
    //has a .pets key with an array of pet objects
    users.forEach(user => {
        console.log(`${user.firstName}'s pets:`)
        if (user.pets.length < 1) {
            console.log(`----${user.firstName} has no pets`)
        }
        user.pets.forEach(pet => {
            console.log(`---${pet.name}`)
        })
    })
})