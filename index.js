//add days, hours
//set console.log values to a variable value
//make event title a string that populates and persists
//make time a numeric value that populates and persists
//probably use local storage
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
var eventName = document.getElementById('event-name');
var eventTime = document.getElementById('event-time');

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

//close on let's go button
letsgobutton.onclick = function () {
    console.log(eventName.value);
    console.log(eventTime.value);
    modal.style.display = "none";
}

//close if window is selected
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function enterDateAndTime() {

}