$(document).ready(function() {
    
    //check for expand position and scroll element to top
    function scrollToView(element) {
        
        var docViewTop = $(window).scrollTop();
        var elemTop = $(element).offset().top;
        
        if (docViewTop > elemTop) {
           $(window).scrollTop(element.offset().top); 
        }
        
    }
   
    //open expand section on click
    $('.expand').on('click', function() {
        
        if ($(this).next().hasClass('open')) {
            $(this).next().removeClass('open');
            $('div.rotate').removeClass('rotate');
            scrollToView($(this));
        } else {
            $('.expandContent.open').removeClass('open');
            $(this).next().addClass('open');
            $('div.rotate').removeClass('rotate');
            $(this).children().children('div').addClass('rotate');
            scrollToView($(this));
        }
       
    });     //end .expand click event
    
    
});