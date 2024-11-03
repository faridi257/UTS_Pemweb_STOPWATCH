let hours = 0,
  minutes = 0,
  seconds = 0;
let interval = null;
let isRunning = false;

function updateDisplay() {
  const display = document.getElementById("display");
  display.innerText =
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds);
}

function timer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

function start() {
  if (!isRunning) {
    interval = setInterval(timer, 1000);
    isRunning = true;
  }
}

function pause() {
  clearInterval(interval);
  isRunning = false;
}

function reset() {
  clearInterval(interval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  isRunning = false;
  updateDisplay();
}

updateDisplay();
