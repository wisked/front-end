(function () {
	 $(document).ready(function() {
	
		console.log(trips[2]);
	  	$('#birthdate').datepicker({
	  		numberOfMonths: 2,
	  		changeMonth: true,
	  		changeYear: true,
	  		dateFormat: 'dd-MM-yy',
	  		maxDate: '+6m',
	  		minDate: '+1d'
	  	}); 

	  	$('#category').selectmenu({
	  		width: '50%',
	  		icons: {
	  			button: "ui-icon-triangle-1-s"
	  		}
	  	});
	  	$('#submit').button({
	  		icons: {
	  			primary: "ui-icon-cart"
	  		}
	  	});

	  	$('#radio').buttonset();
	  	$('#check').buttonset();
	  	$('#seatTypes').autocomplete({ source: trips, minLength: 2});
	  }); 
})();