"use strict";
var express = require("express");
var router = express.Router();
var bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
var keys = require('../../config/keys');
var validateRegisterInput = require('../../validation/register');
var validateLoginInput = require('../../validation/login');
var User = require("../../model/User");
router.post('/register', function (req, res) {
    var _a = validateRegisterInput(req.body), errors = _a.errors, isValid = _a.isValid;
    if (!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({ email: req.body.email }).then(function (user) {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        }
        else {
            var newUser_1 = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
            bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash(newUser_1.password, salt, function (err, hash) {
                    if (err)
                        throw err;
                    newUser_1.password = hash;
                    newUser_1
                        .save()
                        .then(function (user) { return res.json(user); })
                        .catch(function (err) { return console.log(err); });
                });
            });
        }
    });
});
router.post('/login', function (req, res) {
    var _a = validateLoginInput(req.body), errors = _a.errors, isValid = _a.isValid;
    if (!isValid) {
        return res.status(400).json(errors);
    }
    var email = req.body.email;
    var password = req.body.password;
    User.findOne({ email: email }).then(function (user) {
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
        }
        bcrypt.compare(password, user.password).then(function (isMatch) {
            if (isMatch) {
                var payload = {
                    id: user.id,
                    name: user.name
                };
                jwt.sign(payload, keys.secretOrKey, {
                    expiresIn: 31556926
                }, function (err, token) {
                    res.json({
                        success: true,
                        token: "Bearer " + token
                    });
                });
            }
            else {
                return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect" });
            }
        });
    });
});
module.exports = router;
//# sourceMappingURL=users.js.map