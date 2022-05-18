//style div/add days, hours, milliseconds
//add a prompt to ask for date, time and title of event upon button click
//console log to make sure it's recording, then set to a variable value
//use local storage or another method to retain this date and time
//make this populate on the screen

//TIME VARIABLES
const startingMinutes = 10;
let time = startingMinutes * 60;
const countdownEl = document.getElementById('countdown');
setInterval(updateCountdown, 1000);
//BUTTON VARIABLES
var modal = document.getElementById("getStartedModal");
var button = document.getElementById("startButton");
var span = document.getElementsByClassName("close")[0];

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

//close on click
span.onclick = function() {
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