(function($) {
	'use strict';	
	/*
	navBar
	=========================== */
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop != 0){
			$(".navbar-fixed-top").addClass("top-nav-collapse");
            $(".scroll-top").fadeIn(500);
			return false;
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
            $(".scroll-top").fadeOut(500);
			return false;
		}
	});

	/*
	Accordions
	=========================== */
	$('.accordions .panel-heading a[data-toggle="collapse"]').on('click', function () {   
		jQuery('.accordions .panel-heading a[data-toggle="collapse"]').removeClass('active');
		$(this).addClass('active');
	 });
	 
    /*
	Video play
	=========================== */
	$("#ytplayer").css({'opacity':'0','filter':'alpha(opacity=0)'});	
	$( ".start-video" ).on("click",function(){
		$('#ytplayer').fadeTo(900, 1);$( "img.img-video" ).fadeOut(800);
	});
	$(document).on('click', '.start-video', function () {
		$(this).fadeOut(800);
		player.playVideo();
	});
	
    /*
    Team Hover Effect
	=========================== */
    $(".item-team").each(function(){
        $(this).on("mouseenter", function() {
            $(".social-link", this).stop().addClass("show");
            return false;
        });
        $(this).on("mouseleave", function() {
            $(".social-link", this).stop().removeClass("show");
            return false;
        });
    });
	
    /*
    Gallery
	=========================== */
    $(".item-gallery").each(function(){
        $(this).append("<div class='overlay'></div>");
    });
	
    /* prettyPhoto
	=========================== */
    $(".wrap-gallery:first a[data-pretty^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'pp_default',slideshow:3000, autoplay_slideshow: false});
	$(".wrap-gallery:gt(0) a[data-pretty^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});
	
    /* Team
    =========================== */
    var team = $("#owl-team");
    team.owlCarousel({
      items : 3,
      itemsDesktop : [1024,3],  
      itemsTablet : [980,2],
      itemsMobile : [640,1],
      pagination : false
    });
    $(".next-team").on("click",function(){
        team.trigger('owl.next');
    });
    $(".prev-team").on("click",function(){
        team.trigger('owl.prev');
    });
	
    /* Testimoni
    =========================== */
    var testimoni = $("#owl-testimoni");
    testimoni.owlCarousel({
        pagination:false,
        singleItem:true,
        autoPlay:true,
        transitionStyle : "fade"
    });
    $(".next-testimoni").on("click",function(){
        testimoni.trigger('owl.next');
    });
    $(".prev-testimoni").on("click",function(){
        testimoni.trigger('owl.prev');
    });
		
    /* Client
    =========================== */
    var client = $("#owl-client");
    client.owlCarousel({
        items : 4,
        pagination:false,
    });

    // Custom Navigation Events
    $(".next-client").on("click",function(){
        client.trigger('owl.next');
    });
    $(".prev-client").on("click",function(){
        client.trigger('owl.prev');
    });
	
    /* Twitter Feed
    =========================== */
	$('.tweecool').tweecool({
		//settings
        username : 'envato', 
		limit : 5,
		profile_image : false,
		show_time : false,
		show_media : false,
		show_media_size: 'thumb'  //values: small, large, thumb, medium 
	})
	
    /* Fade In Slider
    =========================== */
    $('.twitter-feed').list_ticker({
        speed:5000,
        effect:'fade'
    });	
	
    /* Ajax contact form with validation
    =========================== */
    $("#mycontactform").validate({
		 submitHandler: function() {
            $("#submit").addClass("disabled");
            $(".status-progress").html("<div class='wow rotateIn' data-wow-iteration='infinite' data-wow-duration='2s'><i class='icon-hour-glass'></i></div> ");
			$.post("contact/email.php", $("#mycontactform").serialize(),  function(response) {
				$('#success').html(response);
                $("#submit").removeClass("disabled");
                $(".status-progress").html("");
			});
			return false;
		}							 
	});
    $("#validateform").validate({
		 submitHandler: function() {
            $("#submit").addClass("disabled");
            $(".status-progress").html("<div class='wow rotateIn' data-wow-iteration='infinite' data-wow-duration='2s'><i class='icon-hour-glass'></i></div> ");
			return false;
		}							 
	});
})(jQuery);

