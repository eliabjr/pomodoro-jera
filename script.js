// Variáveis

let isRunning = false;
let pomodoro;
let focusTime = 0.1;
let breakTime = 0.2;
let seconds = focusTime * 60;
let isBreakTime = false;
let cycleCount = 0;

let minutesLabel = document.getElementById("minutes");
let secondsLabel = document.getElementById("seconds");
let startBtn = document.getElementById("start-btn");
let pauseBtn = document.getElementById("pause-btn");
let resetBtn = document.getElementById("reset - btn");
let cycleCountLabel = document.getElementById("cycle-count");

const breakAudio = new Audio("break.mp3");
const focusAudio = new Audio("focus.mp3");

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
  cycleCount = 0;
  breakTime = 5;
  cycleCountLabel.innerHTML = cycleCount;
}

function Timer() {
  seconds--;
  if (seconds == 0) {
    if (isBreakTime == false) {
      breakAudio.play();
      isBreakTime = true;
      seconds = breakTime * 60;
    } else {
      focusAudio.play();
      isBreakTime = false;
      seconds = focusTime * 60;
      cycleCount++;
      cycleCountLabel.innerHTML = cycleCount;

      if (cycleCount == 4) {
        breakTime = 10;
        cycleCount = 0;
      }
    }
  }

  updateTimer();
}

function setTimes() {
  focusTime = parseInt(document.getElementById("input-focus-time").value);
  seconds = focusTime * 60;
  updateTimer();
  start();
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
