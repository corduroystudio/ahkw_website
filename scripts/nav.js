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
    
                  
              
                  
                  
});