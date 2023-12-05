import {JSONSchemaBridge} from 'uniforms-bridge-json-schema';
import {schemaValidator} from '../shared/schemaValidator.js';
import {LongTextField} from '../shared/uniforms-tailwind/src';

/*
const ticketSchema = {
  title: "Ticket",
  type: "object",
  properties: {
    firstName: {type: "string"},
    lastName: {type: "string"},
    status: {type: "boolean"},
    createdAt: {
      type: "string",
      format: "date-time"
    },
  },
  required: ["firstName", "lastName"],
};
*/

const ticketSchema = {
  "type": "object",
  "properties": {
    "textField": {"type": "string", "minLength": 3},
    "longTextField": {
      "type": "string",
      "minLength": 10,
      "uniforms": {"component": LongTextField}
    },
    "numberField": {"type": "number", "minimum": 0},
    "dateField": {"type": "string", "format": "date-time"},
    "boolField": {"type": "boolean"},
    "listField": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "nestedTextField": {"type": "string"},
          "nestedNumberField": {"type": "number"}
        },
        "required": ["nestedTextField", "nestedNumberField"]
      }
    },
    "name": {
      "type": "string",
      "minLength": 1
    },
    "age": {
      "type": "integer",
      "minimum": 0
    },
    "birthdate": {
      "type": "string",
      "format": "date"
    },
    "gender": {
      "type": "string",
      "enum": ["male", "female", "other"]
    },
    "subscription": {
      "type": "boolean"
    },
    "comments": {
      "type": "string",
      "minLength": 5
    },
    "quantity": {
      "type": "integer",
      "minimum": 1
    },
    "rating": {
      "type": "integer",
      "minimum": 1,
      "maximum": 5
    }
  },
  "required": ["textField", "longTextField", "numberField", "dateField", "boolField", "listField"]
};

const ticketBridge = new JSONSchemaBridge({
  schema: ticketSchema,
  validator: schemaValidator(ticketSchema),
});

export {ticketSchema, ticketBridge};


