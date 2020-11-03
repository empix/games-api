<h1 align="center">Games API</h1>

---

### Objetivo <br>

Estudar e aprender mais sobre o ORM Sequelize e APIs.

---

### Tecnologias

- [Node.js](https://nodejs.org)
  - [Express](http://expressjs.com)
  - [Sequelize](https://sequelize.org/)
  - [Mysql2](https://www.npmjs.com/package/mysql2)
- [MySQL](https://www.mysql.com/)

---

### Endpoints

**GET** - `/engine` - Lista todas as engines do banco de dados <br>
**POST** - `/engine` - Adiciona uma engine no banco de dados <br>
**Exemplo de corpo json:**

```json
{
  "name": "GameMaker Studio"
}
```

<br>

**GET** - `/game` - Lista todos os jogos do banco de dados <br>
**POST** - `/game` - Adiciona um jogo no banco de dados <br>
**Exemplo de corpo json:**

```json
{
  "name": "Undertale",
  "release_date": "2015-09-15",
  "description": "UNDERTALE! The RPG game where you don't have to destroy anyone.",
  "engine_id": 1
}
```

---

### Rodando o projeto na sua máquina

1- Clone o repositório

```
git clone https://github.com/empixx/games-api.git
```

2- Entre na pasta do repositório

```
cd games-api
```

3- Instale as dependências

```
npm install
```

4- Crie e configure o .env de acordo com o [.env.example](https://github.com/empixx/games-api/blob/main/.env.example)

5- Crie o banco de dados e rode as migrations

```
npx sequelize db:create
npx sequelize db:migrate
```

6- Inicie

```
npm run dev
```
