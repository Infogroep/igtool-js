var route = require('connect-route');
var fs = require('fs');
var jade = require('jade');

var windows = fs.readdirSync(__dirname+'/client/windows/');

function jadeHelper(file,req,res) {
	fs.readFile(file,'utf8',function(err,data) {
		if(err) throw err;
		try
		{
			var tpl = jade.compile(data,{filename:__dirname+'/'+file});
			res.end(tpl({req:req,res:res}));
		}
		catch (jaderr)
		{
			res.end(jaderr.stack);
		}
	});
}

exports = module.exports = route(function(router) {
		router.get('/',function(req,res,next) {
			jadeHelper('client/client.jade',req,res);
		});
		router.get('/windows/:w',function(req,res,next) {
			var w = req.params.w;
			if(windows.indexOf(w) >= 0) {
				jadeHelper('client/windows/'+w+'/window.jade',req,res);
			}
			else {
				console.log('request to nonexisting window: '+w);
				res.end('404: nonexisting window - '+w);
			}
		});
});
