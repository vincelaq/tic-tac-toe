// Defines winning combinations
const winCombos = [
    // Rows
    [0,1,2],[3,4,5],[6,7,8],
    // Columns
    [0,3,6],[1,4,7],[2,5,6],
    // Diagonal
    [0,4,8],[2,4,6]
];
// Defines default variables used
let gameState;
let currentTurn;
let winner; // winner, null = in progress, t = tie, 1 or -1 = which winner
// Retrieves elements needed from the Document
const gameBoard = document.querySelector(".gameboard");
const squares = document.querySelectorAll(".grid-item");
const textBox = document.querySelector("#player-turn");

function getKeyByValue (object, value) {
    return Object.keys(object).find(key => 
        object[key] === value
    );
};
// Function to initialize
function initGame() {
    gameState = [
        null, null, null, 
        null, null, null, 
        null, null, null
    ];
    currentTurn = 1;
    winner = null;
};