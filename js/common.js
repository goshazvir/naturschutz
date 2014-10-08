head.ready(function() {
	$('.js-nav-mobile').on('click', function() {
	 $( ".nav" ).slideToggle( "slow", function() {
	     // Animation complete.
	   });
	});
	$('.nav-list-item').on('click', function() {
	 $(this).toggleClass("is-drop");
	});

	$(".js-top").click(function (){
	  var page = $(this).attr("href");
	  $('html, body').animate({
	   scrollTop: $(page).offset().top
	  }, 500);
	  return false;
	 });
});