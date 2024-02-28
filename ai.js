const bn1 = document.querySelector(".b1"),
  bn2 = document.querySelector(".b2"),
  bn3 = document.querySelector(".b3"),
  bn4 = document.querySelector(".b4"),
  bn5 = document.querySelector(".b5"),
  bn6 = document.querySelector(".b6"),
  bn7 = document.querySelector(".b7"),
  bn8 = document.querySelector(".b8"),
  bn9 = document.querySelector(".b9"),
  reset = document.querySelector(".reset"),
  errtxt = document.querySelector(".err-txt");

  reset.addEventListener("click", () => {
    newGame();
  });
var origBoard;
let huPlayer = "O";
let aiPlayer = "X";
  let flag = 1,
    count = 1;
const winCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
    
]
newGame();


function turnclick(square) {
    if (typeof origBoard[square.target.id] == 'number') {
        turn(square.target.id, huPlayer);
        if (!checkTie()) turn(bestSpot(), aiPlayer);
    }
    
}

function turn(squareId, player) {
    origBoard[squareId] = player;
    document.getElementById(squareId).innerHTML = player;
    let gameWon = checkWin(origBoard, player);
    if (gameWon) gameOver(gameWon)
}

function newGame() {
    bn1.addEventListener("click", turnclick, false);
    bn2.addEventListener("click", turnclick, false);
    bn3.addEventListener("click", turnclick, false);
    bn4.addEventListener("click", turnclick, false);
    bn5.addEventListener("click", turnclick, false);
    bn6.addEventListener("click", turnclick, false);
    bn7.addEventListener("click", turnclick, false);
    bn8.addEventListener("click", turnclick, false);
    bn9.addEventListener("click", turnclick, false);
    reset.addEventListener("click", newGame, false);
      bn1.innerHTML = "";
      bn2.innerHTML = "";
      bn3.innerHTML = "";
      bn4.innerHTML = "";
      bn5.innerHTML = "";
      bn6.innerHTML = "";
      bn7.innerHTML = "";
      bn8.innerHTML = "";
      bn9.innerHTML = "";
      count = 1;
      flag = 1;
      errtxt.style.display = "none";
      bn1.style.background = "transparent";
      bn2.style.background = "transparent";
      bn3.style.background = "transparent";
      bn4.style.background = "transparent";
      bn5.style.background = "transparent";
      bn6.style.background = "transparent";
      bn7.style.background = "transparent";
      bn8.style.background = "transparent";
    bn9.style.background = "transparent";
    origBoard = Array.from(Array(10).keys());
    origBoard[0] = 'E';
}

function checkWin(board, player) {
    let plays = board.reduce((a, e, i) => (e === player) ? a.concat(i) : a, []);
    let gameWon = null;
    for (let [index, win] of winCombos.entries()) {
        if (win.every(elem => plays.indexOf(elem) > -1)) {
            gameWon = { index: index, player: player };
            break;
        }
    }
    return gameWon;
}

function gameOver(gameWon) {
  for (let index of winCombos[gameWon.index]) {
    document.getElementById(index).style.background =
      gameWon.player == huPlayer ? "lightgreen" : "lightblue";
  }
  bn1.removeEventListener("click", turnclick, false);
    bn2.removeEventListener("click", turnclick, false);
    bn3.removeEventListener("click", turnclick, false);
    bn4.removeEventListener("click", turnclick, false);
    bn5.removeEventListener("click", turnclick, false);
    bn6.removeEventListener("click", turnclick, false);
    bn7.removeEventListener("click", turnclick, false);
    bn8.removeEventListener("click", turnclick, false);
    bn9.removeEventListener("click", turnclick, false);
  declareWinner(gameWon.player == huPlayer ? "You Win !!" : "You Lose !!");
}

function declareWinner(who) {
    errtxt.style.display = "block";
    errtxt.innerHTML = who;
}
function emptySquares() {
    return origBoard.filter(s=>typeof s == 'number')
}

function bestSpot() {
    return emptySquares()[0];
}

function checkTie() {
    if (emptySquares().length == 0) {

        bn1.style.background = "green";
        bn2.style.background = "green";
        bn3.style.background = "green";
        bn4.style.background = "green";
        bn5.style.background = "green";
        bn6.style.background = "green";
        bn7.style.background = "green";
        bn8.style.background = "green";
        bn9.style.background = "green";

          bn1.removeEventListener("click", turnclick, false);
          bn2.removeEventListener("click", turnclick, false);
          bn3.removeEventListener("click", turnclick, false);
          bn4.removeEventListener("click", turnclick, false);
          bn5.removeEventListener("click", turnclick, false);
          bn6.removeEventListener("click", turnclick, false);
          bn7.removeEventListener("click", turnclick, false);
          bn8.removeEventListener("click", turnclick, false);
        bn9.removeEventListener("click", turnclick, false);
        declareWinner("Tie Game!!");
        return true;
    }   
    return false;
}

