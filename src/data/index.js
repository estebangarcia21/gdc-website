"use strict";
exports.__esModule = true;
var apollo_server_1 = require("apollo-server");
var schema_1 = require("./schema");
var server = new apollo_server_1.ApolloServer({ typeDefs: schema_1["default"] });
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("Server ready @ " + url);
});
