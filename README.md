
# Projeto Crud do Cliente do Salão Senac ✂️💇‍♀️

Este é um projeto desenvolvido para o projeto integrador do Senac e tem como objetivo realizar o cadastramento, exclusão, edição e consulta de clientes para um salão de beleza. 💅

## Tecnologias Utilizadas 🛠️

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para construção de APIs.
- **Banco de Dados**: MySQL.
- **TypeScript**: Para tipagem estática no código JavaScript.
- **Postman**: Ferramenta para testar APIs.

## Instalação ⚙️

1. Clone o repositório para o seu computador:
   ```bash
   git clone https://github.com/usuario/salao-cliente-crud.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd salao-cliente-crud
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

## Como Rodar 🚀

Para iniciar o projeto em modo de desenvolvimento:

```bash
npm run dev
```

Isso irá iniciar o servidor e o projeto estará disponível em `http://localhost:8081`. 🌐

## Testando a API com Postman 🧪

### Importando a Coleção do Postman

Para facilitar o uso da API, você pode importar uma coleção do Postman com todas as rotas já configuradas. Isso permite testar as funcionalidades do backend sem precisar configurar manualmente cada requisição.

Aqui estão alguns dos endpoints principais que você pode testar no Postman:

#### 1. **Cadastro de Cliente 📝**

- **Método**: `POST`
- **URL**: `http://localhost:8081/salao/cliente`
- **Corpo**:
  ```json
  {
    "nome": "João Silva",
    "email": "joao@exemplo.com",
    "telefone": "999999999"
  }
  ```

- **Resposta Esperada**:
  ```json
  {
    "message": "Cliente cadastrado com sucesso!"
  }
  ```

#### 2. **Listar Clientes 📋**

- **Método**: `GET`
- **URL**: `http://localhost:8081/salao/clientes`

- **Resposta Esperada**:
  ```json
  [
    {
      "id": 1,
      "nome": "João Silva",
      "email": "joao@exemplo.com",
      "telefone": "999999999"
    },
    {
      "id": 2,
      "nome": "Maria Oliveira",
      "email": "maria@exemplo.com",
      "telefone": "988888888"
    }
  ]
  ```

## Estrutura do Projeto 📁

O repositório está organizado da seguinte maneira:

```
/salao-cliente-crud
│
├── /src                 # Código fonte
│   ├── /controllers     # Lógica de negócios
│   ├── /models          # Modelos de dados (banco de dados)
│   ├── /routes          # Definições de rotas
│
├── .gitignore           # Arquivo para ignorar arquivos no Git (ex.: node_modules, .env)
├── package.json         # Gerenciador de dependências e scripts do projeto
├── package-lock.json    # Arquivo de lock das dependências
├── server.ts            # Arquivo de configuração e inicialização do servidor
└── tsconfig.json        # Arquivo de configuração do TypeScript
```

## Contribuindo 🤝

1. Fork o repositório.
2. Crie uma nova branch (`git checkout -b minha-nova-funcionalidade`).
3. Faça suas modificações e commit (`git commit -am 'Adiciona nova funcionalidade'`).
4. Envie para o repositório remoto (`git push origin minha-nova-funcionalidade`).
5. Crie um Pull Request.

