$(document).ready(function() {
	$('[title]').tooltip({
		content: $('#toolTip').html()
	});
	$('#tabPanel').tabs({
		show: 'fadeIn',
		hide: 'fadeOut'
	});
	var hash = location.hash;
	if (hash) {
		$('#tabPanel').tabs('load', hash);
	}
	$('#accordion').accordion({
		active: false,
		collapsible: true,
		icons: {
			header: 'ui-icon-circle-plus',
			activeHeader: 'ui-icon-ciecle-minus'
		}
	});
	$('#dialog').dialog({
		buttons: {
			Tabs: function() {
				$('#tabPanel').show('fast');
				$(this).dialog('close');
			},
			Accordion: function() {
				$('#accordion').show('fast');
				$(this).dialog('close');
				
			},
			All: function() {
				$('#accordion, #tabPanel').show('fast');
				$(this).dialog('close');
			},
			None: function() {
				$(this).dialog('close');
			}
		},
		draggable: false,
		resizeble: false,
		modal: true,
		hide: 'bounce',
		show: 'scale'
	});

	$('#accordion, #tabPanel').hide();

	$('#mainMenu').menu({
		position: {
			my: 'center top',
			at: 'center bottom'
		},
		icons: {
			submenu: 'ui-icon-triangle-1-s'
		}
	});
});