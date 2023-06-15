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
//Load squares on window load
window.addEventListener("load", makeGrid());
