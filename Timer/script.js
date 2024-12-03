const timerEl = document.querySelector(".timer");
const timeUpEl = document.querySelector(".time-up-container");

const setTimerBtn = document.querySelector(".set-timer");
const resetTimerBtn = document.querySelector(".reset-timer");
const closeBtn = document.querySelector(".close-btn");

const timerInp = document.querySelector(".timer-input");
const timeUpAudio = document.querySelector("audio");

let startingMinute = 0;
let time = startingMinute * 60;

let timerInterval;

setTimerBtn.addEventListener("click", startTimer);
resetTimerBtn.addEventListener("click", resetTimer);
closeBtn.addEventListener("click", () => {
    timeUpEl.classList.remove("active");
    timeUpAudio.pause();
});

function startTimer() {
    
    startingMinute = timerInp.value != '' ? Number(timerInp.value) : 10;
    time = startingMinute * 60;

    timerInterval = setInterval(updateTimer, 1000);
    setTimerBtn.setAttribute("disabled", true);
}

function resetTimer() {
    clearTimer();
    setTimerBtn.removeAttribute("disabled");
    updateTimer();
}

function updateTimer() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 && seconds >= 0 ? "0" + seconds : seconds;

    timerEl.textContent = `${minutes}:${seconds}`;
    time--;
    if (time < 0) {
        timeUpAudio.play();
        clearTimer();
        timeUpEl.classList.add("active");
    }
}

function clearTimer() {
    clearInterval(timerInterval);
    startingMinute = timerInp.value != "" ? Number(timerInp.value) : 10;
    time = startingMinute * 60;
}