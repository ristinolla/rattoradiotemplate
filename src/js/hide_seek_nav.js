/***
Hide and seek navigation
Author: Perttu
Vesion: 0.1.2
**/

+function ($) {
	'use strict';


	function hide_scroll_guide(st) {
		// body...
		;
		if( $('#scroll-tip-hide').position().top - window.innerHeight  <= st) {
			$('#scroll-guide').addClass('fadeaway');
		}

	}

	 var lastScrollTop = 0;
	 $(window).scroll(function(event){
	    var st = $(this).scrollTop();
	    //hide_scroll_guide(st);
	    
	    if(st < 600) {

	 		if (st > lastScrollTop){
	 			$('#main-header').addClass('up').removeClass('down');
	 		} else {
	 			$('#main-header').addClass('down').removeClass('up');
	 		}
	 	lastScrollTop = st;
	 	} else {
	 		if(!$('#main-header').hasClass('down')){
				$('#main-header').addClass('down').removeClass('up');
	 		}
	 	}

	});


}(jQuery);