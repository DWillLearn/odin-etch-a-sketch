const container = document.querySelector(".container");
//Function to create a singular square
const makeSquare = () => {
  let newSquare = document.createElement("div");
  newSquare.classList.add("grid-square");
  container.appendChild(newSquare);
};

//Function to create grid based on argument
const makeGrid = (num) => {
  let squareNum = Math.pow(num, 2);
  for (let i = 0; i < squareNum; i++) {
    makeSquare();
  }
  hoverSquare();
};

//Set up hover effect so div changes color when passed over and stays color
const hoverSquare = () => {
  let allSquares = Array.from(document.querySelectorAll(".grid-square"));
  allSquares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "purple";
    });
  });
};

//Add button to top of the screen that generates different grid size
const newGrid = () => {
  //Create button
  let gridBtn = document.createElement("button");
  gridBtn.classList.add("generate-grid");
  gridBtn.textContent = "New Grid";
  //Append button to top of screen
  container.appendChild(gridBtn);

  //Add event listener to button
  gridBtn.addEventListener("click", () => {
    let gridSize = prompt("Enter number of squares per side");
    if (gridSize < 100) {
    } else {
      return "Error! Number too big";
    }
  });
};

//Load squares on window load
window.addEventListener("load", () => {
  makeGrid(16);
  newGrid();
});
