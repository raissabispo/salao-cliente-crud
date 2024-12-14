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
const clienteRepository_1 = __importDefault(require("../repositories/clienteRepository"));
class ClienteController {
    // Criar um novo cliente
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body.nome) {
                res.status(400).send({
                    message: "O nome do cliente não pode ser vazio!"
                });
                return;
            }
            try {
                const cliente = req.body;
                const savedCliente = yield clienteRepository_1.default.save(cliente);
                res.status(201).send(savedCliente);
            }
            catch (err) {
                res.status(500).send({
                    message: "Erro ao tentar cadastrar um cliente!"
                });
            }
        });
    }
    // Buscar todos os clientes
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clientes = yield clienteRepository_1.default.retrieveAll();
                res.status(200).send(clientes);
            }
            catch (err) {
                res.status(500).send({
                    message: "Erro encontrado durante a busca por todos os clientes."
                });
            }
        });
    }
    // Buscar um cliente específico pelo CPF
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cpf = req.params.cpf;
            try {
                const cliente = yield clienteRepository_1.default.retrieveByCpf(cpf);
                if (cliente) {
                    res.status(200).send(cliente);
                }
                else {
                    res.status(404).send({
                        message: `Não foi encontrado nenhum cliente com o CPF=${cpf}.`
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    message: `Erro: não foi possível retornar o cliente com o CPF=${cpf}.`
                });
            }
        });
    }
    findName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const nome = req.params.nome;
            try {
                const clientes = yield clienteRepository_1.default.retrieveByNome(nome);
                if (clientes)
                    res.status(200).send(clientes);
                else
                    res.status(404).send({
                        message: `Não foi encontrado nenhum gênero com esse nome=${nome}.`
                    });
            }
            catch (err) {
                res.status(500).send({
                    message: `Error não foi possível retornar o Gênero com nome=${nome}.`
                });
            }
        });
    }
    findEmail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = req.params.email;
            try {
                const clientes = yield clienteRepository_1.default.retrieveByEmail(email);
                if (clientes)
                    res.status(200).send(clientes);
                else
                    res.status(404).send({
                        message: `Não foi encontrado nenhum gênero com esse email=${email}.`
                    });
            }
            catch (err) {
                res.status(500).send({
                    message: `Error não foi possível retornar o Gênero com email=${email}.`
                });
            }
        });
    }
    // Atualizar informações de um cliente pelo CPF
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cliente = req.body;
            cliente.cpf = req.params.cpf;
            try {
                yield clienteRepository_1.default.update(cliente);
                res.send({
                    message: `Cliente ${cliente.nome} atualizado com sucesso!`
                });
            }
            catch (err) {
                res.status(500).send({
                    message: `Erro ao atualizar o cliente com CPF=${cliente.cpf}.`
                });
            }
        });
    }
    // Deletar um cliente pelo CPF
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cpf = req.params.cpf;
            try {
                const str = yield clienteRepository_1.default.delete(cpf);
                if (str == 1) {
                    res.send({
                        message: "Cliente deletado com sucesso!"
                    });
                }
                else {
                    res.send({
                        message: `Não foi possível deletar o cliente com CPF=${cpf}. O cliente não foi encontrado.`
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    message: `Erro ao tentar deletar o cliente com CPF=${cpf}.`
                });
            }
        });
    }
    // Deletar todos os clientes
    deleteAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const num = yield clienteRepository_1.default.deleteAll();
                res.send({ message: `${num} clientes foram deletados com sucesso!` });
            }
            catch (err) {
                res.status(500).send({
                    message: "Ocorreu um erro enquanto deletava todos os clientes."
                });
            }
        });
    }
}
exports.default = new ClienteController();
