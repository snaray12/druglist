var DrugInfo = require('../model/druginfo');
var Drugs = require('../model/drugs');

var druglist = { 
    __v: false,
    _id: false,
    category: false
};

var cat = {
	diabetes:'diabetes',
	cardiovascular:'cardiovascular',
	gastrointestinal: 'gastrointestinal',
	neuroscience:'neuroscience',
	oncology:'oncology',
	respiratory:'respiratory',
	anesthetics:'anesthetics'
}

var druginfo = {
	get: function(req, res) {
		DrugInfo.find(function(err, druginfo) {
			if(err)
				res.send(err);
			res.json(druginfo);
		});
	},

	add: function(req, res) {
		DrugInfo.create({
			category: req.body.category,
			count: req.body.count,
			drugsList: req.body.drugslist
		}, function(err, druglist) {
			if(err)
				res.send(err);
			DrugInfo.find(function(err, druginfo){
				if(err)
					res.send(err)
				res.json(druginfo);
			});
		});
	},
	findByCategory: function(req, res) {
		console.log(req.params.category);
		try {
			if(cat[req.params.category] === undefined || cat[req.params.category] === 'undefined') {
				DrugInfo.findOne({category: 'byetta'},druglist, function(err, druginfo){
					if(err)
						res.send(err)
					res.json(druginfo);
				});	
			}
			DrugInfo.findOne({category: req.params.category},druglist, function(err, druginfo){
				if(err)
					res.send(err)
				res.json(druginfo);
			});	
		} catch(err) {
			console.log(err);
		}
		
	},
	findByName: function(req, res) {
		console.log(req.params.name);
		Drugs.findOne({name: req.params.name}, function(err, drugs){
			if(err)
				res.send(err)
			res.json(drugs);
		});
	}
};

module.exports = druginfo;