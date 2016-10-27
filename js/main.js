function getBundleId(expr){
  if(expr === "phone"){
    return "com.apple.mobilephone";
  }else if(expr === "sms"){
    return "com.apple.MobileSMS";
  }else if(expr === "mail"){
    return "com.apple.mobilemail";
  }else if(expr === "safari"){
    return "com.apple.mobilesafari";
  }else if(expr === "chrome"){
    return "com.google.chrome.ios";
  }else if(expr === "firefox"){
    return "com.org.mozilla.ios.Firefox";
  }else if(expr === "dolphin"){
    return "com.dolphin.browser.iphone";
  }else if(expr === "twitter"){
    return "com.atebits.Tweetie2";
  }else if(expr === "facebook"){
    return "com.facebook.Facebook";
  }else if(expr === "youtube"){
    return "com.google.ios.youtube";
  }else if(expr === "appleMusic"){
    return "com.apple.Music";
  }else if(expr === "iheart"){
    return "com.clearchannel.iheartradio";
  }else if(expr === "spotify"){
    return "com.spotify.client";
  }else if(expr === "pandora"){
    return "com.pandora";
  }else if(expr === "appleMaps"){
    return "com.apple.Maps";
  }else if(expr === "googleMaps"){
    return "com.google.Maps";
  }else if(expr === "waze"){
    return "com.waze.iphone";
  }else if(expr === "snapchat"){
    return "com.toyopagroup.picaboo";
  }else if(expr === "mousepro"){
    return "com.rpatechnology.airmouse";
  }else if(expr === "compass"){
    return "com.apple.compass";
  }else if(expr === "contacts"){
    return "com.apple.MobileAddressBook";
  }else if(expr === "facetime"){
    return "com.apple.facetime";
  }else if(expr === "health"){
    return "com.apple.Health";
  }else if(expr === "gamecenter"){
    return "com.apple.gamecenter";
  }else if(expr === "ibooks"){
    return "com.apple.iBooks";
  }else if(expr === "itunesstore"){
    return "com.apple.MobileStore";
  }else if(expr === "news"){
    return "com.apple.news";
  }else if(expr === "notes"){
    return "com.apple.mobilenotes";
  }else if(expr === "watch"){
    return "com.apple.Bridge";
  }else if(expr === "inoreader"){
    return "com.innologica.inoreader";
  }else if(expr === "instagram"){
    return "com.burbn.instagram";
  }else if(expr === "dropbox"){
    return "com.getdropbox.Dropbox";
  }else if(expr === "prowl"){
    return "net.weks.prowl";
  }else if(expr === "whatsapp"){
    return "net.whatsapp.WhatsApp";
  }else if(expr === "google"){
    return "com.google.GoogleMobile";
  }else if(expr === "googleplaymusic"){
    return "com.google.PlayMusic";
  }
}

function getAppColor(expr){
  if(expr === "phone"){
    return "rgba(25,153,0,";
  }else if(expr === "sms"){
    return "rgba(31,174,255,";
  }else if(expr === "mail"){
    return "rgba(0,106,193,";
  }else if(expr === "safari"){
    return "rgba(37,114,235,";
  }else if(expr === "chrome"){
    return "rgba(173,16,60,";
  }else if(expr === "firefox"){
    return "rgba(254,124,34,";
  }else if(expr === "dolphin"){
    return "rgba(25,153,0,";
  }else if(expr === "twitter"){
    return "rgba(0,172,237,";
  }else if(expr === "facebook"){
    return "rgba(59,89,152,";
  }else if(expr === "youtube"){
    return "rgba(204,24,30,";
  }else if(expr === "applemusic"){
    return "rgba(255,29,119,";
  }else if(expr === "iheart"){
    return "rgba(198,0,43,";
  }else if(expr === "spotify"){
    return "rgba(132,189,0,";
  }else if(expr === "pandora"){
    return "rgba(51,102,153,";
  }else if(expr === "snapchat"){
    return "rgba(255,252,0,";
  }else if(expr === "airmouse"){
    return "rgba(0,193,63,";
  }else if(expr === "compass"){
    return "rgba(29,29,29,";
  }else if(expr === "contacts"){
    return "rgba(227,162,26,";
  }else if(expr === "facetime"){
    return "rgba(153,180,51,";
  }else if(expr === "health"){
    return "rgba(30,113,69,";
  }else if(expr === "gamecenter"){
    return "rgba(45,137,239,";
  }else if(expr === "ibooks"){
    return "rgba(255,196,13,";
  }else if(expr === "itunesstore"){
    return "rgba(255,0,151,";
  }else if(expr === "news"){
    return "rgba(185,29,71,";
  }else if(expr === "notes"){
    return "rgba(255,196,13,";
  }else if(expr === "watch"){
    return "rgba(29,29,29,";
  }else if(expr === "inoreader"){
    return "rgba(45,137,239,";
  }else if(expr === "instagram"){
    return "rgba(18,86,136,";
  }else if(expr === "dropbox"){
    return "rgba(0,126,229,";
  }else if(expr === "prowl"){
    return "rgba(0,163,0,";
  }else if(expr === "whatsapp"){
    return "rgba(77,194,71,";
  }else if(expr === "google"){
    return "rgba(221,75,57,";
  }else if(expr === "googleplaymusic"){
    return "rgba(244,82,43,";
  }
}

