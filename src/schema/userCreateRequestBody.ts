import { FromSchema } from 'json-schema-to-ts'

const userCreateRequestBody  = {
  "$schema": "test",
  "title": "CreateUserRequestBody",
  "type": "object",
  "properties": {
    "firstName": {
        "type": "string"
      },
      "lastName": {
        "type": "string"
      },
      "email": {
        "type": "string"
      },
      "password": {
        "type": "string"
      },
      "passwordConfirmation": {
        "type": "string"
      }
  },
  "#required": [
      "email",
      "password",
      "passwordConfirmation"
  ]
} as const;

export type UserCreateRequestBody = FromSchema<typeof userCreateRequestBody>