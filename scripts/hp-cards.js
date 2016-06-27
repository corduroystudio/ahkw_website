$(document).ready(function() {
    
    var $cards = $('div.card');
    //console.log($cards.offset());
    
    
    //check for card position and add inView class if true
    function scrollToView(element) {
        //console.log(element);
        var docViewTop = $(window).scrollTop();
        //var docViewBottom = docViewTop + $(window).height()
           
        var elemTop = element.offset().top;
        var elemBottom = elemTop + element.height();
        var enterView = docViewTop + 400;

        //console.log(elemBottom);
        //console.log(enterView);

        if (elemBottom <= enterView && elemBottom > docViewTop) {
            //console.log('running');
            element.addClass('inView'); 
        } else {
            element.removeClass('inView');
            //console.log('running');
        } 
        
    }
   
    //check for card position on document scroll
    $(document).on('scroll', function() {
        
        if ($(window).width() < 768) {
            scrollToView($('#opal'));
            scrollToView($('#at'));
            scrollToView($('#catbe'));
            scrollToView($('#s'));
            scrollToView($('#sb'));
            scrollToView($('#oaap'));
            scrollToView($('#ngpsai'));
            scrollToView($('#fapi'));
            scrollToView($('#os'));
            scrollToView($('#pl'));
        }
       
    });     //end scroll event
    
    
});