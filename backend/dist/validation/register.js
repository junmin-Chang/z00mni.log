"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = __importDefault(require("validator"));
var isEmpty = require("is-empty");
function validateRegisterInput(data) {
    var errors = {};
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";
    if (validator_1.default.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }
    if (validator_1.default.isEmpty(data.email)) {
        errors.email = "Email field is required";
    }
    else if (!validator_1.default.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
    if (validator_1.default.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    if (validator_1.default.isEmpty(data.password2)) {
        errors.password2 = "Confirm password field is required";
    }
    if (!validator_1.default.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be at least 6 characters";
    }
    if (!validator_1.default.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match";
    }
    return {
        errors: errors,
        isValid: isEmpty(errors)
    };
}
exports.default = validateRegisterInput;
;
//# sourceMappingURL=register.js.map