const express = require('express')
const User = require('../models/User')

const router = express.Router();

/**
 * Post route for register a new user
 * 
 * @name POST /users/regiser
 * 
 * @param {string} email - email of the user
 * @param {string} password - password of the user
 * @param {name} name - name of the user
 */
router.post('/register', (req, res) =>{
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        occupation: req.body.occupation,
        password: req.body.password
    })

    newUser
        .save()
        .then(user=> {
            res.json(user)
        })
        .catch(err=> {
            res.json(err)
        })
});
router.get('/',(req,res)=>{
    User.find()
    .then(user =>res.json(user))
    .catch(err=> res.json(err))
});
module.exports = router;