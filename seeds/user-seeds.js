const { User } = require('../models');

const userdata = [
    {
        "username": "Seekoalizer",
        "email": "seekoalizer@mail.com",
        "password": "pass1234",
    },
    {
        "username": "Expresso",
        "email": "expresso@mail.com",
        "password": "pass1234",
    },
    {
        "username": "Nodeo",
        "email": "nodeo@mail.com",
        "password": "pass1234",
    },
    {
        "username": "Reacto",
        "email": "reacto@mail.com",
        "password": "pass1234",
    },
    {
        "username": "Angulo",
        "email": "angulo@mail.com",
        "password": "pass1234",
    }
]

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;