import { lineup } from "src/data/lineup";

/**
 * @param {string} song
 */
// function stopAll(){
//     lineup.forEach(element => {
//         element[1].stop();
//     });
// }
function play(song) {
    const music = new Audio('/src/songs/' + song);
    music.play();
    // music.pause();
    console.log('playing?');
}