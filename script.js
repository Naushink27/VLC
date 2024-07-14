const speedUp = document.querySelector("#speedUp");
const speedDown = document.querySelector("#speedDown");
const volumeUp = document.querySelector("#volumeUp");
const volumeDown = document.querySelector("#volumeDown");

const videoBtn = document.querySelector("#videoBtn");
const videoInput = document.querySelector("#videoInput");

const videoPlayer = document.querySelector("#main");
let videoElement;
const currentTimeDisplay = document.getElementById('#current-time');


const volumeUpHandler = () => {
    // alert("Speed up was clicked");
    // const vol=videoElement.volume;
    if (videoElement.volume < 1) {
        videoElement.volume = Math.max(videoElement.volume, videoElement.volume + 0.1)
        console.log(videoElement.volume)
    } else {
        alert("can not increase volume")
    }
}
const volumeDownHandler = () => {
    if (videoElement.volume >= 0) {
        videoElement.volume = Math.min(videoElement.volume, videoElement.volume - 0.1)
        console.log(videoElement.volume)
    } else {
        alert("can not decrease volume")
    }
}
const speedUpHandler = () => {
    videoElement.playbackRate += 0.25;
    console.log(`Playback speed: ${videoElement.playbackRate}`);
}
const speedDownHandler = () => {
    if (videoElement.playbackRate > 0.25) {
        videoElement.playbackRate -= 0.25;
        console.log(`Playback speed: ${videoElement.playbackRate}`);
    }

}
const handleInput = () => {
    console.log("Input is clicked");
    // you have make it click
    videoInput.click();

}
const acceptInputHandler = (obj) => {
    const selectedVideo = obj.target.files[0];
    //  src -> base64 
    const link = URL.createObjectURL(selectedVideo);

    videoElement = document.createElement("video");
    videoElement.src = link;
    // now it is done
    videoElement.setAttribute("class", "video");
    videoPlayer.appendChild(videoElement);
     
    videoElement.play();
    videoElement.type = "video/mp4"; // Set the MIME type (video/mp4 in this example)
videoElement.controls = true;
    videoElement.volume = 70;

    // how to inc/dec the volume of a video in js 
    // how to inc/dec speed of a video in js 
}



volumeUp.addEventListener("click", volumeUpHandler);
volumeDown.addEventListener("click", volumeDownHandler);
videoBtn.addEventListener("click", handleInput);

// when file is selected
videoInput.addEventListener("change", acceptInputHandler)
speedUp.addEventListener("click", speedUpHandler);
speedDown.addEventListener("click", speedDownHandler);