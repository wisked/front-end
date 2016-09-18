$(document).ready(function() {
	$('#dashboard').hover(function() {
		$(this).stop().animate({
			left: 0,
			backgroundColor: 'rgb(27,45,94)'
		}, 
			500,
			'easeInBounce'
		);
	}, function() {
		$(this).stop().animate({
            left: '-92px',
            backgroundColor: 'rgb(255,211,224)'
        },
        	500
	    ); 
	});

	$('#photo').animate({
		left: '+=400px'
	},
		1000,
		function () {
			$(this).fadeOut(1000);
		}
	);
	// progress bar
	$('#start').click(function(event) {
		$('.progressBar').css('animation-play-state', 'running');
	});
	$('#pause').click(function(event) {
		$('.progressBar').css('animation-play-state', 'paused');
	});
});

	
