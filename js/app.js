// create a string array of all the image sources 
var imgArray = new Array();
imgArray[0] = "img/flower.jpeg";
imgArray[1] = "img/iguana.jpeg";
imgArray[2] = "img/meWhenIWas6.jpeg";
imgArray[3] = "img/mountains.jpeg";
imgArray[4] = "img/smores.jpeg";
imgArray[5] = "img/turtle.jpeg";

var currentIndex = 0;

function rotateImg() {
    var img = document.getElementById("rotating-image");

    img.src = imgArray[currentIndex];
    currentIndex++;

    if (currentIndex == imgArray.length) {
        currentIndex = 0;
    }
}

setInterval(rotateImg, 1500);