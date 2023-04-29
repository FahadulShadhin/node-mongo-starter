const Test = require('../models/testModel');

// get all
const getTests = async (req, res) => {
	try {
		const allTests = await Test.find();
		res.json(allTests);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

// create one
const createTest = async (req, res) => {
	const { name, status } = req.body;

	const requestData = new Test({
		name: name,
		status: status,
	});

	try {
		const newTest = await requestData.save();
		res.status(201).json(newTest);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

// get one
const getTest = async (req, res) => {
	res.send(res.testData);
};

// delete one
const deleteTest = async (req, res) => {
	try {
		await Test.deleteOne({ _id: res.testData.id });
		res.json({ message: 'Deleted!' });
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
};

// update one
const updateTest = async (req, res) => {
	if (req.body.name !== null) {
		res.testData.name = req.body.name;
	}
	if (req.body.status !== null) {
		res.testData.status = req.body.status;
	}

	try {
		const updatedTestData = await res.testData.save();
		res.json(updatedTestData);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

module.exports = { getTests, createTest, getTest, deleteTest, updateTest };
