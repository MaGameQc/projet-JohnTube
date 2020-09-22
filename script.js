
var Video = {
    source : document.getElementById("video"),
    timeLine : document.getElementById("timeLine"),
    videoDuration : document.getElementById("video").duration,
    playIcon : document.getElementById("playIcon"),
    pauseIcon : document.getElementById("pauseIcon"),
    totalViewPortWidth : function(){return document.getElementById("body").getBoundingClientRect().width},
    timeLinePositionX : function(){return document.getElementById("timeLine").getBoundingClientRect().x},
    timeLineWidth : function(){return document.getElementById("timeLine").getBoundingClientRect().width},



    createListeners : function(){
        Video.playIcon.addEventListener("click", function(){
            Video.playVideo();
        });
        Video.pauseIcon.addEventListener("click", function(){
            Video.pauseVideo();
        });
    },

    playVideo : function(){
        this.source.play();
        this.playIcon.style.display = "none";
        this.pauseIcon.style.display = "block";
    },

    pauseVideo : function(){
        this.source.pause();
        this.pauseIcon.style.display = "none";
        this.playIcon.style.display = "block";
    },

    setTimeLineWidthOnClick : function(){
            Video.timeLine.addEventListener("click", function(mouse){
                var mousePositionX = mouse.pageX;
                let timeLinePositionX = Video.timeLinePositionX();
                let timeLineWidth = Video.timeLineWidth();
                var calc = (mousePositionX - timeLinePositionX)  / timeLineWidth * 100;
            
                document.getElementById("timeLineState").style.width = calc + "%";
                var toSeconds = calc * Video.videoDuration / 100 ;

                console.log(toSeconds);
                Video.source.currentTime = toSeconds;

            });
    },

    timeLineProgress : function(){
        let calculateTimeLineWidth = (Video.source.currentTime / Video.videoDuration) * 100;
        document.getElementById("timeLineState").style.width = calculateTimeLineWidth + "%";
    },

    timeProgress : function(){
        let currentTime = this.source.currentTime;
        let minutes = Math.floor(currentTime / 60);
        let seconds = Math.floor(currentTime - minutes * 60);
        if(seconds.toString().length < 2){
            document.getElementById("time").innerHTML = "0" + minutes + ":0" + seconds;
        } else{
            document.getElementById("time").innerHTML = "0" + minutes + ":" + seconds;
        }
    },



};

Video.setTimeLineWidthOnClick();
// document.getElementById("body").addEventListener("click", function(){
//     console.log(Video.timeLinePositionX());

// });

Video.timeLine.addEventListener("click", function(){
    Video.setTimeLineWidthOnClick();
});

Video.createListeners();
Video.setTimeLineWidthOnClick();


Video.source.ontimeupdate = function(){

Video.timeLineProgress();
Video.timeProgress();

};



// Video.setTimeLineWidthOnClick();





/********************************************************************************************** */

// const video = document.getElementById("video");
// const videoDuration = video.duration;




// document.getElementById("playIcon").addEventListener("click", function(){
//     playVideo();
// });
// document.getElementById("pauseIcon").addEventListener("click", function(){
//     pauseVideo();
// });

// function playVideo(){
//     video.play();
//     document.getElementById("playIcon").style.display = "none";
//     document.getElementById("pauseIcon").style.display = "block";
// }

// function pauseVideo(){
//     video.pause();
//     document.getElementById("pauseIcon").style.display = "none";
//     document.getElementById("playIcon").style.display = "block";
// }



// document.getElementById("timeLine").addEventListener("click", function(event){
//     var totalViewPortWidth = document.getElementById("body").getBoundingClientRect().width;
//     var timeLinePositionX = document.getElementById("timeLine").getBoundingClientRect().x;
//     var timeLineWidth = document.getElementById("timeLine").getBoundingClientRect().width;

//     var mousePositionX = event.pageX;
 
//     var calc = (mousePositionX - timeLinePositionX)  / timeLineWidth * 100;

//     document.getElementById("timeLineState").style.width = calc + "%";
//     let toSeconds = calc * videoDuration / 100 ;
//     video.currentTime = toSeconds;
// });


// video.ontimeupdate = function(){
//     // console.log(videoDuration);

//     let calculateTimeLineWidth = (video.currentTime / videoDuration) * 100;
//     document.getElementById("timeLineState").style.width = calculateTimeLineWidth + "%";


// };

