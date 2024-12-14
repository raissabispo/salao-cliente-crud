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
const data_source_1 = require("../db/data-source");
const clienteModel_1 = require("../models/clienteModel");
class ClienteRepository {
    constructor() {
        this.clienteRepository = data_source_1.AppDataSource.getRepository(clienteModel_1.Cliente);
    }
    // Método para salvar um cliente
    save(cliente) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.clienteRepository.save(cliente);
            }
            catch (err) {
                console.error("Erro ao criar cliente:", err);
                throw new Error("Falha ao criar o cliente!");
            }
        });
    }
    // Método para recuperar todos os clientes
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
    // Método para recuperar um cliente pelo CPF
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
    // Método para recuperar um cliente pelo nome
    retrieveByNome(n) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.clienteRepository.findOneBy({
                    nome: n,
                });
            }
            catch (error) {
                throw new Error("Falha ao buscar o cliente!");
            }
        });
    }
    retrieveByEmail(e) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.clienteRepository.findOneBy({
                    email: e,
                });
            }
            catch (error) {
                throw new Error("Falha ao buscar o cliente!");
            }
        });
    }
    // Método para atualizar os dados de um cliente
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
    // Método para deletar um cliente pelo CPF
    delete(cpf) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clienteEncontrado = yield this.clienteRepository.findOneBy({
                    cpf: cpf,
                });
                if (clienteEncontrado) {
                    // Deletando o cliente encontrado pelo CPF
                    yield this.clienteRepository.delete({ cpf: cpf });
                    return 1; // Retorna 1 quando o cliente for deletado
                }
                return 0; // Se não encontrar o cliente, retorna 0
            }
            catch (error) {
                throw new Error("Falha ao deletar o cliente!");
            }
        });
    }
    // Método para deletar todos os clientes
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
