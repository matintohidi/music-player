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
const setVolume = document.querySelector("#volume");
const volumeIcon = document.querySelector(".volume-icon");
audio.volume = 0.5;

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
  if(barLength === 100){
    pause.classList.toggle("hide");
    play.classList.toggle("hide");
  }
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

setVolume.addEventListener("input" , function() {
  audio.volume = this.value / 100;
  let volumeLength = Math.round(audio.volume * 100);
  volume.style = `background: linear-gradient(90deg, #5c87fe ${volumeLength}%, #c4c8ce 0%);`
  if (volumeLength == 0) {
    volumeIcon.classList.add('fa-volume-mute');
    volumeIcon.classList.remove('fa-volume-down');
  } else if (volumeLength > 0) {
    volumeIcon.classList.add('fa-volume-down');
    volumeIcon.classList.remove('fa-volume-mute');
  }
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
