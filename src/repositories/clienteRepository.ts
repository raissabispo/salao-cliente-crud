import { AppDataSource } from "../db/data-source";
import { Cliente } from "../models/clienteModel";

class ClienteRepository {
    clienteRepository = AppDataSource.getRepository(Cliente);

    // Método para salvar um cliente
    async save(cliente: Cliente): Promise<Cliente> {
        try {
            return await this.clienteRepository.save(cliente);
        } catch (err) {
            console.error("Erro ao criar cliente:", err);
            throw new Error("Falha ao criar o cliente!");
        }
    }

    // Método para recuperar todos os clientes
    async retrieveAll(): Promise<Cliente[]> {
        try {
            return await this.clienteRepository.find();
        } catch (error) {
            throw new Error("Falha ao retornar os clientes!");
        }
    }

    // Método para recuperar um cliente pelo CPF
    async retrieveByCpf(cpf: string): Promise<Cliente | null> {
        try {
            return await this.clienteRepository.findOneBy({
                cpf: cpf,
            });
        } catch (error) {
            throw new Error("Falha ao buscar o cliente!");
        }
    }

    // Método para recuperar um cliente pelo nome
    async retrieveByNome(n: string): Promise<Cliente | null> {
        try {
            return this.clienteRepository.findOneBy({
                nome: n,
            });
        } catch (error) {
            throw new Error("Falha ao buscar o cliente!");
        }
    }
    async retrieveByEmail(e: string): Promise<Cliente | null> {
        try {
            return this.clienteRepository.findOneBy({
                email: e,
            });
        } catch (error) {
            throw new Error("Falha ao buscar o cliente!");
        }
    }


    // Método para atualizar os dados de um cliente
    async update(cliente: Cliente): Promise<void> {
        try {
            await this.clienteRepository.save(cliente);
        } catch (error) {
            throw new Error("Falha ao atualizar o cliente!");
        }
    }

    // Método para deletar um cliente pelo CPF
    async delete(cpf: string): Promise<number> {
        try {
            const clienteEncontrado = await this.clienteRepository.findOneBy({
                cpf: cpf,
            });

            if (clienteEncontrado) {
                // Deletando o cliente encontrado pelo CPF
                await this.clienteRepository.delete({ cpf: cpf });
                return 1; // Retorna 1 quando o cliente for deletado
            }

            return 0; // Se não encontrar o cliente, retorna 0
        } catch (error) {
            throw new Error("Falha ao deletar o cliente!");
        }
    }

    // Método para deletar todos os clientes
    async deleteAll(): Promise<number> {
        try {
            const result = await this.clienteRepository.query("SELECT COUNT(cpf) FROM clientes;");
            await this.clienteRepository.query("DELETE FROM clientes;");
            return result[0]['COUNT(cpf)'];
        } catch (error) {
            throw new Error("Falha ao deletar todos os clientes!");
        }
    }
}

export default new ClienteRepository();
