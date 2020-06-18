const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//Load Input Validation
const validateRegistrationInput = require("../validation/registration");
const validateLoginInput = require("../validation/login");

//Loading user model
const User = require("../models/User");
const secretOrKey = require("dotenv").config();

//Registration Routes
router.post("/", (req, res)=> {
    //Registration Form Validation
    const { errors, isValid } = validateRegistrationInput(req.body);
    
    //Checking Validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email Already Exists" });
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
    
            //Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser 
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        }
    })
});

//Login Routes
router.post("/login", (req, res) => {
    //form validation
    const { errors, isValid } = validateLoginInput(req.body);

    //checking validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    
    const email = req.body.email;
    const password = req.body.password;
    //find user by email
    User.findOne({ email }).then(user => {
        //check if user exists
        if(!user) {
            return res.status(404).json({ emailnotfound: "Email Not Found" });
        }
    
        //check password 
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                //User Match
                //Create JWT Payload
                const payload = {
                    id: user.id,
                    name: user.name
                };
                //Sign Token
                jwt.sign(
                    payload,
                    secretOrKey,
                    {
                        expiresIn: 31556926 //1year in secs
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer" + token 
                        });
                    }
                );
            } else {
                return res.status(400).json({ passwordincorrect: "Password is Incorrect"});
            }
        });
    });
});

module.exports = router;