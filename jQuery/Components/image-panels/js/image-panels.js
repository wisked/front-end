$(document).ready(function() {
	$('#photo-gallery img').each(function() {
		var imgFile = $(this).attr('src');
		var preloadImage = new Image();
		var imgReg = /(\.\w{3,4}$)/;
		preloadImage.src = imgFile.replace(imgReg, '_h$1');
		$(this).hover(function() {
			$(this).attr('src', preloadImage.src);
		}, function() {
			$(this).attr('src', imgFile);
		});
	});

	// 
	$('#gallery a').click(function(e) {
		e.preventDefault();
		var imgPath = $(this).attr('href');
		var newImg = $('<img src="' + imgPath + '">');
		newImg.hide();
		var oldImg = $('#photo img');
		$('#photo').prepend(newImg);
		newImg.fadeIn(1000);
		oldImg.fadeOut(1000, function() {
			$(this).remove();
		});
	});
	$('#gallery a:first').click();

	//
	$('#youtube').click(function(event) {
		event.preventDefault();
		var winProps='height=300, width=auto, resizale=yes, scrollbars=yes';
		var newWin = open($(this).attr('href'), '', winProps);
	});
});