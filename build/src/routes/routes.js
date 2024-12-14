"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cliente_routes_1 = __importDefault(require("./cliente.routes"));
// Concentrador de rotas
class Routes {
    constructor(app) {
        app.use("/salao", cliente_routes_1.default);
    }
}
exports.default = Routes;
