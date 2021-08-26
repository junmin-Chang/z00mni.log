"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = __importDefault(require("validator"));
var isEmpty = require("is-empty");
function validateLoginInput(data) {
    var errors = {};
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    if (validator_1.default.isEmpty(data.email)) {
        errors.email = "Email field is required";
    }
    else if (!validator_1.default.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
    if (validator_1.default.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    return {
        errors: errors,
        isValid: isEmpty(errors)
    };
}
exports.default = validateLoginInput;
//# sourceMappingURL=login.js.map