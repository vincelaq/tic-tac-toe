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
const textBox = document.getElementById("player-turn");
const reset = document.getElementById("reset");
const square = document.querySelectorAll(".grid-item");
const win = document.getElementById("winner");

// Function to initialize
function initGame() {
    gameState = [
        null, null, null, 
        null, null, null, 
        null, null, null
    ];
    currentTurn = 1;
    winner = null;
    win.textContent = "";
    gameRender();
    displayTurn();
};
// Add Event Listener
gameBoard.addEventListener("click", function(event) {
    if (!winner) {
        let targetIndex = getKeyByValue(square,event.target);
        if (gameState[targetIndex] === null) {
            gameState[targetIndex] = currentTurn;
        } else {
            return alert("That space is already taken! Choose another space.");
        };
        gameRender();
        checkWinner();
        renderMessage();
        currentTurn *= -1;
        displayTurn();
    }
});
// Add reset button
reset.addEventListener("click", initGame);
// Adds a game check function
function gameRender() {
    gameState.forEach(function(stateValue, stateIndex) {
        let element = square[stateIndex];
        setMarker(element, stateValue);
    })
};
//Adds function that sets a marker for an element
function setMarker (element, stateValue) {
    if (stateValue === 1) {
        element.textContent = "X";
    } else if (stateValue === -1) {
        element.textContent = "O"
    } else {
        element.textContent = "";
    }
};
// Adds a winner check function
function checkWinner() {
    if (!gameState.includes(null)) {
        winner = 't';
    }
    for (let array of winCombos) {
        let sum = 0;
        for (let index of array) {
            sum += gameState[index];
        }
        if (sum === 3) {
            winner = 1;
        }
        if (sum === -3) {
            winner = -1;
        }
    }
};
// Adds a winner message
function renderMessage () {
    if (winner === 1) {
        win.textContent= "Player X has won!";
    }
    if (winner === -1) {
        win.textContent= "Player O has won!";;
    }
    if (winner === 't') {
        win.textContent= "It's a tie!"; 
    }
};
// Adds get key by object value
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
};
function displayTurn () {
    if (currentTurn === 1) {
        textBox.textContent = "Player X Turn";
    } else if (currentTurn === -1) {
        textBox.textContent = "Player O Turn"
    }
}

initGame();