function getNum(n){
  if(n < 0){
    return 0;
  }else if(n >= 0 && n < 10){
    return 1;
  }else if(n >= 10 && n < 20){
    return 2;
  }else if(n >= 20 && n < 30){
    return 3;
  }else if(n >= 30 && n < 40){
    return 4;
  }else if(n >= 40 && n < 50){
    return 5;
  }else if(n >= 50 && n < 60){
    return 6;
  }else if(n >= 60 && n < 70){
    return 7;
  }else if(n >= 70 && n < 80){
    return 8;
  }else if(n >= 80 && n < 90){
    return 9;
  }else if(n >= 90 && n < 100){
    return 10;
  }else if(n >= 100){
    return 10;
  }
}

function brightnessNum(n){
  if(n >= 0 && n < .1){
    return 0;
  }else if(n >= .1 && n < .2){
    return 1;
  }else if(n >= .2 && n < .3){
    return 2;
  }else if(n >= .3 && n < .4){
    return 3;
  }else if(n >= .4 && n < .5){
    return 4;
  }else if(n >= .5 && n < .6){
    return 5;
  }else if(n >= .6 && n < .7){
    return 6;
  }else if(n >= .7 && n < .8){
    return 7;
  }else if(n >= .8 && n < .9){
    return 8;
  }else if(n >= .9 && n <= 1){
    return 9;
  }
}

//converts C to F for temperature
function celToFahr(c){
  return ((c * (9 / 5)) + 32);
}

//converts millibars to inches for air pressure
function milliConversion(m){
  return ((29.92 * m) / (1013.25))
}

//converts degrees to a cardinal point
var degToCard = function(deg){
  if (deg>11.25 && deg<33.75){
    return "NNE";
  }else if (deg>33.75 && deg<56.25){
    return "ENE";
  }else if (deg>56.25 && deg<78.75){
    return "E";
  }else if (deg>78.75 && deg<101.25){
    return "ESE";
  }else if (deg>101.25 && deg<123.75){
    return "ESE";
  }else if (deg>123.75 && deg<146.25){
    return "SE";
  }else if (deg>146.25 && deg<168.75){
    return "SSE";
  }else if (deg>168.75 && deg<191.25){
    return "S";
  }else if (deg>191.25 && deg<213.75){
    return "SSW";
  }else if (deg>213.75 && deg<236.25){
    return "SW";
  }else if (deg>236.25 && deg<258.75){
    return "WSW";
  }else if (deg>258.75 && deg<281.25){
    return "W";
  }else if (deg>281.25 && deg<303.75){
    return "WNW";
  }else if (deg>303.75 && deg<326.25){
    return "NW";
  }else if (deg>326.25 && deg<348.75){
    return "NNW";
  }else{
    return "N";
  }
}

// adds zero to number if single digit
function timeValueCorrection(tc) {
		if (tc < 10) {
					return "0" + tc;
		} else {
					return tc;
		}
}
