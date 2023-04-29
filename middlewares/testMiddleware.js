const Test = require('../models/testModel');

const getTestById = async (req, res, next) => {
	let testData;
	try {
		testData = await Test.findById(req.params.id);
		if (!testData) {
			return res.status(404).json({ message: 'Cannot find data!' });
		}
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}

	res.testData = testData;
	next();
};

module.exports = getTestById;
