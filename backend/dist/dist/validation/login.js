"use strict";
var Validator = require('validator');
var isEmpty = require('is-empty');
module.exports = function validateLoginInput(data) {
    var errors = {};
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    }
    else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    return {
        errors: errors,
        isValid: isEmpty(errors)
    };
};
//# sourceMappingURL=login.js.map