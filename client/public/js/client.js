var windows = {};

function client_activate_window(current,previous) {
	var window = windows[current];
	if(window != undefined)
		if(window.hasOwnProperty('activate'))
			window.activate();
	window = windows[previous];
	if(window != undefined)
		if(window.hasOwnProperty('deactivate'))
			window.deactivate();
}

function log(data,type) {
	if(type == undefined)
		type = 'notification';
	var msg = $('<div />');
	msg.attr('class','log '+type);
	msg.text(data);
	msg.appendTo('#console-output');
}

// Initialization

$("#client").accordion({heightStyle:"fill"});
$("#windows").tabs({
	activate: function(event, ui) {
		client_activate_window(ui.newPanel.attr('id'),ui.oldPanel.attr('id'));
	}
});
