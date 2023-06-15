const container = document.querySelector(".container");
//Function to create a singular square
const makeSquare = () => {
  let newSquare = document.createElement("div");
  newSquare.classList.add("grid-square");
  container.appendChild(newSquare);
};

//Function to create 256 squares for 16x16 grid
const makeGrid = () => {
  for (let i = 0; i < 256; i++) {
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
  gridBtn.textContent = "Enter new grid size";
  //Append button to top of screen
  container.appendChild(gridBtn);
};

//Load squares on window load
window.addEventListener("load", () => {
  makeGrid();
  newGrid();
});
