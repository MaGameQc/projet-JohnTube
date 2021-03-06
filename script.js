
var Video = {
    source : document.getElementById("video"),
    timeLine : document.getElementById("timeLine"),
    videoDuration : document.getElementById("video").duration,
    playIcon : document.getElementById("playIcon"),
    pauseIcon : document.getElementById("pauseIcon"),
    fullScreenIcon : document.getElementById("fullScreenIcon"),
    volumeOnIcon : document.getElementById("volumeOn"),
    volumeOffIcon : document.getElementById("volumeOff"),
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
        this.volumeOnIcon.addEventListener("click", function(){
            Video.turnVolumeOff();
        });
        this.volumeOffIcon.addEventListener("click", function(){
            Video.turnVolumeOn();
        });
        this.fullScreenIcon.addEventListener("click", function(){
            Video.fullScreen(Video.source);
        });
        this.timeLine.addEventListener("click", function(){
            Video.setTimeLineWidthOnClick();
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

    fullScreen : function(element){
        if(element.requestFullscreen){
            element.requestFullscreen();
        } 
        else if (element.webkitRequestFullscreen){
            element.webkitRequestFullscreen();
        }
        else if (element.mozRequestFullScreen){
            element.mozRequestFullScreen();
        }
        else if (element.msRequestFullscreen){
            element.msRequestFullscreen();
        }   
    },

    turnVolumeOff : function(){
        this.volumeOnIcon.style.display = "none";
        this.volumeOffIcon.style.display = "block";
        this.source.muted = true;
    },

    turnVolumeOn : function(){
        this.volumeOnIcon.style.display = "block";
        this.volumeOffIcon.style.display = "none";
        this.source.muted = false;
    },

    setTimeLineWidthOnClick : function(){
        
            Video.timeLine.addEventListener("click", function(mouse){
                var mousePositionX = mouse.pageX;
                let timeLinePositionX = Video.timeLinePositionX();
                let timeLineWidth = Video.timeLineWidth();
                var calc = (mousePositionX - timeLinePositionX)  / timeLineWidth * 100;
            
                document.getElementById("timeLineState").style.width = calc + "%";
                var toSeconds = calc * Video.videoDuration / 100 ;

                console.log(Video.source.currentTime);
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

    whenTimeUpdates : function(){
        Video.source.ontimeupdate = function(){
            if(isNaN(Video.videoDuration)){
                Video.videoDuration = document.getElementById("video").duration;
            } else{
                Video.timeLineProgress();
                Video.timeProgress();
            }
            };
    },

    showValues : function(){
        console.log(this.source.currentTime + "     currentTime");
    
        console.log(this.videoDuration + "     Duration");
    }

};

    
Video.createListeners();
Video.whenTimeUpdates();

Video.setTimeLineWidthOnClick();

Video.showValues();






// Video.source.onloadeddata = function(){



// }





// let ProfilePictureSetter ={
//     profileContainerHeight : document.getElementById("uploader").clientHeight,
//     profileContainer : document.getElementById("uploader"),
//     profilePicture : document.getElementById("uploaderProfilePicture"),

//     set : function(){
//         this.profilePicture.style.display = "block";

//         this.profilePicture.style.height = this.profileContainerHeight + "px";
//         this.profilePicture.style.width = this.profileContainerHeight + "px";
//     },

//     resize : function(){
//         window.onresize = function(){
//             ProfilePictureSetter.set();
//             console.log("resized");
//         }
//     }
// }

// ProfilePictureSetter.set();
// ProfilePictureSetter.resize();

// let profileContainerHeight = document.getElementById("uploader").clientHeight;
// console.log(profileContainerHeight + " container height");



// let profilePicture = document.getElementById("uploaderProfilePicture");

// profilePicture.style.display = "block";

// profilePicture.style.height = profileContainerHeight + "px";
// profilePicture.style.width = profileContainerHeight + "px";

// console.log(profilePicture.style.height);


var NavBar = {
    hamburger : document.getElementById("itemHamburgerContainer"), 
    menu : document.getElementById("navBarMenuContainer"),
    line1 : document.getElementById("line1"),
    line2 : document.getElementById("line1"),
    line3 : document.getElementById("line1"),
    gitHubPc : document.getElementById("gitHubPc"),
    portfolioPc : document.getElementById("portfolioPc"),
    gitHubMobile : document.getElementsByClassName("gitHubMobile")[0],
    portfolioMobile : document.getElementsByClassName("portfolioMobile")[0],

    createListenners : function(){
        this.gitHubPc.addEventListener("click", function(){
            NavBar.redirect("https://github.com/MaGameQc/projet-JohnTube");
        });
        this.portfolioPc.addEventListener("click", function(){
            NavBar.redirect("https://magame.ca/portfolio%202021/");
        });

        this.gitHubMobile.addEventListener("click", function(){
            NavBar.redirect("https://github.com/MaGameQc/projet-JohnTube");
        });
        this.portfolioMobile.addEventListener("click", function(){
            NavBar.redirect("https://magame.ca/portfolio%202021/");
        });
    },

    redirect : function(url){
        window.location.href = url;
    },


    listenHamburgerIsClicked : function(){
        if(this.hamburger.style.display != "none"){
        this.hamburger.addEventListener("click", function(){
            if(NavBar.menu.clientHeight == 0){
                NavBar.showMenu();
                NavBar.turnHamburgerToX();
            }else{
                NavBar.turnHamburgerToNormal();
                NavBar.hideMenu();
            }
        });
    }
    },

    showMenu : function(){
        this.menu.style.display = "grid"
        this.menu.animate(
            [
                { right: "-60vw", height : "auto", opacity: "0"},
                {right: "0vh", height : "auto", opacity: "1"},
            ], {
                duration: 500,
                fill: "forwards"
            });

    },

    hideMenu : function(){
        this.menu.animate(
            [
                { height : "auto", opacity: "1"},
                {right: "-60vw", height : "0vh", opacity: "0", display: "none"}
                
            ], {
                duration: 500,
                fill: "forwards"
            });
    },

    turnHamburgerToX : () =>{
        this.line1.classList.add("line1");
        this.line2.classList.add("line2");
        this.line3.classList.add("line3");
    },

    turnHamburgerToNormal : () =>{
        this.line1.classList.remove("line1");
        this.line2.classList.remove("line2");
        this.line3.classList.remove("line3");
    }



};

NavBar.listenHamburgerIsClicked();
NavBar.createListenners();




var RecommendedVid = {
image: ["image/thumbnail/thumbnail1.jpg", "image/thumbnail/thumbnail2.jpg", "image/thumbnail/thumbnail3.jpg", "image/thumbnail/thumbnail4.jpg", "image/thumbnail/thumbnail5.jpg", "image/thumbnail/thumbnail6.jpg"],
title: ["Ca vous empêche de jouer", "Comment devenir un gamer", "Achetez nos manettes ps5 !", "Fini les microtransactions ?", "Il est où Mario Galaxy 2", "Ma Game en direct"],
uploader: ["Tommy Audet", "Tommy Audet", "Tommy Audet", "Tommy Audet", "Tommy Audet", "Tommy Audet"],
views: ["100 Vues", "200 Vues", "100 000 Vues", "100 Vues", "200 Vues", "100 000 Vues"],

append: function (){

    for(i = 0; i < this.image.length; i++){
        let recommendedVideosContainer = document.getElementById("recommendedVideosContainer");
        let recommendedVideo = makeElements("article", "recommendedVideo");
        let thumbnailContainer = makeElements("div", "thumbnailContainer");
        let thumbnail = makeElements("img", "thumbnail", RecommendedVid.image[i]);

        let recommendedTitleAndViews = makeElements("div", "recommendedTitleAndViews");
        let recommendedTitle = makeTextElements("p", "recommendedTitle", RecommendedVid.title[i]);
        let recommendedUploader = makeTextElements("p", "recommendedUploader", RecommendedVid.uploader[i]);
        let recommendedViews = makeTextElements("p", "recommendedViews", RecommendedVid.views[i]);


        
        recommendedVideosContainer.appendChild(recommendedVideo);
        recommendedVideo.appendChild(thumbnailContainer);
        thumbnailContainer.appendChild(thumbnail);


        recommendedVideo.appendChild(recommendedTitleAndViews);
        recommendedTitleAndViews.appendChild(recommendedTitle);
        recommendedTitle.appendChild(recommendedUploader);
        recommendedUploader.appendChild(recommendedViews);

    }

    function makeElements(type, classAttribute, source){
        
        let element = document.createElement(type);
        element.setAttribute("class", classAttribute);
        // console.log(element);
            if(type == "img"){
                element.src = source;
            }

            return element;
    }

    function makeTextElements(type, classAttribute, textContent){
        let text = document.createTextNode(textContent);
        let element = document.createElement(type);
        element.setAttribute("class", classAttribute);
        // console.log(element);
           element.appendChild(text);

            return element;
    }

},

};

RecommendedVid.append();


var Post = {
    mainContainer : document.getElementById("commentSectionContainer"),
    button : document.getElementById("postCommentButton"),
    buttonIsClicked : false,
    textArea : document.getElementById("textareaComment"),
    textAreaText : "",
    profilePicture : document.getElementById("userCommentProfilePic").src,
    userName : "Tommy Audet",

    getTextAreaValue : function(){
        this.textAreaText = this.textArea.value;
        this.textArea.value = "";
    },

    createListeners : function(){
        Post.button.addEventListener("click", function(){
            Post.getTextAreaValue();
                Post.setAndMakeElements();
        });
    },



    setAndMakeElements : function(){
        console.log(this.profilePicture);
        let otherCommentsContainer = makeElements("div", "otherCommentsContainer");
        let otherUsernameAndComment = makeElements("div", "otherUsernameAndComment");
        let otherCommentProfilePic = makeElements("img","otherCommentProfilePic" , this.profilePicture);

        let otherUsername = makeElements("p", "otherUsername", "", this.userName);
        let otherCommentsText = makeElements("p", "otherCommentsText", "", this.textAreaText);


        this.mainContainer.insertBefore(otherCommentsContainer, this.mainContainer.childNodes[2]);
        otherCommentsContainer.appendChild(otherCommentProfilePic);
        otherCommentsContainer.appendChild(otherUsernameAndComment);
        otherUsernameAndComment.appendChild(otherUsername);
        otherUsernameAndComment.appendChild(otherCommentsText);


        function makeElements(type, classAttribute, source, textContent){
            let element = document.createElement(type);
            element.setAttribute("class", classAttribute);
            console.log(element);
                if(type == "img"){
                    element.src = source;
                }
                if(type == "p"){
                    let textNode = document.createTextNode(textContent);
                    element.appendChild(textNode);
                }
    
                return element;
        }

        

         
        
    },
};

Post.createListeners();

var ShowComments = {
    button : document.getElementById("commentsButton"),
    buttonArrow : document.getElementById("commentsButtonArrow"),
    buttonIsClicked : false,
    userCommentsContainer : document.getElementById("userCommentsContainer"),
    otherCommentsContainer : document.querySelectorAll(".otherCommentsContainer")[0],

    createListenners : function(){
        
        this.button.addEventListener("click", function(){
            if(ShowComments.buttonIsClicked == false){
                ShowComments.show();
                ShowComments.buttonIsClicked = true;
                ShowComments.buttonArrow.classList.remove("arrowUp");
                ShowComments.buttonArrow.classList.add("arrowDown");
            } else{
                ShowComments.hide();
                ShowComments.buttonIsClicked = false;
                ShowComments.buttonArrow.classList.remove("arrowDown");
                ShowComments.buttonArrow.classList.add("arrowUp");
            }
        });
    },

    show : function(){
        this.userCommentsContainer.style.display = "grid";
        this.otherCommentsContainer.style.display = "grid";
        this.userCommentsContainer.classList.add("slideDown");
        this.otherCommentsContainer.classList.add("slideDown");

        },
    
    hide : function(){
        this.userCommentsContainer.style.display = "none";
        this.otherCommentsContainer.style.display = "none";
    }
} 

ShowComments.createListenners();