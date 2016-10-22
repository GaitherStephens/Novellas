$(document).ready(function(){
  var date = new Date();
  var hours = date.getHours();
  if(hours < 5 || hours > 20){
    var myOptions = {
        noImages: 20,
        path: "images/clock/night/",
        timerInterval: 60000,
        randomise: true
    };
  }else{
    var myOptions = {
        noImages: 20,
        path: "images/clock/day/",
        timerInterval: 60000,
        randomise: true
    };
  }
  if(tilesColor !== "transparent"){
    $('#clock').easySlides(myOptions);
  }
})
