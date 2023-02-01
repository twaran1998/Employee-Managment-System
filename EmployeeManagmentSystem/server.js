const express = require("express")
const { ApolloServer, UserInputError } = require('apollo-server-express');
const { GraphQLScalarType, Kind } = require('graphql');

require('./models/db')

const app = express();
const Employee = require('./models/employee')

const dateScalar = new GraphQLScalarType({
    name: 'Date',
    description: 'Date Custom Scalar Type',
    serialize(value) {
        return value.toISOString()
    },
    parseValue(value) {
        return new Date(value);
    },
    parseLiteral(ast) {
        if(ast.kind == Kind.INT) {
            return new Date(parseInt(ast.value, 10));
        } else if(ast.kind == Kind.STRING){
            return new Date(ast.value);
        }
        return null;
    }
})

const typeDefs =`

enum TitleType {
    Employee
    Manager
    Director
    VP
}

enum DepartmentType {
    IT
    Marketing
    HR
    Engineering
}

enum EmployeeType {
    FullTime
    PartTime
    Contract
    Seasonal
}

input EmployeeInputs {
    FirstName: String
    LastName: String
    Age: Int
    DateOfJoining: Date
    Title: TitleType
    Department: DepartmentType
    EmployeeType: EmployeeType
    CurrentStatus: Boolean
}

scalar Date

type Employee {
    id: String!
    FirstName: String
    LastName: String
    Age: Int
    DateOfJoining: Date
    Title: TitleType
    Department: DepartmentType
    EmployeeType: EmployeeType
    CurrentStatus: Boolean
},
type Query {
    employeeList: [Employee!]!
}
type Mutation {
    employeeAdd(employee: EmployeeInputs!): Employee!
}`;

const resolvers = {
    Date: dateScalar,
    Query: {
        employeeList
    },
    Mutation: {
        employeeAdd
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    formatError: error => {
        console.log(error);
        return error;
     },
});

function employeeList() {
    const employees = Employee.find({}).then((employeeresult)=>{ return employeeresult })
    return employees
}

function validateEmployee(employee) {

    const errors = [];
    if ((employee.Age >= 20 && employee.Age <= 70) === false) {
        errors.push('Field "Age" must be between 20 and 70') // graphql validation for age must be between 20 and 70
    }

    if (errors.length > 0) {
        throw new UserInputError('Invalid input(s)', { errors });
    }
}

function employeeAdd(_, {employee}) {
    validateEmployee(employee);
    Employee.create(employee, (error) => { console.log(error); })
    return employee;
}

app.use(express.static('public'));

server.start().then(() => {
    server.applyMiddleware({
        app,
        path: '/graphql',
        cors: true,
    });
});

app.listen(3000, function(){
    console.log("Server listening on Port # 3000");
})
