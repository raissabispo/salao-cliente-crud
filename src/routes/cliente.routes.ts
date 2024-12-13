import { Router } from "express";
import clienteController from "../controllers/clientes.controller";  // Importação correta da instância

const router = Router();

router.post("/cliente", clienteController.create);  // Criar cliente (certo)
router.get("/clientes", clienteController.findAll);  // Listar todos os clientes (certo)
router.get("/cliente/:cpf", clienteController.findOne); // Buscar cliente pelo cpf (certo)
router.get("/cliente/nome/:nome", clienteController.findName);// Buscar cliente pelo nome (certo )
router.get("/cliente/email/:email", clienteController.findEmail); // Buscar cliente pelo email(certo)
router.put("/cliente/:cpf", clienteController.update); // atualizar cliente pelo cpf (certo)
router.delete("/cliente/:cpf", clienteController.delete);  // Deletar cliente pelo CPF(certo)
router.delete("/clientes", clienteController.deleteAll);  // Deletar todos os clientes(certo)

export default router; 
