"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Game_1 = require("./entities/Game");
const path_1 = __importDefault(require("path"));
const config = {
    migrations: {
        path: path_1.default.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [Game_1.Game],
    dbName: 'gdcgames',
    type: 'postgresql',
    debug: process.env.NODE_ENV !== 'production',
};
exports.default = config;
//# sourceMappingURL=mikro-orm.config.js.map