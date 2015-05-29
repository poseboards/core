/*
 Get Canvas Element
 */
var canvas = document.getElementById("uploadedAnimation");
/*
 Context of the Canvas
 */
var ctx = canvas.getContext("2d");
// console.log(ctx);
/*
 Frames Per Second of Animation, 10 is default
 */
var fps = (1000 / 10);
/*
 Define the image
 */
var image = new Image();
image.src = '../../imgs/sprite.png';


/*
 Require Animation.js
 */
var a = new Animation(100, 100, ctx, image, 4, fps);
a.start();
/*
 UI Control Logic
 */
$(document).ready(function () {
    $('#nextFrame').on('click', function() {
        if(a.isPlaying) return;

        a.nextFrame();
    });

    $('#prevFrame').on('click', function() {
        if(a.isPlaying) return;

        a.prevFrame();
    });

    $('#pause').on('click', function() {
        if(!a.isPlaying) return;

        a.pause();
    });

    $('#play').on('click', function() {
        if(a.isPlaying) return;

        a.play();
    });


    $('#userFile').change(function(e){

        for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {

            var file = e.originalEvent.srcElement.files[i];

            var img = document.createElement("img");


            var reader = new FileReader();
            reader.onloadend = function() {
                //img.src = reader.result;
                image.src = reader.result;
            }
            reader.readAsDataURL(file);
            //$("input").after(img);

            $("#out1").text("Click Play Anim to refresh");
        }



        console.log("User has uploaded");


    });

});

