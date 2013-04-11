var windows = {
	'products':null,
	'sales':null,
	'members':null,
	'printing':null,
	'library':null,
	'account':null,
	'automaton':null,
	'console':null	
};
var theme = "classic";

var client_activate = (function () {
	var previous = null;
	return function(current) {
		var window = windows[current];
		if(window != undefined)
			if(window.hasOwnProperty('activate'))
				window.activate();
		window = windows[previous];
		if(window != undefined)
			if(window.hasOwnProperty('deactivate'))
				window.deactivate();
		previous = current;
	};
})();

function client_resize() {
	$('.client-content')
		.css('height',$('#client-windows').css('height'))
		.css('height','-=50');
}

// Initialization of all windows
var loaded = 0;
for(var w in windows) {
	$('head').append('<link rel="stylesheet" type="text/css" href="/windows/'+w+'/style.css">');
	$.getScript('/windows/'+w+'/script.js',function(data,textStatus,jqxhr) {
		// count the number of loaded items
		loaded++;
		// if all windows are loaded, start populating
		if(loaded == Object.keys(windows).length) {
			for(var w in windows) {
				var tab = windows[w];
			 	
				$('ul')
					.append($('<li />')
						.append($('<div />')
							.addClass('tab')
							.append($('<img />')
								.attr('src','/windows/'+w+'/tab_icon.png'))
							.append($('<div />')
								.html(tab.title))));
				
				var div = $('<div />')
					.attr('id',w)
					.addClass('tab-content')
					.load('/windows/'+w);
				$('#client').append(div);
		 }
		 //tab-ify the client
		 $('#client').jqxTabs({width:'100%',height:'100%',position:'top',theme:theme});
		}
	});
}

$(window).resize(client_resize);
$('#client').on('selected',function(event) {
	client_activate($('#client').jqxTabs('getContentAt',event.args.item).attr('id'));
});
client_activate(windows[0]);
$('div.tab-content').jqxPanel({width:'100%',height:'100%',theme:theme});

$('#client jqx-tabs-header');
