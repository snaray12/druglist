var user = process.env.dbuser || 'alexa';

var pwd = process.env.dbpwd || 'alexa';

var host = process.env.dbhost || 'ds027145.mlab.com';

var port = process.env.dbport || '27145';

var db = process.env.dbname || 'druginfo';


module.exports = {
	'url': 'mongodb://'+user+':'+pwd+'@'+host+':'+port+'/'+db
}
