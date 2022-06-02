//add days, hours
//console log to make sure date and time are recording, then set to a variable value
//make this populate on the screen and persist (title and time included) probably use local storage
//use local storage or another method to retain this date and time
//make timer stop when hits 0 time left (maybe flash rainbow?)
//create footer with theme options

//TIME VARIABLES
const startingMinutes = 10;
let time = startingMinutes * 60;
const countdownEl = document.getElementById('countdown');
setInterval(updateCountdown, 1000);
//BUTTON VARIABLES
var modal = document.getElementById("getStartedModal");
var button = document.getElementById("startButton");
var span = document.getElementsByClassName("close")[0];
var letsgobutton = document.getElementById("letsgo");
//DATE AND TIME VARIABLES
var eventName = document.querySelector('#event-name').value;
var eventTime = document.querySelector('#event-time').value;

//Function for time countdown
function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
}

//function for popping up modal
button.onclick = function() {
    modal.style.display = "block";
}

//close on click X
span.onclick = function() {
    modal.style.display = "none";
}

//submit and close on let's go button
letsgobutton.onclick = function () {
    console.log(eventName);
    console.log(eventTime);
    //modal.style.display = "none";
}

//close if window is selected
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function enterDateAndTime() {

}