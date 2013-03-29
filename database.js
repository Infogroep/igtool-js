var mongoose = require('mongoose').Mongoose;
var config = require('./config');
exports = module.exports = {
	db : mongoose.createConnection(config.dbhost,config.dbname,config.dbport),
	schema : mongoose.schema,
	mongoose : mongoose
};
