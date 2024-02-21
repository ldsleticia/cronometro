const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const continueBtn = document.getElementById("continue");

const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const milisecondsEl = document.getElementById("miliseconds");

let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let isPaused = false;

startBtn.addEventListener("click", startCounter);
pauseBtn.addEventListener("click", pauseCounter);
continueBtn.addEventListener("click", continueCounter);
resetBtn.addEventListener("click", resetCounter);

function startCounter() {
  interval = setInterval(() => {
    if (!isPaused) {
      miliseconds += 10;
      if (miliseconds === 1000) {
        seconds++;
        miliseconds = 0;
      }
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }

      minutesEl.textContent = formatTime(minutes);
      secondsEl.textContent = formatTime(seconds);
      milisecondsEl.textContent = formatMilliseconds(miliseconds);
    }
  }, 10);

  startBtn.style.display = "none";
  continueBtn.style.display = "none";
  pauseBtn.style.display = "block";
  resetBtn.style.display = "block";
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
  return time < 100 ? time.toString().padStart(3, "0") : time;
}

function pauseCounter() {
  isPaused = true;
  pauseBtn.style.display = "none";
  continueBtn.style.display = "block";
}

function continueCounter() {
  isPaused = false;
  pauseBtn.style.display = "block";
  continueBtn.style.display = "none";
}

function resetCounter() {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  miliseconds = 0;

  minutesEl.textContent = "00";
  secondsEl.textContent = "00";
  milisecondsEl.textContent = "000";

  startBtn.style.display = "block";
  continueBtn.style.display = "none";
  pauseBtn.style.display = "none";
}
