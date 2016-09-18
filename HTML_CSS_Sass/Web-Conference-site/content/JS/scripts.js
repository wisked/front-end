$(document).ready(function () {
    // speaker slider
    var loadImages = [
        "./content/image/speaker2.jpeg",
        "./content/image/speaker3.jpeg",
        "./content/image/speaker4.jpeg",
        "./content/image/speaker.jpg"
    ];
    


    // up button
    $(window).scroll(function() 
    {
        if  ($(window).scrollTop() == $(document).height() - $(window).height()) 
        {
            // $('#button-up').toggle();
            $('#button-up').css('display', 'block');
        }
        else {
            $('#button-up').css('display', 'none');

        }
    });
});
