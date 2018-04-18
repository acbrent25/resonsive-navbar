function navScroll(){
    
   // cache nav 
   var nav = $('nav#transparentNav');

   var staticTop = $(nav).offset().top;
   console.log('staticTop: ' + staticTop);

   if (staticTop > 100) {
       nav.removeClass('transparent');
   } else {
       nav.addClass('transparent');
   }

   $(window).scroll(function() {
       var eTop = $(nav).offset().top;
       console.log(eTop);
       nav.attr('data-scroll', eTop);

       if ($(document).scrollTop() < 100) {
         nav.addClass('transparent');
       } else {
         nav.removeClass('transparent');
       }
     });

     var navToggler = $('.navbar-toggler');

     navToggler.click(function(){
       var staticTop = $(nav).offset().top;
       if (staticTop < 100) {
           nav.toggleClass('transparent');
       } 

   });
}

navScroll();