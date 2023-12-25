(function ($) {
 "use strict";
 
//-------------------- page scrolling feature using jQuery Easing plugin--------------------//

$('.navbar-nav.navbar-right li a').addClass('page-scroll');	
	
  $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeOutSine');
        event.preventDefault();
    });		
	
//-------------------- mixItUp--------------------//

   $('.projects-content').mixItUp({
   animation: {
	   effects: 'fade rotateY(-180deg)',
	   duration: 1000,
		}
	});
	
//-------------------- Review owlCarousel--------------------//
	
    $(document).ready(function() {
     
      $("#review_carousel").owlCarousel({
			items : 1,
			itemsDesktop : [1199,1],
			itemsDesktopSmall : [980,1],
			itemsTablet: [768,1],
			itemsMobile : [479,1],
			autoPlay : true,
			navigation : true,	
			navigationText : [" "," "],			
	  });
//-------------------- Team owlCarousel--------------------//

      $("#team_carosuel").owlCarousel({
			items : 4,		
			itemsDesktopSmall : [980,2],
			itemsTablet: [768,2],
			navigation : false,	
			pagination : false,
	  });	      
    });	

//-------------------- CounterUp--------------------//
	
	$('.counter').counterUp({
            delay: 10,
            time: 1000
        });

})(jQuery);