$(document).ready(function() {
	$('#add-task').hide();
	$('#message').click(function(event) {
		event.preventDefault();
		$('#add-task').slideToggle('fast');	
	});
	$('#add-task').submit(function(e) {
		e.preventDefault();
		var text = $('#add-task input[type="text"]').val();
		var li = "<li>" + text + "</li>";
		$('#list').prepend(li);
		$('#add-task input[type="text"]').val('');
	});
	$('#list').on('click', 'li', function(event) {
		if ($(this).css('text-decoration') === "line-through") {
			$(this).css('text-decoration', 'none');
		}
		else {
			$(this).css('text-decoration', 'line-through');
		}
	});
	
	$('#gallery img').hover(function() {
		var src = $(this).attr('src');
		console.log(src);
		var regExpr = /d+$\.jpg/;
		var rand = randomizer(src)
		console.log(rand);
	}, function() {
		/* Stuff to do when the mouse leaves the element */
	});
});

function randomizer (src) {
	var rand;
	while (rand > 5 || rand === src) {
		rand = (Math.random() * 10).Math.round();
	 	
	}
	return rand; 
}