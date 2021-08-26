import Validator from 'validator'
import isEmpty = require("is-empty");

export type ErrorInfo =  {
    email? : string
    password?: string
    password2?: string
    name?: string
}
type User = {
    errors: ErrorInfo
    email: string
    password: string
}
export default function validateLoginInput(data : User)  {
    let errors : ErrorInfo = {};

    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}