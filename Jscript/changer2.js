var images = [["andre-benz-qz7KZgeDmjU-unsplash.jpg", "Andres Benz"],
    ["daniel-j-schwarz-fVzz6Fy4SbU-unsplash.jpg", "Daniel Schwarz"],
    ["heather-shevlin-WqcRpNq_220-unsplash.jpg", "Heather Shevlin"],
    ["jack-finnigan-00yDgACVeMA-unsplash.jpg", "Jack Finnigan"],
    ["josh-hild-_ntOGI_l8ks-unsplash.jpg", "Josh Hild"],
    ["lerone-pieters-XnBrDrAJaoo-unsplash.jpg", "Lerone Pieters"],
    ["luke-stackpoole-FA8HEWO9Vd8-unsplash.jpg", "Luke Stackpoole"],
    ["max-bender-VmX3vmBecFE-unsplash.jpg", "Max Bender"],
    ["phil-desforges-27uQQc-CmUQ-unsplash.jpg", "Phil Desforges"],
    ["sami-ullah-wJYZzsQp-0A-unsplash.jpg", "Sami Ullah"],
    ["xiang-ji-UwPDjANCoJI-unsplash.jpg", "Xiang"]];


var secs =4;
var images2 = [];

// changer.js flashed alot on first round, i figured it was due to image loading, so i preloaded images into an object.
// Reading from the object in memory  is much smoother.

for (var src in images) {
    images2[src] = new Image();
    images2[src].src = "pictures/"+images[src][0];
}

//alert(images2[0].src);


function changer() {
    window.clearTimeout();
    var k = 0;

    for (i = 0; i < images.length; i++) {

        setTimeout(function () {

            document.documentElement.style.background = "url(" + images2[k].src + ") no-repeat center center fixed";
            document.documentElement.style.backgroundSize = "95%";
            document.documentElement.style.backgroundColor = "black";
            document.documentElement.style.backgroundBlendMode = "luminosity";


            imgBox.style.opacity = "0";
            document.getElementById("imgBox").innerHTML = "<figure><img src='" + images2[k].src + "' height='800px'/><figcaption> photo by: " + images[k][1] + " from UNSPLASH.com</figcaption></figure>";

            imgBox.style.animationName = "FadeIn";
            imgBox.style.opacity = "1";

            if ((k + 1) === images.length) {
                setTimeout(function () {
                    changer()
                }, (secs * 1000))
            } else {
                k++;
            }
        }, (secs * 1000) * i);
    }
}

changer();