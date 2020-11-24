require('dotenv').config();
const port = process.env.PORT || 3333;

const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

require('./database/index');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

app.listen(port);
