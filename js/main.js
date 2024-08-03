const video = document.querySelector('.video'),
  playBtn = document.querySelector('.controls__play'),
  stopBtn = document.querySelector('.controls__stop'),
  progress = document.querySelector('.progress'),
  time = document.querySelector('.controls__time')

  function toggleVideoStatus() {
    if(video.paused){
        video.play()
    }
    else{
        video.pause()
    }
  }
playBtn.addEventListener('click',toggleVideoStatus)
//video = addEventListener('click',toggleVideoStatus)

function stopVideo() {
  video.currentTime = 0
  video.pause()
}
stopBtn.addEventListener('click',stopVideo)

function updateProgress() {
  progress.value = (video.currentTime/video.duration)*100;

 let minutes = Math.floor(video.currentTime / 60)
 if(minutes < 10) {
  minutes = '0'+ String(minutes)
 }

 let seconds = Math.floor(video.currentTime % 60)
 if (seconds < 10) {
  seconds = '0'+ String(seconds) 

  time.innerHTML =`${minutes}:${seconds}`

 }
}
 video.addEventListener('timeupdate',updateProgress)

function setProgress() {
  video.currentTime = (progress.value * video.duration)/100;

}
progress.addEventListener('change' ,setProgress);