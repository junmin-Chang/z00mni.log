"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = exports.Validator = void 0;
exports.Validator = require('validator');
exports.isEmpty = require('is-empty');
module.exports = function validateLoginInput(data) {
    var errors = {};
    data.email = !exports.isEmpty(data.email) ? data.email : "";
    data.password = !exports.isEmpty(data.password) ? data.password : "";
    if (exports.Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    }
    else if (!exports.Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
    if (exports.Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    return {
        errors: errors,
        isValid: exports.isEmpty(errors)
    };
};
//# sourceMappingURL=login.js.map