const video = document.getElementById("video");

video.ontimeupdate = function(){console.log(video.currentTime)};


document.getElementById("playIcon").addEventListener("click", function(){
    video.play();
    document.getElementById("playIcon").style.display = "none";
    document.getElementById("pauseIcon").style.display = "block";
});
document.getElementById("pauseIcon").addEventListener("click", function(){
    video.pause();
    document.getElementById("pauseIcon").style.display = "none";
    document.getElementById("playIcon").style.display = "block";
});


