"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// schema
var UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
var User = mongoose.model("users", UserSchema);
module.exports = User;
//# sourceMappingURL=User.js.map