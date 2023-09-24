let mlSec = 0;
let sec = 0;
let addText = 0;
let addIndex = 0;
let msgIndex = "";

const displayMl = document.querySelector(".js-timer");
const displaySec = document.querySelector(".js-sec");
const startBtn = document.querySelector(".start-btn");
const pinBtn = document.querySelector(".pin-btn");
const resetBtn = document.querySelector(".reset-btn");
const pinDiv = document.querySelector(".pin-div");

let intervalId;
let countUp = true;

startBtn.addEventListener("click", () => {
  if (startBtn.innerHTML === "Start") {
    clearInterval(intervalId);
    intervalId = setInterval(startTime, 10);
    startBtn.innerHTML = "Pause";
  } else if (startBtn.innerHTML === "Pause") {
    clearInterval(intervalId);
    startBtn.innerHTML = "Start";
  }
});

pinBtn.addEventListener("click", () => {
  if (addText < 10) {
    addIndex++;
    markTime();
  }
});

resetBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  startBtn.innerHTML = "Start";
  displayMl.innerHTML = ":00";
  displaySec.innerHTML = "00";
  mlSec = 0;
  sec = 0;
  countUp = false;
  pinDiv.innerHTML = "";
  addText = 0;
  addIndex = 0;
});

function startTime() {
  countUp = true;
  mlSec++;
  if (mlSec < 10) {
    displayMl.innerHTML = ":0" + mlSec;
  }
  if (mlSec > 10) {
    displayMl.innerHTML = ":" + mlSec;
  }
  if (mlSec === 99) {
    mlSec = 0;
    sec++;
  }
  if (sec <= 9) {
    displaySec.innerHTML = "0" + sec;
  }
  if (sec > 9) {
    displaySec.innerHTML = sec;
  }
}

function markTime() {
  addTextIndex();

  let milSeconds = 0;
  let seconds = 0;

  if (mlSec < 10) {
    milSeconds = "0" + mlSec;
  }
  if (mlSec > 10) {
    milSeconds = mlSec;
  }
  if (sec <= 9) {
    seconds = "0" + sec;
  }
  if (sec > 9) {
    seconds = sec;
  }
  let addMark = `<div class="add-mark"><span class="msg-index">${msgIndex}</span> <span class="time-mark">${seconds}:${milSeconds}</span></div>`;

  pinDiv.innerHTML += addMark;
  addText++;
}

function addTextIndex() {
  if (addIndex === 1) {
    msgIndex = "First";
  }
  if (addIndex === 2) {
    msgIndex = "Second";
  }
  if (addIndex === 3) {
    msgIndex = "Third";
  }
  if (addIndex === 4) {
    msgIndex = "4.";
  }
  if (addIndex === 5) {
    msgIndex = "5.";
  }
  if (addIndex === 6) {
    msgIndex = "6.";
  }
  if (addIndex === 7) {
    msgIndex = "7.";
  }
  if (addIndex === 8) {
    msgIndex = "8.";
  }
  if (addIndex === 9) {
    msgIndex = "9.";
  }
  if (addIndex === 10) {
    msgIndex = "10.";
  }

  return msgIndex;
}
