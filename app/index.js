// This is just a quick example and it doesn't reflect our code standards.

const fastify = require('fastify')({ logger: true })
const { MongoClient } = require("mongodb");

//   "mongodb://app_user:password@localhost:27017";

const isSql = (process.env.IS_SQL === "true");
let knex;
let mongoClient;

isSql ?
    knex = require('knex')({
        client: 'pg',
        connection: process.env.PG_CONNECTION_STRING,
    }) // avoiding error handling, this won't crash the pod even if you're not connected :)
    : mongoClient = new MongoClient(process.env.MONGO_CONNECTION_STRING);


// Declare a route
fastify.get('/health', async (request, reply) => {
    isSql ? await knex.raw("SELECT VERSION()") : await mongoClient.db("admin").command({ ping: 1 });
    return `Hello World! the app is connected to the running ${isSql ? "postgres" : "mongo"} database!`
    
  })

// Run the server!
const start = async () => {
  try {
    if (!isSql) { await mongoClient.connect()}
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()