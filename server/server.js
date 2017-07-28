import express from 'express'
import schema from './schema'
import mongoose from 'mongoose'
import mongoGraphqlSchema from'./mongo_graphql_schema'
import { graphql } from 'graphql'

import bodyParser from 'body-parser'

let app = express()

const URL = 'http://localhost'
const MONGO_URL = 'mongodb://localhost:27017/blog'
const PORT = 2000

// parse POST body as text

app.use(bodyParser.text({ type: 'application/graphql' }));

if (process.env.NODE_ENV === 'local') {
    app.post('/graphql', (req, res) => {
        // execute GraphQL!
        console.log(req.body)
        graphql(schema, req.body)

            .then((result) => {

                res.send(JSON.stringify(result, null, 2));

            });
    })
}
if (process.env.NODE_ENV === 'db') {
    mongoose.Promise = global.Promise;
    mongoose.connect(MONGO_URL, {
        useMongoClient: true,
        /* other options */
    })
    app.post('/graphql', (req, res) => {
        // execute GraphQL!
        console.log(req.body)
        graphql(mongoGraphqlSchema, req.body)

            .then((result) => {

                res.send(JSON.stringify(result, null, 2));

            });
    })
}

const server = app.listen(PORT, function () {

    let host = server.address().address;

    let port = server.address().port;



    console.log('GraphQL listening at http://%s:%s', host, port);

});

