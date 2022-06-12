// function stopAll(){
//     lineup.forEach(element => {
//         element[1].stop();
//     });
// }
Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function () {
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
})
Object.defineProperty(HTMLMediaElement.prototype, 'playingOrPaused', {
    get: function () {
        return !!(this.currentTime > 0 && !this.ended && this.readyState > 2);
    }
})
let currentSong = 0
function stopAll() {
    document.querySelectorAll("[player]").forEach(element => {
        if (element.classList.contains("playing")) {
            element.classList.remove("playing");
            const oldMusic = document.querySelector("[music=\"" + (element.getAttribute("player")) + "\"]");
            // @ts-ignore
            oldMusic?.pause()
            // @ts-ignore
            oldMusic.currentTime = 0;
        }
    });
}
// @ts-ignore
function play(index) {
    const music = document.querySelector("[music=\"" + index + "\"]");
    // @ts-ignore
    if (music?.playingOrPaused) {
        document.querySelector("[player=\"" + index + "\"]")?.classList.remove("playing");
        console.log("first")
        // @ts-ignore
        music?.pause();
        // @ts-ignore
        if (music.currentTime != 0) {
            try {
                // @ts-ignore
                music.currentTime = 0;
            } catch (error) {
                console.log(error)
            }

        }
    }
    else {
        stopAll();
        document.querySelector("[player=\"" + index + "\"]")?.classList.add("playing");
        console.log("second")
        // @ts-ignore
        music?.play();
        currentSong = index;
    }
    // music.pause();
    console.log('playing?');
}
function skipBackward() {
    console.log(currentSong);
    currentSong -= 1;
    console.log(currentSong);
    if (currentSong < 0) {
        currentSong = 8;
        console.log(currentSong);
    }
    play(currentSong);
}
function skipForward() {
    console.log(currentSong);
    currentSong += 1;
    console.log(currentSong);
    if (currentSong > 8) {
        currentSong = 0;
        console.log(currentSong);
    }
    play(currentSong);
}
function justPause() {
    const music = document.querySelector("[music=\"" + currentSong + "\"]");
    // @ts-ignore
    if (music.playing) {
        // @ts-ignore
        music?.pause();
        document.getElementById("general-play")?.classList.add("visible");
        document.getElementById("general-pause")?.classList.remove("visible");
    }
    else {
        const playing = document.querySelector("[player=\"" + currentSong + "\"]");
        if (!playing?.classList.contains("playing")) {
            playing?.classList.add("playing")
        }
        // @ts-ignore
        music.play();
        document.getElementById("general-play")?.classList.remove("visible");
        document.getElementById("general-pause")?.classList.add("visible");
    }
}