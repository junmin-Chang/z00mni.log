"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var keys_1 = require("../../config/keys");
var bcrypt_1 = __importDefault(require("bcrypt"));
var register_1 = __importDefault(require("../../validation/register"));
var login_1 = __importDefault(require("../../validation/login"));
var User_1 = require("../../model/User");
var router = express_1.default.Router();
router.post('/register', function (req, res) {
    var _a = register_1.default(req.body), errors = _a.errors, isValid = _a.isValid;
    if (!isValid) {
        return res.status(400).json(errors);
    }
    User_1.User.findOne({ email: req.body.email }).then(function (user) {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        }
        else {
            var newUser_1 = new User_1.User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
            bcrypt_1.default.genSalt(10, function (err, salt) {
                bcrypt_1.default.hash(newUser_1.password, salt, function (err, hash) {
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
    var _a = login_1.default(req.body), errors = _a.errors, isValid = _a.isValid;
    if (!isValid) {
        return res.status(400).json(errors);
    }
    var email = req.body.email;
    var password = req.body.password;
    User_1.User.findOne({ email: email }).then(function (user) {
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
        }
        bcrypt_1.default.compare(password, user.password).then(function (isMatch) {
            if (isMatch) {
                var payload = {
                    id: user.id,
                    name: user.name
                };
                jsonwebtoken_1.default.sign(payload, keys_1.keys.secretOrKey, {
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