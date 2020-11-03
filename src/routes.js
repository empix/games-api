const express = require('express');
const router = express.Router();

const EngineController = require('./controllers/EngineController');
const GameController = require('./controllers/GameController');
const GenreController = require('./controllers/GenreController');

router.get('/engine', EngineController.index);
router.post('/engine', EngineController.store);

router.get('/game', GameController.index);
router.post('/game', GameController.store);

router.get('/genre', GenreController.index);
router.post('/genre', GenreController.store);

module.exports = router;
