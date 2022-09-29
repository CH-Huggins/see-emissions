"use strict";
// Requisites
const joi = require("joi");
const {makeValidator} = require("./makeValidator");

// Create a schema for the emissions
const emissionsSchema = joi.object({
    emission: joi.number()
        .required(),
    type: joi.string()
        .required(),
});

// Make a validator using the makeValidator function passing the schema
const emissionsValidator = makeValidator(emissionsSchema, 'query');

module.exports = {
    emissionsValidator
}