# Estacionamento ACME API

## Descrição
API para gerenciamento de veículos e estadias de um estacionamento, desenvolvida para o cliente **Estacionamento ACME**. A API permite registrar, atualizar e excluir veículos, bem como registrar, atualizar e excluir estadias de veículos no estacionamento.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de execução JavaScript no servidor.
- **Express**: Framework minimalista para Node.js, utilizado para construção da API.
- **Prisma ORM**: Ferramenta para interagir com o banco de dados de forma simples e eficiente.
- **SQLite** (ou PostgreSQL): Banco de dados utilizado para armazenar as informações de veículos e estadias.
- **Insomnia**: Utilizado para testar as rotas da API.
- **JavaScript**: Linguagem utilizada para implementação do back-end.

## Funcionalidades

1. **CRUD de Veículos**
   - Cadastro de veículos com campos como placa, modelo, cor e ano.
   - Atualização e exclusão de veículos.
   - Consulta de veículos específicos, incluindo suas estadias.

2. **CRUD de Estadias**
   - Registro de entrada de veículos no estacionamento com cálculo automático da hora de entrada.
   - Atualização de estadias, incluindo a saída do veículo e o cálculo do valor total da estadia.
   - Exibição das estadias associadas a cada veículo.

## Passo a Passo para Execução

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo/api
```
### 2. Instale as Dependências

```
npm install
```

### 3. Configure o Banco de Dados

```
DATABASE_URL="file:./dev.db"
```

### 4. Rode as Migrações

```
npx prisma migrate dev --name init
```

### 5. Inicie a API

```
npm run dev
```
