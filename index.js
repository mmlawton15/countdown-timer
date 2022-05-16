//center box div
//style div/add days, hours, minutes seconds
//add a prompt to ask for date, time and title of event upon button click
//console log to make sure it's recording, then set to a variable value
//use local storage or another method to retain this date and time
//make this populate on the screen

const startingMinutes = 10;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
}