const express = require("express")
const { ApolloServer } = require('apollo-server-express');
// const { GraphQLScalarType, Kind } = require('graphql');
const fs = require('fs');
// const Issue = require('./models/issues')
require('dotenv').config();
const dateScalar = require('./graphql_type')
const userqueries = require('./userqueries')
//const Counter = require('./models/counters');
//require('./models/db')

var port = process.env.PORT || '4000';
const app = express();

const resolvers = {
    Date: dateScalar,
    Query: {
        employeeList: userqueries.UserList
    },
    Mutation: {
        employeeAdd: userqueries.createUser,
        updateUserBasedOnID: userqueries.updateUser,
        singleUser: userqueries.SingleUser,
        deleteUserBasedOnId: userqueries.deleteUser
    }
};

const server = new ApolloServer({
    typeDefs : fs.readFileSync('schema_graphql', 'utf8'),
    resolvers,
    formatError: error => {
        console.log(error);
        return error;
     },
});

app.use(express.static('public'));

server.start().then(() => {
    server.applyMiddleware({
        app,
        path: '/graphql',
        cors: true,
    });
});

app.listen(port, function(){
    console.log("Server listening on Port # 4000");
})
