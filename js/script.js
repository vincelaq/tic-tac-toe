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
// winner, null = in progress, t = tie, 1 or -1 = which winner
let winner;
