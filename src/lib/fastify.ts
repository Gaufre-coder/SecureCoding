// import fastify from "fastify";
import { FromSchema } from "json-schema-to-ts";
import { User } from "../entities/User";
import { UserCreateRequestBody } from "../schema/userCreateRequestBody";

// Exercice 1-2

// export const server = fastify();

// server.get('/ping', async (request, reply) => {
//     return 'pong\n'
// })

// server.post<{ Body: UserCreateRequestBody , Reply: UserCreateRequestBody }>('/test', 
//     {
//         schema: {
//             body: User,
//             response: {200: User},
//         }
//     },
//       (request, reply) => {
//         // The `name` and `mail` types are automatically inferred
//         const { name, mail } = request.body;
//         reply.status(200).send({ name, mail });
//       }
// )


import fastify, { RouteOptions } from 'fastify'
// import { webApiRoutes } from '../routes/web-api/web-api-routes'
import { FASTIFY_LOGGING } from './dotenv'

// export const server = fastify({ logger: FASTIFY_LOGGING })
//     .addHook('onRoute', assertsResponseSchemaPresenceHook)
//     .register(webApiRoutes, { prefix: '/web-api' })

export function assertsResponseSchemaPresenceHook(routeOptions: RouteOptions) {
    if (!routeOptions.schema || !routeOptions.schema.response) {
      throw new Error("Missing response schema for route: " + routeOptions.url)
    }
  }