const express = require('express');
const router = express.Router();

const EngineController = require('./controllers/EngineController');
const GameController = require('./controllers/GameController');
const GenreController = require('./controllers/GenreController');
const DeveloperController = require('./controllers/DeveloperController');
const PublisherController = require('./controllers/PublisherController');

router.get('/engine', EngineController.index);
router.post('/engine', EngineController.store);

router.get('/games/:id', GameController.findByPk);
router.get('/games', GameController.index);
router.post('/game', GameController.store);
router.delete('/game', GameController.delete);

router.get('/genre', GenreController.index);
router.post('/genre', GenreController.store);

router.get('/developer', DeveloperController.index);
router.post('/developer', DeveloperController.store);

router.get('/publisher', PublisherController.index);
router.post('/publisher', PublisherController.store);

module.exports = router;
