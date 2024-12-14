"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientes_controller_1 = __importDefault(require("../controllers/clientes.controller")); // Importação correta da instância
const router = (0, express_1.Router)();
router.post("/cliente", clientes_controller_1.default.create); // Criar cliente (certo)
router.get("/clientes", clientes_controller_1.default.findAll); // Listar todos os clientes (certo)
router.get("/cliente/:cpf", clientes_controller_1.default.findOne); // Buscar cliente pelo cpf (certo)
router.get("/cliente/nome/:nome", clientes_controller_1.default.findName); // Buscar cliente pelo nome (certo )
router.get("/cliente/email/:email", clientes_controller_1.default.findEmail); // Buscar cliente pelo email(certo)
router.put("/cliente/:cpf", clientes_controller_1.default.update); // atualizar cliente pelo cpf (certo)
router.delete("/cliente/:cpf", clientes_controller_1.default.delete); // Deletar cliente pelo CPF(certo)
router.delete("/clientes", clientes_controller_1.default.deleteAll); // Deletar todos os clientes(certo)
exports.default = router;
