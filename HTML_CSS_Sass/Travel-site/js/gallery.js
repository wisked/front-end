(function () {
	$(document).ready(function() {
		
		$('#photo-gallery img').click(function(event) {
			event.preventDefault();
			var imgPatch = $(this).attr('src');
			var newImage = $('<img src="' + imgPatch + '">');
			var oldImage = $('#photo img');
			newImage.hide();
			
			$('#photo').prepend(newImage);
			newImage.fadeIn(400);
			oldImage.fadeOut(400, function() {
				$(this).remove();
			});
		});
		$('#photo-gallery img:first').click();
	});
})();