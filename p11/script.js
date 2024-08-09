const videoPlayer = document.querySelector('.player__video');
const playVideo = document.querySelector('.toggle');
const videoProgress = document.querySelector('.progress__filled');
const volume = document.getElementsByName('volume')[0];
const playbackRate = document.getElementsByName('playbackRate')[0];

let isPlaying = false;

videoPlayer.addEventListener('timeupdate', e => {
  videoProgress.setAttribute("style", `flex-basis: ${(videoPlayer.currentTime / videoPlayer.duration * 100)}%;`)
})

volume.addEventListener('mousemove', e => {
  videoPlayer.volume = volume.value;
  console.log(e.currentTarget.value)
})

playVideo.addEventListener('click', e => {
  if (!isPlaying) {
    videoPlayer.play();
    isPlaying = true;
    playVideo.textContent = "❚❚"

  }else{
    videoPlayer.pause();
    isPlaying = false;
    playVideo.textContent = "►";
  }
})
