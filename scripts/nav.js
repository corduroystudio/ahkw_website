$(document).ready(function() {
                  
    $('.hamburger').on('click', function() {
        $(this).toggleClass('is-active');
        $('body').toggleClass('nav-open');
        $('.hamburger-label.menu').toggleClass('is-active');
        $('.hamburger-label.close').toggleClass('is-active'); 
        
        $('nav').toggleClass('is-active');
        $('header').toggleClass('fixed');
    });
    
    $('.navKeyIndicator').on('click', function() {        
        $('.hamburger').toggleClass('is-active');
        $('.hamburger-label.menu').toggleClass('is-active');
        $('.hamburger-label.close').toggleClass('is-active'); 
        $('nav').toggleClass('is-active');
        $('header').toggleClass('fixed');
    });
    
    $('.langSetting').on('click', function() {
        $(this).children().toggleClass('is-active');
    });
    
    $('.ui-BackToTop').on('click', function() {
        $('html, body').animate({scrollTop: 0}, 400)
    });
    
                  
    //rotate device
    var html = '<div class="rotateDevice">'; 
    html += '<h5>Please rotate your device</h5>';
    html += '<img src="media/icons/rotate.svg" alt="Rotate Device">';
    html += '</div>';
    
    //show rotate device if on mobile and landscape orientation
    if ($(window).height() < $(window).width() && $(window).width() < 768) {
        $('body').append(html);
    } 
    
    
    //resize function
    $(window).resize(function() {
       
        if ($(window).height() < $(window).width() && $(window).width() < 768) {
            $('body').append(html);
        } else {
            $('.rotateDevice').hide();
        }
        
    });
                  
});