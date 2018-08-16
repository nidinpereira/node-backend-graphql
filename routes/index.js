const express = require('express');
const router = express.Router();
const coutriesController = require('../controllers/countries/countries-controller');
const notFoundController = require('../controllers/base/not-found-controller');

router.get('/countries', coutriesController.all);
router.post('/countries', coutriesController.create);
router.get('/countries/:id', coutriesController.get);
router.put('/countries/:id', coutriesController.update);
router.delete('/countries/:id', coutriesController.destroy);

router.get('*', notFoundController.show);

module.exports = router;