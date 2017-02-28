var mongoose = require('mongoose');

var DrugInfoSchema = new mongoose.Schema({
	count: {type: String},
	category: {type: String},
	drugsList:{type: String}
});

module.exports = mongoose.model('DrugInfo', DrugInfoSchema);