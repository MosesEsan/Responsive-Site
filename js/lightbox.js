/**
 * Created by mosesesan on 31/10/15.
 */

$(function() {
    $('.content-image').click(function(e) {

        e.preventDefault(); //Prevent the default action of the a tag

        var image_src = $(this).attr("href"); //Get the image source

        $('.lightbox img').attr("src", image_src); //Update the source for the img element

        $('.lightbox').show(); //Show the lightbox

    });

    $('.lightbox p').click(function() {
        $('.lightbox').hide(); //Hide the lightbox
    });
});

