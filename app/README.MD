# Sample app documentation

## How to use

### env variables
this application runs with 3 env variables: 
* isSql - this is the variable you'll use to define the database that the service will use. if the value is `true`, then it will use postgres. if it's other value, then it will use mongo by default.

* PG_CONNECTION_STRING - Postgrest connection string. Take in mind that using postgres won't crash the service, it will run until you test the endpoint and then knex will scream at you.

* MONGO_CONNECTION_STRING - Mongo connectin string. Take in mind that using mongo will crash the service at boot if the connection fails. The user will also need `access to the admin database`

### testing the service
you can test the service by hitting `/health`. Ex:
```
$ curl localhost:3000/health
"Hello World! the app is connected to the running mongo database!"
```