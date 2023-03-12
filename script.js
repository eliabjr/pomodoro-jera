// Variáveis

let isRunning = false;
let pomodoro;
let focusTime = 25;
let breakTime = 5;
let seconds = focusTime * 60;
let isBreakTime = false;
let cycleCount = 0;

let minutesLabel = document.getElementById("minutes");
let secondsLabel = document.getElementById("seconds");
let startBtn = document.getElementById("start-btn");
let pauseBtn = document.getElementById("pause-btn");
let resetBtn = document.getElementById("reset - btn");
let cycleCountLabel = document.getElementById("cycle-count");
const musicBtn = document.getElementById("music-btn");

const breakAudio = new Audio("audio/break.mp3");
const focusAudio = new Audio("audio/focus.mp3");
const music = new Audio("audio/song.mp3");

// Onload

window.onload = () => {
  updateTimer();
};

// Functions

function start() {
  if (isRunning == false) {
    isRunning = true;
    pomodoro = setInterval(() => Timer(), 1000);
    notify("Jeradoro", "Hora do Trabalho! Mantenha o foco");
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
      notify(
        "Jeradoro",
        "Seu tempo de foco acabou. É hora de fazer uma pausa."
      );
    } else {
      focusAudio.play();
      isBreakTime = false;
      seconds = focusTime * 60;
      cycleCount++;
      cycleCountLabel.innerHTML = cycleCount;

      if (cycleCount % 4 == 0) {
        breakTime = 10;
        notify(
          "Jeradoro",
          "Você completou 4 ciclos de trabalho. Seu próximo intervalo será mais longo."
        );
      } else if (
        cycleCount % 4 == 1 ||
        cycleCount % 4 == 2 ||
        cycleCount % 4 == 3
      )
        breakTime = 5;
      {
        notify(
          "Jeradoro",
          "É hora de voltar ao trabalho. Seu intervalo acabou."
        );
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

function notify(title, message) {
  if (!("Notification" in window)) {
    alert("Este navegador não suporta notificações de desktop.");
  } else if (Notification.permission === "granted") {
    new Notification(title, {
      body: message,
      icon: "img/logo.png",
    });
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        new Notification(title, {
          body: message,
          icon: "img/logo.png",
        });
      }
    });
  }
}

//Music

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
});
