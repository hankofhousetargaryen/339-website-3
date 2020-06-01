const newLocal = '.p-item-1';
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
   $(newLocal).css({
   'transform' :'translate(0px, '+ wScroll/2 +'%)' 
    }); 
   });