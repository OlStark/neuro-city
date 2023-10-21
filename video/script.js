const video = document.getElementById("video");
const overlay = document.getElementById("overlay");
const minutesSpan = document.createElement("span");
const secondsSpan = document.createElement("span");
const millisecondsSpan = document.createElement("span");

overlay.appendChild(minutesSpan);
overlay.appendChild(document.createTextNode(":"));
overlay.appendChild(secondsSpan);
overlay.appendChild(document.createTextNode(":"));
overlay.appendChild(millisecondsSpan);

video.addEventListener("loadedmetadata", function () {
  minutesSpan.innerHTML = "00";
  secondsSpan.innerHTML = "00";
  millisecondsSpan.innerHTML = "000";

  overlay.addEventListener("click", function () {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

  video.addEventListener("timeupdate", function () {
    let minutes = Math.floor(video.currentTime / 60);
    let seconds = Math.floor(video.currentTime);
    let milliseconds = Math.floor(video.currentTime * 1000) % 1000;

    minutes = "0" + minutes;
    seconds = ("0" + seconds).slice(-2);
    milliseconds = ("00" + milliseconds).slice(-3);

    minutesSpan.innerHTML = minutes;
    secondsSpan.innerHTML = seconds;
    millisecondsSpan.innerHTML = milliseconds;
  });

  video.addEventListener("ended", function () {
    video.currentTime = 0;
    video.pause();
  });
});
