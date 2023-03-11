// Variáveis

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
  setInterval(() => Timer(), 1000);
}

function pause() {
  console.log("clicou no pause");
}

function reset() {
  console.log("clicou no reset");
}

function Timer() {
  seconds--;
  console.log(seconds);
  minutesLabel.innerHTML = parseInt(seconds / 60);
  secondsLabel.innerHTML = parseInt(seconds % 60);
}
