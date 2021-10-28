const track = document.getElementById("track");
const thumbnail =document.getElementById("thumbnail");
const background =document.getElementById("background");
const trackArtist=document.getElementById("trackArtist");
const trackTitle=document.getElementById("trackTitle");
const progressBar=document.getElementById("progressBar");
const currentTime=document.getElementById("currentTime");
const durationTime=document.getElementById("durationTime");


let play=document.getElementById("play");
let pause=document.getElementById("pause");
let next=document.getElementById("nextTrack");
let prev=document.getElementById("prevTrack");

var trackIndex=0;

var tracks =["music/HARAM HARAM.mp3","music/Ghadimi - Kape Kapam.mp3","music/sport-track.mp3"];
var thumbnails=["image/images.jpeg","image/joker.jpg","image/car.jpg"];
var trackArtists = ["Artist 1", "Artist 2", "Artist 3"];
var trackTitles = ["Harm Haram", "Ghadimi", "Sport"];

let playing =true;


progressBar.addEventListener("click",changeProgressBar);
track.addEventListener("ended",nextTrack);
prev.addEventListener("click",prevTrack);
next.addEventListener("click",nextTrack);
play.addEventListener("click",pausePlay);
pause.addEventListener("click",pausePlay);


function pausePlay(){
    if(playing){
        play.style.display="none";
        pause.style.display="block";
        thumbnail.style.transform= "scale(1.25)";
        track.play();
        playing=false;
    }
    else{
        play.style.display="block";
        pause.style.display="none";
        thumbnail.style.transform="scale(1)";
        track.pause();
        playing=true;
    }
}
function nextTrack(){
    trackIndex ++;
    if(trackIndex > tracks.length -1){
        trackIndex=0;
    }
    track.src = tracks[trackIndex];
    thumbnail.src = thumbnails[trackIndex];
    background.src = thumbnails[trackIndex];
    trackArtist.textContent = trackArtists[trackIndex];
    trackTitle.textContent = trackTitles[trackIndex];
    playing=true;
    pausePlay();
}

function prevTrack() {
    trackIndex --;
    if(trackIndex<0){
        trackIndex = tracks.length -1 ;
    }
    track.src = tracks[trackIndex];
    thumbnail.src = thumbnails[trackIndex];
    background.src = thumbnails[trackIndex];
    trackArtist.textContent = trackArtists[trackIndex];
    trackTitle.textContent = trackTitles[trackIndex];
    playing=true;
    pausePlay(); 
}
function progressValue(){
    progressBar.max = track.duration;
    progressBar.value = track.currentTime;
    currentTime.textContent = formatTime(track.currentTime);
    durationTime.textContent =formatTime(track.duration);
}
setInterval(progressValue,500);

function formatTime(sec){
    let minutes = Math.floor(sec / 60);
    let seconds = Math.floor(sec - minutes * 60);
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }


function changeProgressBar(){
    track.currentTime = progressBar.value;
}



