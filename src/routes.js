const express = require('express');
const router = express.Router();

const EngineController = require('./controllers/EngineController');
const GameController = require('./controllers/GameController');

router.get('/engine', EngineController.index);
router.post('/engine', EngineController.store);

router.get('/game', GameController.index);
router.post('/game', GameController.store);

module.exports = router;
