(function(){

	$(document).ready(function() {
		// index scripts
		$('.drop-down-menu').click(function(event) {
			$('.nav_lst').slideToggle(400);
		});
		
		$('#offers').click(function(event) {
			$('.nav li:has(a)').slideToggle('fast');
		});

		$('.read-quites-lst').on('click', hideShow);
		function hideShow(){
			var $li = ($('.quites-lst li:hidden'));

			if ($li.length) {
				$li.show('fast');
				$(this).addClass('arrow-up');
			}
			else{
				$('.quites-lst li:nth-of-type(1n+11)').hide('fast');
				$(this).removeClass('arrow-up');
			}
		}

	});
})();