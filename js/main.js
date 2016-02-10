/**
 * Created by mosesesan on 30/10/15.
 */

$(function() {
    var nav        = $('#nav-icon');
    menu        = $('nav ul');
    //menuHeight  = menu.height();

    $(nav).on('click', function() {
        $(this).toggleClass('open');
        menu.slideToggle();
    });

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });


    <!-- Validation-->
    $(".send-btn").click(function(e){

        var error = false;
        var message = "";

        var form_data= $(".contact-form").serializeArray();

        for (var input in form_data) {
            if ($('#'+form_data[input]['name']).val().length <= 0) {
                error = true;
                message = message + "Please enter your "+form_data[input]['name']+".\n"
            }
        }

        if (error) {
            e.preventDefault();
            alert(message)
        }

    });


});
