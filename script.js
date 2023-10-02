let progress = document.getElementById("progress")
let song = document.getElementById("song")
let ctrlicon = document.getElementById("ctrlicon")

song.onloadedmetadata = function(){

    progress.max = song.duration
    progress.value = song.currenttime
}

function playpause(){
    if(ctrlicon.classList.contains("ri-pause-fill")){     
    song.pause()
    ctrlicon.classList.remove("ri-pause-fill")
    ctrlicon.classList.add("ri-play-fill")

}else{
    song.play()

    ctrlicon.classList.remove("ri-play-fill")
    ctrlicon.classList.add("ri-pause-fill")

}



}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;

    ctrlicon.classList.remove("ri-play-fill")
    ctrlicon.classList.add("ri-pause-fill")

}













