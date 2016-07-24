$(document).ready(function() {
    
    //open .rmView on #rmBtn click
    $('#rmBtn').parent().on('click', function() {
        
        $('.rmView').addClass('active');
        $('body').css({overflow: 'hidden'});
        $('.rmView').css({overflow: 'scroll'});
        
        $('.closeRM').on('click', function() {
             $('.rmView').removeClass('active');
            $('body').css({overflow: 'scroll'});
        });
        
    });     //end #rmBtn click event
    
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