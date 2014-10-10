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

	$( "#map1" ).hover(
	  function() {
	    $( "#js-map1" ).addClass( "is-hover" );
	  }, function() {
	    $( "#js-map1" ).removeClass( "is-hover" );
	  }
	);
	$( "#js-map1" ).hover(
	  function() {
	    $( this ).addClass( "is-hover" );
	    $( "#map1" ).addClass( "is-hover" );
	  }, function() {
	    $( this ).removeClass( "is-hover" );
	    $( "#map1" ).removeClass( "is-hover" );
	  }
	);

});