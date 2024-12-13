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
exports.getAllClients = getAllClients;
exports.createClientForm = createClientForm;
exports.createClient = createClient;
const clienteModel_1 = require("../models/clienteModel");

function getAllClients(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const clients = yield clienteModel_1.clientModel.getAll();
            res.render('listClients', { clients }); 
        }
        catch (error) {
            console.error('Erro ao buscar clientes:', error);
            res.status(500).json({ message: 'Erro ao buscar clientes' });
        }
    });
}

function createClientForm(req, res) {
    res.render('createClient'); 
}

function createClient(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { cpf, nome, nomeSocial, email } = req.body;
            yield clienteModel_1.clientModel.create({ cpf, nome, nomeSocial, email });
            res.redirect('/clientes'); 
        }
        catch (error) {
            console.error('Erro ao criar cliente:', error);

            res.status(500).json({ message: 'Erro ao criar cliente' });
        }
    });
}
