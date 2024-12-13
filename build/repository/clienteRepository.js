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
Object.defineProperty(exports, "__esModule", { value: true });
// src/repository/ClienteRepository.ts
const data_source_1 = require("../db/data-source");
const clienteModel_1 = require("../models/clienteModel");
class ClienteRepository {
    constructor() {
        this.clienteRepository = data_source_1.AppDataSource.getRepository(clienteModel_1.clientes);
    }
    // Salvar cliente
    save(cliente) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.clienteRepository.save(cliente);
            }
            catch (err) {
                throw new Error("Falha ao criar o cliente!");
            }
        });
    }
    // Retornar todos os clientes
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.clienteRepository.find();
            }
            catch (error) {
                throw new Error("Falha ao retornar os clientes!");
            }
        });
    }
    // Buscar cliente por CPF
    retrieveByCpf(cpf) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.clienteRepository.findOneBy({
                    cpf: cpf,
                });
            }
            catch (error) {
                throw new Error("Falha ao buscar o cliente!");
            }
        });
    }
    // Atualizar cliente
    update(cliente) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.clienteRepository.save(cliente);
            }
            catch (error) {
                throw new Error("Falha ao atualizar o cliente!");
            }
        });
    }
    // Deletar cliente
    delete(cpf) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clienteEncontrado = yield this.clienteRepository.findOneBy({
                    cpf: cpf,
                });
                if (clienteEncontrado) {
                    yield this.clienteRepository.remove(clienteEncontrado);
                    return 1;
                }
                return 0;
            }
            catch (error) {
                throw new Error("Falha ao deletar o cliente!");
            }
        });
    }
    // Deletar todos os clientes
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.clienteRepository.query("SELECT COUNT(cpf) FROM clientes;");
                yield this.clienteRepository.query("DELETE FROM clientes;");
                return result[0]['COUNT(cpf)'];
            }
            catch (error) {
                throw new Error("Falha ao deletar todos os clientes!");
            }
        });
    }
}
exports.default = new ClienteRepository();
