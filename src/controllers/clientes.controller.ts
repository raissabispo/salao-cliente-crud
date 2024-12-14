import { Request, Response } from "express";
import clienteRepository from "../repositories/clienteRepository";

class ClienteController {
  // Criar um novo cliente
  async create(req: Request, res: Response): Promise<void> {
    if (!req.body.nome) {
      res.status(400).send({
        message: "O nome do cliente não pode ser vazio!"
      });
      return;
    }

    try {
      const cliente = req.body;
      const savedCliente = await clienteRepository.save(cliente);
      res.status(201).send(savedCliente);
    } catch (err) {
      res.status(500).send({
        message: "Erro ao tentar cadastrar um cliente!"
      });
    }
  }

  // Buscar todos os clientes
  async findAll(req: Request, res: Response): Promise<void> {
    try {
      const clientes = await clienteRepository.retrieveAll();
      res.status(200).send(clientes);
    } catch (err) {
      res.status(500).send({
        message: "Erro encontrado durante a busca por todos os clientes."
      });
    }
  }

  // Buscar um cliente específico pelo CPF
  async findOne(req: Request, res: Response): Promise<void> {
    const cpf: string = req.params.cpf;

    try {
      const cliente = await clienteRepository.retrieveByCpf(cpf);
      if (cliente) {
        res.status(200).send(cliente);
      } else {
        res.status(404).send({
          message: `Não foi encontrado nenhum cliente com o CPF=${cpf}.`
        });
      }
    } catch (err) {
      res.status(500).send({
        message: `Erro: não foi possível retornar o cliente com o CPF=${cpf}.`
      });
    }
  }
  
  async findName(req: Request, res: Response) {
    const nome: string = req.params.nome;

    try {
        const clientes = await clienteRepository.retrieveByNome(nome);
        if (clientes) res.status(200).send(clientes);
        else
            res.status(404).send({
                message: `Não foi encontrado nenhum gênero com esse nome=${nome}.`
            });
    } catch (err) {
        res.status(500).send({
            message: `Error não foi possível retornar o Gênero com nome=${nome}.`
        });
    }
}

async findEmail(req: Request, res: Response) {
    const email: string = req.params.email;

    try {
        const clientes = await clienteRepository.retrieveByEmail(email);
        if (clientes) res.status(200).send(clientes);
        else
            res.status(404).send({
                message: `Não foi encontrado nenhum gênero com esse email=${email}.`
            });
    } catch (err) {
        res.status(500).send({
            message: `Error não foi possível retornar o Gênero com email=${email}.`
        });
    }
}


  // Atualizar informações de um cliente pelo CPF
  async update(req: Request, res: Response): Promise<void> {
    const cliente = req.body;
    cliente.cpf = req.params.cpf;

    try {
      await clienteRepository.update(cliente);
      res.send({
        message: `Cliente ${cliente.nome} atualizado com sucesso!`
      });
    } catch (err) {
      res.status(500).send({
        message: `Erro ao atualizar o cliente com CPF=${cliente.cpf}.`
      });
    }
  }



  // Deletar um cliente pelo CPF
  async delete(req: Request, res: Response): Promise<void> {
    const cpf: string = req.params.cpf;

    try {
      const str = await clienteRepository.delete(cpf);

      if (str == 1) {
        res.send({
          message: "Cliente deletado com sucesso!"
        });
      } else {
        res.send({
          message: `Não foi possível deletar o cliente com CPF=${cpf}. O cliente não foi encontrado.`
        });
      }
    } catch (err) {
      res.status(500).send({
        message: `Erro ao tentar deletar o cliente com CPF=${cpf}.`
      });
    }
  }

  // Deletar todos os clientes
  async deleteAll(req: Request, res: Response): Promise<void> {
    try {
      const num = await clienteRepository.deleteAll();
      res.send({ message: `${num} clientes foram deletados com sucesso!` });
    } catch (err) {
      res.status(500).send({
        message: "Ocorreu um erro enquanto deletava todos os clientes."
      });
    }
  }

  
}

export default new ClienteController();