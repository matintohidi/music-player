const iconMenu = document.querySelector("#icon-menu");
const menu = document.querySelector(".menu");

iconMenu.addEventListener("click", function () {
  menu.classList.toggle("active");
  menu.classList.toggle("translate");
});

let musicTime = document.querySelector(".musicTime");
let currentTime = document.querySelector(".currentTime");
const audio = document.querySelector("#audio");
const playPause = document.querySelector("#play");
const bwd = document.querySelector("#backward");
const fwd = document.querySelector("#forward");
const pause = playPause.querySelector(".btn-pause");
const play = playPause.querySelector(".btn-play");
const timerBar = document.querySelector(".progress");

playPause.addEventListener("click", () => {
  musicTime.textContent = getTime(audio.duration);

  if (audio.paused) {
    pause.classList.toggle("hide");
    play.classList.toggle("hide");
    audio.play();
  } else {
    audio.pause();
    pause.classList.toggle("hide");
    play.classList.toggle("hide");
  }

});

audio.addEventListener("timeupdate", function () {
  currentTime.textContent = getTime(audio.currentTime);

  let barLength = (audio.currentTime / audio.duration) * 100;
  timerBar.style = `background: linear-gradient(90deg, #5c87fe ${barLength}%, #c4c8ce 0%);`
  timerBar.value = barLength;
});

bwd.addEventListener("click", function () {
  audio.currentTime = audio.currentTime - 5;
});

fwd.addEventListener("click", function () {
  musicTime.textContent = getTime(audio.duration);
  audio.currentTime = audio.currentTime + 5;
});

timerBar.addEventListener("input" , function() {
    audio.currentTime = (this.value / 100) * audio.duration;
})

function getTime(time) {
  let min = Math.floor(time / 60);
  let sec = Math.floor(time - min * 60);
  let minVal;
  let secVal;

  if (min < 10) {
    minVal = "0" + min;
  } else {
    minVal = min;
  }

  if (sec < 10) {
    secVal = "0" + sec;
  } else {
    secVal = sec;
  }

  return minVal + ":" + secVal;
}