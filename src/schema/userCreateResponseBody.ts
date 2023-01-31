import { FromSchema } from 'json-schema-to-ts'

const userCreateResponseBody = {
    "title": "CreateUserResponseBody",
    "type": "object",
    "properties": {
        "id": {
            "type": "number"
        },
        "firstName": {
            "type": "string"
        },
        "lastName": {
            "type": "string"
        },
        "email": {
            "type": "string"
        }
    },
  } as const;

  export type UserCreateResponseBody = FromSchema<typeof userCreateResponseBody>