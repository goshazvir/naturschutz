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
	    $("#s-map11").attr('fill', '#3c7d23');
	  }, function() {
	    $("#s-map11").attr('fill', '#bacb43');
	  }
	);
	$( "#s-map11" ).hover(
	  function() {
	    $(this).attr('fill', '#3c7d23');
	  }, function() {
	    $(this).attr('fill', '#bacb43');
	  }
	);
	$( "#map2" ).hover(
	  function() {
	    $("#s-map22").attr('fill', '#3c7d23');
	  }, function() {
	    $("#s-map22").attr('fill', '#bacb43');
	  }
	);
	$( "#s-map22" ).hover(
	  function() {
	    $(this).attr('fill', '#3c7d23');
	  }, function() {
	    $(this).attr('fill', '#bacb43');
	  }
	);
	$( "#map3" ).hover(
	  function() {
	    $("#s-map33").attr('fill', '#3c7d23');
	  }, function() {
	    $("#s-map33").attr('fill', '#bacb43');
	  }
	);
	$( "#s-map33" ).hover(
	  function() {
	    $(this).attr('fill', '#3c7d23');
	  }, function() {
	    $(this).attr('fill', '#bacb43');
	  }
	);
	$( "#map4" ).hover(
	  function() {
	    $("#s-map44").attr('fill', '#3c7d23');
	  }, function() {
	    $("#s-map44").attr('fill', '#bacb43');
	  }
	);
	$( "#s-map44" ).hover(
	  function() {
	    $(this).attr('fill', '#3c7d23');
	  }, function() {
	    $(this).attr('fill', '#bacb43');
	  }
	);
	$( "#map5" ).hover(
	  function() {
	    $("#s-map55").attr('fill', '#3c7d23');
	  }, function() {
	    $("#s-map55").attr('fill', '#bacb43');
	  }
	);
	$( "#s-map55" ).hover(
	  function() {
	    $(this).attr('fill', '#3c7d23');
	  }, function() {
	    $(this).attr('fill', '#bacb43');
	  }
	);
	$( "#map6" ).hover(
	  function() {
	    $("#s-map66").attr('fill', '#3c7d23');
	  }, function() {
	    $("#s-map66").attr('fill', '#bacb43');
	  }
	);
	$( "#s-map66" ).hover(
	  function() {
	    $(this).attr('fill', '#3c7d23');
	  }, function() {
	    $(this).attr('fill', '#bacb43');
	  }
	);
	$( "#map7" ).hover(
	  function() {
	    $("#s-map77").attr('fill', '#3c7d23');
	  }, function() {
	    $("#s-map77").attr('fill', '#bacb43');
	  }
	);
	$( "#s-map77" ).hover(
	  function() {
	    $(this).attr('fill', '#3c7d23');
	  }, function() {
	    $(this).attr('fill', '#bacb43');
	  }
	);
	$( "#map8" ).hover(
	  function() {
	    $("#s-map88").attr('fill', '#3c7d23');
	  }, function() {
	    $("#s-map88").attr('fill', '#bacb43');
	  }
	);
	$( "#s-map88" ).hover(
	  function() {
	    $(this).attr('fill', '#3c7d23');
	  }, function() {
	    $(this).attr('fill', '#bacb43');
	  }
	);
	$( "#map9" ).hover(
	  function() {
	    $("#s-map99").attr('fill', '#3c7d23');
	  }, function() {
	    $("#s-map99").attr('fill', '#bacb43');
	  }
	);
	$( "#s-map99" ).hover(
	  function() {
	    $(this).attr('fill', '#3c7d23');
	  }, function() {
	    $(this).attr('fill', '#bacb43');
	  }
	);
	$( "#map10" ).hover(
	  function() {
	    $("#s-map111").attr('fill', '#3c7d23');
	  }, function() {
	    $("#s-map111").attr('fill', '#bacb43');
	  }
	);
	$( "#s-map111" ).hover(
	  function() {
	    $(this).attr('fill', '#3c7d23');
	  }, function() {
	    $(this).attr('fill', '#bacb43');
	  }
	);
	$( "#map12" ).hover(
	  function() {
	    $("#s-map222").attr('fill', '#3c7d23');
	  }, function() {
	    $("#s-map222").attr('fill', '#bacb43');
	  }
	);
	$( "#s-map222" ).hover(
	  function() {
	    $(this).attr('fill', '#3c7d23');
	  }, function() {
	    $(this).attr('fill', '#bacb43');
	  }
	);
	$( "#map13" ).hover(
	  function() {
	    $("#s-map333").attr('fill', '#3c7d23');
	  }, function() {
	    $("#s-map333").attr('fill', '#bacb43');
	  }
	);
	$( "#s-map333" ).hover(
	  function() {
	    $(this).attr('fill', '#3c7d23');
	  }, function() {
	    $(this).attr('fill', '#bacb43');
	  }
	);
	$( "#map14" ).hover(
	  function() {
	    $("#s-map444").attr('fill', '#3c7d23');
	  }, function() {
	    $("#s-map444").attr('fill', '#bacb43');
	  }
	);
	$( "#s-map444" ).hover(
	  function() {
	    $(this).attr('fill', '#3c7d23');
	  }, function() {
	    $(this).attr('fill', '#bacb43');
	  }
	);
	$( "#map15" ).hover(
	  function() {
	    $("#s-map555").attr('fill', '#3c7d23');
	  }, function() {
	    $("#s-map555").attr('fill', '#bacb43');
	  }
	);
	$( "#s-map555" ).hover(
	  function() {
	    $(this).attr('fill', '#3c7d23');
	  }, function() {
	    $(this).attr('fill', '#bacb43');
	  }
	);
	$( "#map16" ).hover(
	  function() {
	    $("#s-map666").attr('fill', '#3c7d23');
	  }, function() {
	    $("#s-map666").attr('fill', '#bacb43');
	  }
	);
	$( "#s-map666" ).hover(
	  function() {
	    $(this).attr('fill', '#3c7d23');
	  }, function() {
	    $(this).attr('fill', '#bacb43');
	  }
	);
	$( "#map17" ).hover(
	  function() {
	    $("#s-map777").attr('fill', '#3c7d23');
	  }, function() {
	    $("#s-map777").attr('fill', '#bacb43');
	  }
	);
	$( "#s-map777" ).hover(
	  function() {
	    $(this).attr('fill', '#3c7d23');
	  }, function() {
	    $(this).attr('fill', '#bacb43');
	  }
	);
	$( "#map18" ).hover(
	  function() {
	    $("#s-map888").attr('fill', '#3c7d23');
	  }, function() {
	    $("#s-map888").attr('fill', '#bacb43');
	  }
	);
	$( "#s-map888" ).hover(
	  function() {
	    $(this).attr('fill', '#3c7d23');
	  }, function() {
	    $(this).attr('fill', '#bacb43');
	  }
	);
	$( "#map19" ).hover(
	  function() {
	    $("#s-map999").attr('fill', '#3c7d23');
	  }, function() {
	    $("#s-map999").attr('fill', '#bacb43');
	  }
	);
	$( "#s-map999" ).hover(
	  function() {
	    $(this).attr('fill', '#3c7d23');
	  }, function() {
	    $(this).attr('fill', '#bacb43');
	  }
	);
	$( "#map20" ).hover(
	  function() {
	    $("#s-map1111").attr('fill', '#3c7d23');
	  }, function() {
	    $("#s-map1111").attr('fill', '#bacb43');
	  }
	);
	$( "#s-map1111" ).hover(
	  function() {
	    $(this).attr('fill', '#3c7d23');
	  }, function() {
	    $(this).attr('fill', '#bacb43');
	  }
	);
	$( "#map21" ).hover(
	  function() {
	    $("#s-map2222").attr('fill', '#3c7d23');
	  }, function() {
	    $("#s-map2222").attr('fill', '#bacb43');
	  }
	);
	$( "#s-map2222" ).hover(
	  function() {
	    $(this).attr('fill', '#3c7d23');
	  }, function() {
	    $(this).attr('fill', '#bacb43');
	  }
	);
	$( "#map22" ).hover(
	  function() {
	    $("#s-map3333").attr('fill', '#3c7d23');
	  }, function() {
	    $("#s-map3333").attr('fill', '#bacb43');
	  }
	);
	$( "#s-map3333" ).hover(
	  function() {
	    $(this).attr('fill', '#3c7d23');
	  }, function() {
	    $(this).attr('fill', '#bacb43');
	  }
	);
	$( "#map23" ).hover(
	  function() {
	    $("#s-map4444").attr('fill', '#3c7d23');
	  }, function() {
	    $("#s-map4444").attr('fill', '#bacb43');
	  }
	);
	$( "#s-map4444" ).hover(
	  function() {
	    $(this).attr('fill', '#3c7d23');
	  }, function() {
	    $(this).attr('fill', '#bacb43');
	  }
	);
	$( "#map24" ).hover(
	  function() {
	    $("#s-map5555").attr('fill', '#3c7d23');
	  }, function() {
	    $("#s-map5555").attr('fill', '#bacb43');
	  }
	);
	$( "#s-map5555" ).hover(
	  function() {
	    $(this).attr('fill', '#3c7d23');
	  }, function() {
	    $(this).attr('fill', '#bacb43');
	  }
	);
});