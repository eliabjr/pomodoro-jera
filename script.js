// Variáveis

let isRunning = false;
let pomodoro;
let focusTime = 25;
let breakTime = 5;
let seconds = focusTime * 60;

let minutesLabel = document.getElementById("minutes");
let secondsLabel = document.getElementById("seconds");
let startBtn = document.getElementById("start-btn");
let pauseBtn = document.getElementById("pause-btn");
let resetBtn = document.getElementById("reset - btn");

// Onload

window.onload = () => {
  minutesLabel.innerHTML = focusTime;
  secondsLabel.innerHTML = "00";
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
  console.log("clicou no reset");
}

function Timer() {
  seconds--;
  minutesLabel.innerHTML = parseInt(seconds / 60);
  secondsLabel.innerHTML = parseInt(seconds % 60);
}
