// Grab button
const reset = document.querySelector("button");

// Grab table cells
const cells = document.querySelectorAll("td");

// Sets player turn indicator
let player = "O";

// Sets cell index for undo button
let index = "";

// Function to clear the board
reset.addEventListener("click", function(){
  cells.forEach((cell) => {
    cell.textContent= '';
  });
});

// Check each cell value and mark it
function markCell() {
  if (this.textContent === "" ) {
    if (player === "O") {
      this.textContent = "X";
      player = "X";
      console.log(this.index);
    }else {
      this.textContent = "O";
      player = "O";
      console.log(this.index);
    }
  }
};

// Add event listeners
cells.forEach((cell) => {
  cell.addEventListener("click", markCell)
});
