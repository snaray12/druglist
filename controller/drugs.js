var Drugs = require('./drugsModel');

var druglist = { 
    __v: false,
    _id: false
};

var drugs = {
	get: function(req, res) {
		Drugs.find(function(err, drugs) {
			if(err)
				res.send(err);
			res.json(drugs);
		});
	},

	add: function(req, res) {
		Drugs.create({
			name: req.body.name,
			genericName: req.body.genericName,
			livesSaved: req.body.livesSaved,
			application: req.body.application
		}, function(err, drug) {
			if(err)
				res.send(err);
			Drugs.find(function(err, drug){
				if(err)
					res.send(err)
				res.json(drug);
			});
		});
	},
	findByName: function(req, res) {
		console.log(req.params.name);
		Drugs.findOne({name: req.params.name}, druglist, function(err, drugs){
			if(err)
				res.send(err)
			res.json(drugs);
		});
	}
};

module.exports = drugs;