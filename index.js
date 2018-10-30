// Grab button
const reset = document.querySelector("button");

// Grab table cells
const cells = document.querySelectorAll("td");

// Sets player turn indicator
let player = "Player one";
let played = 'Player two';

// Grab p element to display player turn
const turn = document.querySelector('p');
turn.textContent = `${player}'s turn.`



// Check each cell value and mark it
function markCell() {
  if (this.textContent === "" ) {
    if (player === "Player one") {
      this.textContent = "X";
      player = "Player two";
      played = "Player one"
      turn.textContent = `${player}'s turn.`
    }else {
      this.textContent = "O";
      player = "Player one";
      played = 'Player two'
      turn.textContent = `${player}'s turn.`
    }
  }
  checkForWinner();
};

const checkForWinner = () => {
  let winningCombos = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];
  for (var w = 0; w < winningCombos.length; w++) {
    let arr = [];
    for (var i = 0; i < 3; i++) {
      arr.push(cells[winningCombos[w][i]].textContent);
    };
    if (arr.every((v) => v === arr[0] && v !== "")) {
      alert(`${played} wins! Please reset the board.`);
    };
  };
};


// Event listener to reset button to clear the board
reset.addEventListener("click", function(){
  cells.forEach((cell) => {
    cell.textContent= '';
  });
});

// Add event listeners for each table cell
cells.forEach((cell) => {
  cell.addEventListener("click", markCell)
});
