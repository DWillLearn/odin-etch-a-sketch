let body = document.querySelector("body");

//Function to append grid to page
const addGrid = () => {
  let gridBox = document.createElement("div");
  gridBox.classList.add("grid-box");
  body.appendChild(gridBox);
  gridBox = document.querySelector(".grid-box");
  addGridBtn(gridBox);
};

//Add button to top of the screen that generates different grid size
const addGridBtn = (container) => {
  //Create button
  let gridBtn = document.createElement("button");
  gridBtn.classList.add("generate-grid");
  gridBtn.textContent = "New Grid";
  //Append button to top of screen
  body.appendChild(gridBtn);
  //Add event listener to button
  gridBtn.addEventListener("click", () => {
    let gridSize = prompt("Enter number of squares per side");
    if (gridSize < 100) {
      //Remove grid and replace with new one
      container.innerHTML = "";
      makeGrid(gridSize);
    } else {
      //Change to something on screen later
      console.log("Error! Number too big");
    }
  });
};

//Function to create multiple squares in grid box
const makeGrid = (num) => {
  let squareNum = Math.pow(num, 2);
  for (let i = 0; i < squareNum; i++) {
    makeSquare();
  }
  hoverSquare();
};
//Function to create a singular square and add it to grid box
const makeSquare = () => {
  let gridBox = document.querySelector(".grid-box");
  let newSquare = document.createElement("div");
  newSquare.classList.add("grid-square");
  gridBox.appendChild(newSquare);
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
window.addEventListener("load", () => {
  addGrid();
  makeGrid(16);
});
