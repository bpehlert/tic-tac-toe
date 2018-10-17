// Grab button
const reset = document.querySelector("button");
// Grab table cells
const cells = document.querySelectorAll("td");
// Grab p element to display player turn
const turn = document.querySelector('p');
turn.textContent = "Player one's turn."

// Sets player turn indicator
let player = "O";

// Check each cell value and mark it
function markCell() {
  if (this.textContent === "" ) {
    if (player === "O") {
      this.textContent = "X";
      player = "X";
      turn.textContent = "Player two's turn."
    }else {
      this.textContent = "O";
      player = "O";
      turn.textContent = "Player one's turn."
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
    if (cells[winningCombos[w][0]].textContent !== ""
      && cells[winningCombos[w][0]].textContent === cells[winningCombos[w][1]].textContent
      && cells[winningCombos[w][2]].textContent) {
      alert("winner");
    };
  };
}


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
