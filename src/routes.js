const express = require('express');
const router = express.Router();

const EngineController = require('./controllers/EngineController');
const GameController = require('./controllers/GameController');
const GenreController = require('./controllers/GenreController');
const DeveloperController = require('./controllers/DeveloperController');
const PublisherController = require('./controllers/PublisherController');

router.get('/engines', EngineController.index);
router.post('/engines', EngineController.store);
router.delete('/engines/:id', EngineController.delete);

router.get('/games/:id', GameController.findByPk);
router.get('/games', GameController.index);
router.post('/games', GameController.store);
router.delete('/games/:id', GameController.delete);

router.get('/genres', GenreController.index);
router.post('/genres', GenreController.store);
router.delete('/genres/:id', GenreController.delete);

router.get('/developers', DeveloperController.index);
router.post('/developers', DeveloperController.store);
router.delete('/developers/:id', DeveloperController.delete);

router.get('/publishers', PublisherController.index);
router.post('/publishers', PublisherController.store);
router.delete('/publishers/:id', PublisherController.delete);

module.exports = router;
