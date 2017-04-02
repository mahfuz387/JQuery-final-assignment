      
    $(function(){

      
                $(".fakeloader").fakeLoader({
                    timeToHide:1200,
                    bgColor:"#006699",
                    spinner:"spinner4", 
                     
                });
                 $('#header-section').parallax("90%",.5);
                 $('#counter-section').parallax("50%",.5);
                 $('#client-section').parallax("50%",.5);
                 $("html").niceScroll();

                 
            });
     
    baguetteBox.run('.baguetteBoxThree', {
                  animation: 'fadeIn',
                 noScrollbars: false, 
                  }) ;

                  new WOW().init(); 

            $('.navbar-nav li a').bind('click', function(event) {
                var $anchor=$(this);
                $('html, body').stop().animate( {
                    scrollTop: $($anchor.attr('href')).offset().top
                }
                , 1500, 'easeInOutExpo');
                event.preventDefault();
            }
            );

           
 
     
           
    

        
       


   