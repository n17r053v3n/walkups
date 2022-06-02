lineup = [
    ["PlayerOne", "One.mp3"],
    ["PlayerTwo", "Two.mp3"],
    ["PlayerThree", "Three.mp3"],
    ["PlayerFour", "Four.mp3"],
    ["PlayerFive", "Five.mp3"],
    ["PlayerSix", "Six.mp3"],
    ["PlayerSeven", "Seven.mp3"],
    ["PlayerEight", "Eight.mp3"],
    ["PlayerNine", "Nine.mp3"],
]

function addPlayers() {
    console.log("hello")
    for (const index in lineup) {
        const value = lineup[index]
        const playerName = document.querySelector("[player=\"" + (parseInt(index) + 1) + "\"]");
        playerName.innerText = value[0]
        console.log(index, playerName)
    }
}
function play(index){
    const music = new Audio('./songs/' + lineup[index - 1][1])
    music.play()
    console.log("playing?")
}
window.onload = () => {
    addPlayers();
}