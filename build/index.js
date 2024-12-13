"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("./db/data-source");
const clienteModel_1 = require("./models/clienteModel");
const clienteRepository_1 = __importDefault(require("./repository/clienteRepository"));
data_source_1.AppDataSource.initialize()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Database is running.");
    // Criar um novo cliente
    const novoCliente = new clienteModel_1.clientes("123.456.789-00", "Raissa Silva", "Raissa", "raissa@email.com");
    yield clienteRepository_1.default.save(novoCliente);
    console.log("Novo Cliente criado:", novoCliente);
}))
    .catch((error) => console.log("Error while initializing the database", error));
