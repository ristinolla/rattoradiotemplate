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



    function init_menu_affix () {
      $('#affix-menu').affix({
        offset: {
          top: 550
        , bottom: function () {
            return (this.bottom = $('.site-footer').outerHeight(true) + 100 )
          }
        }
      })
    }

    if(window.outerWidth <= 992){
      horizontalNav('.horizontal-sponsors-wrap');
    }

    if(window.outerWidth > 992){
      init_menu_affix();
    }


    $(window).on('resize', function(){
      setTimeout(function() {
        init_menu_affix();
        horizontalNav('.horizontal-sponsors-wrap');

        if(window.outerWidth > 992){
          init_menu_affix();
        }


      }, 100);

    });







    
});