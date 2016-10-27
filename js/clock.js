/*
 * Cirulcar Calendar Display.js
 * Matthew Juggins
 * Change log:
 * 		25/09/16 - Quick fix to day of the week
 */

$(function() {

	// Get a new date object every second and update the rotation of the clock handles
	function clockRotation() {
		setInterval(function() {
			var date = new Date();
			var seconds = date.getSeconds();
			var minutes = date.getMinutes();
			var hours = date.getHours();
			var secondsRotation = seconds * 6;
			var minutesRotation = minutes * 6;
			var hoursRotation = hours * 30 + (minutes / 2);
			$("#secondHand").css({
				'-webkit-transform': 'rotate(' + secondsRotation + 'deg)',
				'-moz-transform': 'rotate(' + secondsRotation + 'deg)',
				'-ms-transform': 'rotate(' + secondsRotation + 'deg)',
				'transform': 'rotate(' + secondsRotation + 'deg)'
			});
			$("#hourHand").css({
				'-webkit-transform': 'rotate(' + hoursRotation  + 'deg)',
				'-moz-transform': 'rotate(' + hoursRotation + 'deg)',
				'-ms-transform': 'rotate(' + hoursRotation + 'deg)',
				'transform': 'rotate(' + hoursRotation + 'deg)'
			});
			document.getElementById("digital-hour").innerHTML = convertHours(hours);
			document.getElementById("digital-minute").innerHTML = timeValueCorrection(minutes);
			document.getElementById("digital-second").innerHTML = timeValueCorrection(seconds);
		}, 1000);
	}
	// adds zero to number if single digit
	function timeValueCorrection(tc) {
			if (tc < 10) {
						return "0" + tc;
			} else {
						return tc;
			}
	}
	//converts 24 hours to 12
	function convertHours(h){
		if(!twentyfourhour){
			return ((h + 11) % 12 + 1);
		}else{
			return h;
		}
	}
	function init() {
		$('.center-preview').fadeTo(10, 1);


		// Fade in/out center dial
		setTimeout(function() {
			$(".hand-container").fadeTo(500, 1, function() {
				//console.log("Clock faded in");
			});
		}, 2000);

		// Begin clock rotation now it is visible
		clockRotation();
	}

	init();
});
