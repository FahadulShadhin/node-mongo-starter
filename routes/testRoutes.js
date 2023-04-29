const express = require('express');
const router = express.Router();
const {
	getTests,
	createTest,
	getTest,
	deleteTest,
	updateTest,
} = require('../controllers/testControllers');
const getTestById = require('../middlewares/testMiddleware');

// get all
router.get('/', getTests);

// get one
router.get('/:id', getTestById, getTest);

// create one
router.post('/', createTest);

// update one
router.patch('/:id', getTestById, updateTest);

// delete one
router.delete('/:id', getTestById, deleteTest);

module.exports = router;
