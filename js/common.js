head.ready(function() {
	$('.js-nav-mobile').on('click', function() {
	 $( ".nav" ).slideToggle( "slow", function() {
	     // Animation complete.
	   });
	});
	$('.nav-list-item').on('click', function() {
	 $(this).toggleClass("is-drop");
	});
});