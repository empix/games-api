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

#### Games

`GET /games?page=1&limit=10` - Lista os jogos<br>
`DELETE /games/:id` - Deleta um jogos<br>
`POST /games` - Adiciona um jogo<br>
**Exemplo de corpo json:**

```json
{
  "name": "Undertale",
  "release_date": "2015-09-15",
  "description": "UNDERTALE! The RPG game where you don't have to destroy anyone.",
  "engine_id": 1,
  "genres_ids": [1, 2],
  "developers_ids": [1, 2],
  "publishers_ids": [1, 2]
}
```

<br>

#### Engines

`GET /engines?page=1&limit=10` - Lista as engines<br>
`DELETE /engines/:id` - Deleta uma engine<br>
`POST /engines` - Adiciona uma engine<br>
**Exemplo de corpo json:**

```json
{
  "name": "GameMaker Studio"
}
```

<br>

#### Genres

`GET /genres?page=1&limit=10` - Lista os generos<br>
`DELETE /genres/:id` - Deleta um genero<br>
`POST /genres` - Adiciona um genero<br>
**Exemplo de corpo json:**

```json
{
  "name": "Indie"
}
```

<br>

#### Developers

`GET /developers?page=1&limit=10` - Lista os developers<br>
`DELETE /developers/:id` - Deleta um developer<br>
`POST /developers` - Adiciona um developer<br>
**Exemplo de corpo json:**

```json
{
  "name": "tobyfox"
}
```

<br>

#### Publishers

`GET /publishers?page=1&limit=10` - Lista os publishers<br>
`DELETE /publishers/:id` - Deleta um publisher<br>
`POST /publishers` - Adiciona um publisher<br>
**Exemplo de corpo json:**

```json
{
  "name": "tobyfox"
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
