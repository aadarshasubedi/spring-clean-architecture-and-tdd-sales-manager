"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const graphql_server_express_1 = require("graphql-server-express");
const graphql_tools_1 = require("graphql-tools");
const PORT = 3000;
const app = express();
const schema = `
type Project {
  id: Int!
  kind: String!
  name: String!
  employees: [Employee]
}
type Employee {
  id: Int!
  name: String!
  ssn: String
  projects: [Project]
}
type Query {
  projects: [Project]
  project(id: Int!): Project
  employees: [Employee]
  employee(id: Int!): Employee
}
schema {
  query: Query
}
`;
class Project {
}
const allProjects = [
    { id: 200, name: 'Covfefe' },
    { id: 201, name: 'Bark' },
    { id: 202, name: 'Woof' },
    { id: 203, name: 'Meow' },
    { id: 204, name: 'Dumpster Fire' },
    { id: 205, name: 'Nova Scotia' }
];
const employeeProjects = [
    { emp: 100, proj: 200 },
    { emp: 100, proj: 201 },
    { emp: 102, proj: 202 },
    { emp: 102, proj: 203 },
];
class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    projects() {
        console.log('calculating projects for emp ', this.id);
        return Promise.resolve(employeeProjects
            .filter(ep => ep.emp === this.id)
            .map(ep => ep.proj)
            .map(projId => allProjects.find(proj => proj.id === projId)));
    }
}
const employees = [
    new Employee(100, 'Adam'),
    new Employee(101, 'Betty'),
    new Employee(102, 'Chris'),
    new Employee(103, 'David')
];
const resolvers = {
    Query: {
        employees(obj, params, context) {
            return Promise.resolve(employees);
        },
        employee(obj, { id }, context) {
            return Promise.resolve(employees.find(p => p.id === id));
        },
        projects() {
            return allProjects;
        },
        project(obj, { id }, context) {
            return Promise.resolve(allProjects.find(p => p.id === id));
        }
    }
};
const jsSchema = graphql_tools_1.makeExecutableSchema({
    typeDefs: schema,
    resolvers
});
app.use('/graphql', bodyParser.json(), graphql_server_express_1.graphqlExpress({
    schema: jsSchema
}));
app.use('/graphiql', graphql_server_express_1.graphiqlExpress({
    endpointURL: '/graphql',
}));
app.listen(PORT);
//# sourceMappingURL=main.js.map