
$(document).ready(function() {
    $(window).scroll( function(){
        $('.fadeinleft0').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},200);
            }
            
        }); 
    });
});


$(document).ready(function() {
    $(window).scroll( function(){
        $('.fadeinleft').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},1000);
            }
            
        }); 
    });
});

$(document).ready(function() {
    $(window).scroll( function(){
        $('.fadeinleft2').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},2000);
            }
            
        }); 
    });
});


$(document).ready(function() {
    $(window).scroll( function(){
        $('.fadeinleft3').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},3000);
            }
            
        }); 
    });
});


jQuery(document).ready(function($) {
     $(".scroll").click(function(event){ event.preventDefault(); $('html,body')
     .animate({scrollTop:$(this.hash).offset().top}, 1000); }); }); 



     $(document).ready(function() {
        var count = 0;
        var blocks = $(".block");
      
        var testEffect = setInterval(function() {
          $(blocks[count - 1]).removeClass("hover");
          $(blocks[count]).addClass("hover");
          count++;
          if (count > 4) clearInterval(testEffect);
        }, 800);
      });
      