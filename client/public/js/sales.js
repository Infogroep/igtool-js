windows.sales = {
	activate: function() {
		$('#smartzap').focus();
		log("activating sales window");
	},
	deactivate: function() {
		log("deactivating sales window");
	},
}
// Populate debuggers

// Smartzap handling
//$("#sales-list").dataTable();
client_activate_window('sales');
