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
// Add Event Listener
gameBoard.addEventListener("click", function(event) {
    let boardElement = event.target;
    let boardIndex = getKeyByValue(squares, boardElement);
    console.log(boardElement);
    console.log(boardIndex);
    gameState[boardIndex] = currentTurn;
    console.log(currentTurn);
    console.log(gameState);
    gameRender(boardElement);
    currentTurn *= -1;
    console.log(currentTurn);
    determineWinner();
});
// Adds a game check function
function gameRender(boardElement) {
    for (let arrayElement of gameState) {
        if (arrayElement === 1) {
            boardElement.textContent = "X" ;
        } else if (arrayElement === -1) {
            boardElement.textContent = "O";
        }
    }
};
// Adds a winner check function
function determineWinner() {
    if (winner === null) {
        if (currentTurn === 1) {
            textBox.textContent = "X turn";
        } else if (currentTurn === -1) {
            textBox.textContent = "O turn";
        };
    } else if (winner === 't') {
        textBox.textContent = "Tie game!";
    } else if (winner === 1) {
        textBox.textContent = "Congrats X!";
    } else if (winner === -1) {
        textBox.textContent = "Congrats O!";
    }
};