const video = document.getElementById("video");

video.ontimeupdate = function(){};


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


videoDuration = video.duration;


document.getElementById("body").addEventListener("click", function(event){
    var totalViewPortWidth = document.getElementById("body").getBoundingClientRect().width;
    var timeLinePositionX = document.getElementById("timeLine").getBoundingClientRect().x;
    var timeLineWidth = document.getElementById("timeLine").getBoundingClientRect().width;
    var mousePositionX = event.pageX;
    
    var calc = (mousePositionX - timeLinePositionX)  / timeLineWidth * 100;
    console.log(calc);

    document.getElementById("timeLineState").style.width = calc + "%";
 


});


