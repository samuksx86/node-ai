# Api Node Boilerplate

## 🚀 Como iniciar o projeto

Este projeto é um boilerplate para APIs desenvolvidas com Node.js, utilizando boas práticas de organização, testes e Docker.

### 💻 Rodando a aplicação

Certifique-se de que você tenha o Docker e o Docker Compose instalados em sua máquina.

1. Copie o arquivo `.env.example` e renomeie para `.env`:

```bash
cp .env.example .env
```

2. Suba os containers com o Docker Compose:

```bash
docker-compose up --build
```

3. Instale as dependências:

```bash
npm install
```

4. Copie o arquivo `.env.example` para `.env` e configure as variáveis necessárias.

5. Gere as migrations do projeto para organizar o banco local:

```bash
npm run migration:generate
```

6. Execute as migrations:

```bash
npm run migration:run
```

5. Execute o projeto em modo de desenvolvimento:

```bash
npm run start:dev
```

A aplicação estará disponível em `http://localhost:3333`.

### 🧪 Rodando os testes

```bash
npm run test
```

### 📂 Estrutura do Projeto

- `src/` - Código-fonte da aplicação
- `tests/` - Testes automatizados
- `.env.example` - Exemplo de variáveis de ambiente
- `docker-compose.yml` - Orquestração de serviços com Docker

### 🛠 Tecnologias Utilizadas

- Node.js
- TypeScript
- Docker + Docker Compose
- ESLint + Prettier
- Jest

### 📌 Roadmap e Melhorias Futuras

Abaixo estão alguns pontos que planejamos implementar ou melhorar no projeto:

- [ ] CI/CD com GitHub Actions ou GitLab CI para automatização de testes e deploy
- [ ] Integração com Sentry para rastreamento de erros em produção

### 🙋‍♂️ Contribuindo

Pull requests são bem-vindos! Para grandes mudanças, por favor abra uma issue primeiro para discutirmos o que você gostaria de mudar.
