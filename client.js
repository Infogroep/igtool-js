/**
 * client.js
 * Connect middleware responsible for loading the client page
 **/

var fs = require('fs');
var jade = require('jade');

exports = module.exports = function(req,res,next) {
	fs.readFile('client/client.jade','utf8',function(err,data) {
		if(err) throw err;
		try
		{
			var tpl = jade.compile(data,{filename:__dirname+"/client/client.jade"});
			res.end(tpl({req:req,res:res}));
		}
		catch (jaderr)
		{
			res.end(jaderr.stack);
		}
	});
};
