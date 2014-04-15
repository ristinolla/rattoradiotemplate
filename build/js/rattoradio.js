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


}(jQuery);;$(function() {
$('html').removeClass('no-js');
    
    $('.slideshow').cycle();
    //code here

    
    function horizontalNav(selector){
      var $this = $(selector),
          full_width = $this.width();
      if($(selector).children('.cycle-sentinel').length != 0){
        $(selector).cycle('destroy').hide();
      };
      var width = full_width/4;
      
      $this.find('.slide').each(function() {
        $(this).css({'width': width});
          
      });
      setTimeout(function() {
          $this.children('.horizontal-sponsors').cycle().show();
      }, 10);  



    }
    if(window.outerWidth <= 992){
      horizontalNav('.horizontal-sponsors-wrap');
    }

    $(window).on('resize', function(){
      setTimeout(function() {
        horizontalNav('.horizontal-sponsors-wrap');
      }, 100);

    });


    
});
 