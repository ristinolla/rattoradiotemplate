$(function() {
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