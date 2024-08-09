const videoPlayer = document.querySelector('.player__video');
const playVideo = document.querySelector('.toggle');
const videoProgress = document.querySelector('.progress');
const videoProgressFill = document.querySelector('.progress__filled');
const playerSlider = document.querySelectorAll('.player__slider');
const buttons = document.querySelectorAll('.player__button');

let isPlaying = false;

videoPlayer.addEventListener('timeupdate', e => {
  videoProgressFill.setAttribute("style", `flex-basis: ${(videoPlayer.currentTime / videoPlayer.duration * 100)}%;`)
})

videoProgress.addEventListener('click', e => {
  const fillTo = e.offsetX / e.currentTarget.clientWidth * 100
  videoProgressFill.setAttribute("style", `flex-basis: ${fillTo}%;`)
  videoPlayer.currentTime = fillTo / 100 * videoPlayer.duration
})

playerSlider.forEach(slider => {
  slider.addEventListener('mousemove', e => {
    videoPlayer[slider.name] = slider.value;
  })
});

playVideo.addEventListener('click', e => {
  if (!isPlaying) {
    videoPlayer.play();
    playVideo.textContent = "❚❚";
    isPlaying = true;

  }else{
    videoPlayer.pause();
    playVideo.textContent = "►";
    isPlaying = false;
  }
})

buttons.forEach(btn => {
  btn.addEventListener('click', e => {
    if (btn.classList.contains('toggle'))
      return
    const skipTime = parseInt(e.currentTarget.dataset.skip, 10);
    videoPlayer.currentTime <= 10 && skipTime === -10 ? videoPlayer.currentTime = 0 : videoPlayer.currentTime = parseInt(videoPlayer.currentTime, 10) + skipTime;
  })
})
