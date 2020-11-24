require('dotenv').config();
const port = process.env.PORT || 3333;

const morgan = require('morgan');
const express = require('express');
const routes = require('./routes');

require('./database/index');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

app.listen(port);
