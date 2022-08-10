// all the variable


export let GAME = { //export letting game variable to use in other files‚
    X_CLASS: 'x',
    Y_CLASS: 'y',
    turn: undefined,
    selectedProfile:document.querySelectorAll(".start-game .img .id"),

    blockElements:document.querySelectorAll('[data-cell]'),
    boardElements:document.getElementById("board"),
    startBtn:document.getElementById("startBtn"),
    startWindow:document.querySelector(".start-game")
}