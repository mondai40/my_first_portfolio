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
            // $(this).find(".skill-icon").find("p").animate({"color": "red"}, 500);
            $(this).find(".skill-icon").find("p").css("color", "blue");
                // "font-size": 150%,
                // "font-color": red,
                // font-weight: bold
            
        }, 
        function() {
            // $(this).find(".skill-icon").find("p").animate({"color": "blue"}, 500);
            $(this).find(".skill-icon").find("p").css("color", "blue");
                // "font-size": 100%,
                // "font-color": white,
                // font-weight: normal
            
       }
    );

    
});