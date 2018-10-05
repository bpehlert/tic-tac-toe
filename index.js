// Grab button
const reset = document.querySelector("button");

// Grab table cells
const cells = document.querySelectorAll("td");

// Function to clear the board
reset.addEventListener("click", function(){
  cells.forEach((cell) => {
    cell.textContent= '';
  });
});

// Check each cell value and mark it
function markCell() {
  this.textContent === "" ?
  this.textContent = "X" :
  this.textContent === "X" ?
  this.textContent = "O" :
  this.textContent = ""
};

// Add event listeners
cells.forEach((cell) => {
  cell.addEventListener("click", markCell)
});
