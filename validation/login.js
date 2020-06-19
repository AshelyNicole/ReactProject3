const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
    let errors = {};

    //converting empty fields into strings
    data.email = !isEmpty(data.email) ? data.email: "";
    data.password = !isEmpty(data.password) ?  data.password: "";

    //Email Checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email Field is Required"
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    //Password Check
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};