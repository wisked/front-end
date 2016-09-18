$(document).ready(function() {
	$('#news-box a').click(function(e) {
		e.preventDefault();
		var url = $(this).attr('href');
		$('#news-content').load(url + ' #newsItems');
	});
	$('#login').submit(function() {
		var formData = $(this).serialize();
		$.get('http://127.0.0.1:8000/auth/login/', formData, processData);
	});
	function processData(data) {
		if (data === 'pass') {
			$('#news-box').html('<p>Sucsesfuly log in!</p>');
		}
		else {
			$('#news-box').prepend('<p>invalid password</p>');
		}
	}
	// getJSON
	$.getJSON('http://127.0.0.1:8000', 'artist=1', processArtistData);
	function processArtistData (data) {
		 var artistInfo = '';

		 $.each(data, function(artist, artistInfo) {
		 	artistsInfo += '<p>Artist: ' + artistInfo + '</p>';
		 }); 
		 $('#artist-container').html(artistInfo);
	}
	// Feed from Flick
	var URL = "https://www.flickr.com/services/feeds/photos_public.gne?tags=summer&jsoncallback=?";
	var searchInfo = {
		id: "25053835@N03",
		format: "json"
	};
	$.getJSON(URL, searchInfo, function(data) {
		$('h1').text(data.title);
		var photoHTML = '';
		$.each(data.items, function (i, photo) {
			photoHTML += '<span class="image"><a href="' + photo.link + '">';
			photoHTML += '<img src="' + photo.media.m + '></a></span>';
		}); 
		$('#flickrFeed').append(photoHTML);  
		$('#flickrFeed a').click(function(event) {
			event.preventDefault();
			// $('#flickrFeed span').hide('explode', {
			var $flickrSpan = $('#flickrFeed span');
			if ($flickrSpan.css('display') === 'none') {
				$flickrSpan.show('blind', { direction: 'left' }, 1000);
			}
			else {
					$flickrSpan.hide('blind', {
					direction: 'left'
				}, 1000);
			}
		});
	});
});