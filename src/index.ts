import { AppDataSource } from "./lib/typeorm"
// import { User } from "./entities/user"
// import { validate } from "class-validator"

// AppDataSource.initialize().then(async () => {

//     console.log("Loading users from the database...")
//     const users = await AppDataSource.manager.find(User)

//     if (users.length <= 0) {
//         console.log("Inserting a new user into the database...")
//         const user = new User()
//         user.firstName = "FirstName2"
//         user.lastName = "Test2"
//         user.email = "test2@test.com"
//         user.age = 22
//         // await AppDataSource.manager.save(user)

//         const user2 = new User()
//         user2.firstName = "FirstName2"
//         user2.lastName = "Test2"
//         user2.email = "test2@test.com"
//         user2.age = 22
//         // const res = await AppDataSource.manager.save(user2)

//         console.log("test")
//         console.log(await validate(user2))
//         console.log("fin test")
//         console.log("Saved a new user with id: " + user.id)
//     }

//     console.log("Loaded users: ", users)

// }).catch(error => console.log(error))


// EXERCICE 2 
import fastify from 'fastify'
import { FASTIFY_ADDR, FASTIFY_PORT } from './lib/dotenv'

async function run() {
    await AppDataSource.initialize()
    await server.listen({ port: FASTIFY_PORT, host: FASTIFY_ADDR })
}

run().catch(console.error)

// EXERCICE 3

const server = fastify()

server.get('/ping', async (request, reply) => {
  return 'pong\n'
})

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})