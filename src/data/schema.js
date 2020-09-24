"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var apollo_server_1 = require("apollo-server");
var typeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Game {\n        id: ID!\n        name: String!\n        description: String!\n        supportedOS: [String]\n        versions: [String]\n        links: [String]\n    }\n\n    type Query {\n        games: [Game]!\n    }\n"], ["\n    type Game {\n        id: ID!\n        name: String!\n        description: String!\n        supportedOS: [String]\n        versions: [String]\n        links: [String]\n    }\n\n    type Query {\n        games: [Game]!\n    }\n"])));
exports["default"] = typeDefs;
var templateObject_1;
