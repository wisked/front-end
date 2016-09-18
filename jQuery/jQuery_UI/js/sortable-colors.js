$(document).ready(function() {
	var answer = ['r','o','y','g','b','i','v'].join('');
	$('#gameContainer').sortable({
		axis: 'x',
		stop: function(event, ui) {
			if ($(this).sortable("toArray").join('') === answer) {
				alert('yee');
					

			}
		},
		sort: function(event, ui) {
			console.log(ui.position);
		}
	});
});