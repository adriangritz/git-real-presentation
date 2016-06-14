jQuery(function($){
	// Animate boxes on hover
	$('.git-tutorials-wrap .git-gui-box').hover(
		function(){ $(this).addClass('animated bounce'); },
		function(){ $(this).removeClass('bounce'); }
	);
});