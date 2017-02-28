var mongoose = require('mongoose');

var DrugsSchema = new mongoose.Schema({
	name: {type: String},
	genericName:{type: String},
	livesSaved:{type: String},
	application:{type: String}
});

module.exports = mongoose.model('Drugs', DrugsSchema);