const mongoose = require('mongoose');

const testSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		status: {
			type: String,
			required: true,
			default: 'active',
		},
	},
	{
		timestamps: true,
	}
);

const Test = mongoose.model('Test', testSchema);

module.exports = Test;
