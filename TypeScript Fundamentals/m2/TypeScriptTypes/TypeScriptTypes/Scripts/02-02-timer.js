var demo_02_02;
(function (demo_02_02) {
    // Basics properties
    var timerId = -1, // Basics properties
    interval = 25, // Basics properties
    ms = 0, // Basics properties
    seconds = 0, // Basics properties
    minutes = 0, // Basics properties
    startTimer = // Kick the timer off with an interval
    function () {
if(timerId === -1) {
timerId = window.setInterval('turnTimerOn()', interval);        }    }, // Basics properties
    displayTimer = // Update the screen with the timer data
    function () {
document.getElementById('milliseconds').innerHTML = ms.toString();document.getElementById('seconds').innerHTML = second.toString();document.getElementById('minutes').innerHTML = minutes.toString();    }, // Basics properties
    turnTimerOn = // Start counting
    function () {
ms += interval;if(ms >= 1000) {
ms = 0;seconds += 1;        }if(seconds >= 60) {
ms = 0;seconds = 0;minutes += 1;        }displayTimer(true);    }, // Basics properties
    pauseTimer = // Pause the timer
    function () {
window.clearInterval(timerId);timerId = -1;    }, // Basics properties
    clearTimer = // Reset the timer to 0
    function () {
pauseTimer();ms = 0;seconds = 0;minutes = 0;displayTimer();    }, // Basics properties
    init = // Bootstrap everything
    function (startButton, pauseButton, clearButton) {
document.getElementById(startButton).addEventListener("click", startTimer, false);document.getElementById(pauseButton).addEventListener("click", pauseTimer, false);document.getElementById(clearButton).addEventListener("click", clearTimer, false);displayTimer();    };
    window.onload = function () {
        init('startButton', 'pauseButton');
    };
})(demo_02_02 || (demo_02_02 = {}));
