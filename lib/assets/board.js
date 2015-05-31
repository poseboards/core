var UploadsCtrl = require('../../controllers/uploads-ctrl');
var Animation = require('./animation');

var itsTime = function(secret, fn) {
  fn(secret);
}


var reveal = function(object) {
  getShit(object)
  return object;
}

exports.giveMe = function(id) {
  console.log('blattman: ', id);
  reveal(id);
  return id;
}


var getShit = function(id) {

  var secret = id.toString();
  console.log('is you, Blattman? ... ', secret);
  itsTime(secret, getCanvas);

  function getCanvas(theKey) {

/*
 Get Canvas Element
 */

  console.log('This is my house ', theKey);


  var canvasContext = function() {
    document.getElementById("uploadedAnimation");
    var ctx = canvas.getContext("2d");
    return ctx;
  }
/*
 Context of the Canvas
 */
 
// console.log(ctx);
/*
 Frames Per Second of Animation, 10 is default
 */
var fps = (1000 / 10);
/*
 Define the image
 */
console.log('You\'ve changed ', theKey);

var imageCreation = function() {
  var image = new Image();
  return image;
}

/*
 Require Animation.js
 */

var a = new Animation(500, 500, 4, fps);
a.start();
var ctx = canvasContext();
var image = imageCreation();
image.src = theKey;


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

}

}