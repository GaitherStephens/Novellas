$(document).ready(function(){

    var myOptions = {
        noImages: 99,
        path: "images/albums/",
        timerInterval: 35000,
	      randomise: true
    };

    if(tilesColor !== "transparent"){
      $('#music').easySlides(myOptions);
    }

})
