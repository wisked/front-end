$(document).ready(function() {
	$('#photo-gallery img').draggable({
		revert: 'invalid',
		start: function(event, ui) {
			ui.helper.css('transform', 'rotate(5deg) scale(1.2)');
		}, 
		stop: function(event, ui) {
			ui.helper.css('transform', 'rotate(0deg) scale(1)');
		},
		zIndex: 100 
	});
	$('#trashContainer').droppable({
		activeClass: 'highlight',
		drop: function(event, ui) {
			ui.helper.hide('hide');
		}
	});

	$('#playlist').sortable({
		opacity: 0.5,
		placeholder: 'ui-state-highlight',
		axis: 'y',
		containment: '#sortableContainer'
	});

});