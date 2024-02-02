const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

router.get('/get-cricket/:name', adminController.getCricket);
router.post('/insert-cricket', adminController.insertCricket);
router.put('/update-cricket/:id',adminController.updateCricket);


module.exports = router;