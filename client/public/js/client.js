function activate(el) {
	$("div.content-item").hide();
	$(document.getElementById(el)).show();
}

$("div.menu-item").each(function(idx,el) {
	$('<img />').prependTo(el).attr({
		src:'/img/'+el.getAttribute('data-window')+'.png'
	});
	$(el).click(function() {
		activate(el.getAttribute('data-window'));
	});
});
