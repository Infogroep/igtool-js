var route = require('connect-route');
var client = require('./client');
exports = module.exports = route(function(router) {
		router.get('/',client);
});
