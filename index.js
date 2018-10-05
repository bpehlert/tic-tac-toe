// Grab button
const reset = document.querySelector("button");

// Grab table cells
const cells = document.querySelectorAll("td");

// Function to clear the board
reset.addEventListener("click", function(){
  cells.forEach((cell) => {
    cell.innerText= '';
  });
});

// Check each cell value and mark it
function markCell() {
  this.innerText === "" ?
  this.innerText = "X" :
  this.innerText === "X" ?
  this.innerText = "O" :
  this.innerText = ""
};

// Add event listeners
cells.forEach((cell) => {
  cell.addEventListener("click", markCell)
});
