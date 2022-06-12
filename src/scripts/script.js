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
// @ts-ignore
function play(index) {
    const music = document.querySelector("[music=\"" + index + "\"]");
    // @ts-ignore
    if (music?.playing) {
        document.querySelector("[player=\"" + index + "\"]")?.classList.remove("playing");
        console.log("first")
        // @ts-ignore
        music?.pause();
        // @ts-ignore
        if (music.currentTime != 0) {
            try {
                // @ts-ignore
                music.currentTime = 1;
            } catch (error) {
                console.log(error)
            }

        }
    }
    else {
        document.querySelector("[player=\"" + index + "\"]")?.classList.add("playing");
        console.log("second")
        // @ts-ignore
        music?.play();
    }
    // music.pause();
    console.log('playing?');
}