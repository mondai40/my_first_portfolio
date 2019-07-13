$(document).ready(function() {
    $(".scroll-button").click(function() {
        var id = $(this).attr("href");
        var position = $(id).offset().top;
        $("html, body").animate({
            "scrollTop": position - 65
        }, 500);
    });

    $(".skill").hover(
        function() {
            $(this).find(".skill-text").css("color", "rgba(128,128,128, 1.0)");
            
        }, 
        function() {
            $(this).find(".skill-text").css("color", "rgba(128,128,128, 0.0)");
            
       }
    );

    
});