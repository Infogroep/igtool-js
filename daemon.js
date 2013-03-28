var connect = require('connect');
var router = require('./router');
var config = require('./config');

var app = connect()
	.use(router)
	.use(connect.static(__dirname+'/client/public'))
	.listen(config.port);
