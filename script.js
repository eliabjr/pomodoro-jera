// Variáveis

let isRunning = false;
let pomodoro;
let focusTime = 7;
let breakTime = 5;
let seconds = focusTime * 60;

let minutesLabel = document.getElementById("minutes");
let secondsLabel = document.getElementById("seconds");
let startBtn = document.getElementById("start-btn");
let pauseBtn = document.getElementById("pause-btn");
let resetBtn = document.getElementById("reset - btn");

// Onload

window.onload = () => {
  updateTimer();
};

// Functions

function start() {
  if (isRunning == false) {
    isRunning = true;
    pomodoro = setInterval(() => Timer(), 1000);
  }
}

function pause() {
  if (isRunning == true) {
    isRunning = false;
    clearInterval(pomodoro);
  }
}

function reset() {
  isRunning = false;
  clearInterval(pomodoro);
  seconds = focusTime * 60;
  updateTimer();
}

function Timer() {
  seconds--;
  updateTimer();
}

function updateTimer() {
  let secondsDisplay = parseInt(seconds % 60);
  let minutesDisplay = parseInt(seconds / 60);

  if (secondsDisplay < 10) {
    secondsLabel.innerHTML = "0" + secondsDisplay;
  } else {
    secondsLabel.innerHTML = secondsDisplay;
  }

  if (minutesDisplay < 10) {
    minutesLabel.innerHTML = "0" + minutesDisplay;
  } else {
    minutesLabel.innerHTML = minutesDisplay;
  }
}
