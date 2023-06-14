const container = document.querySelector(".container");
const makeSquare = () => {
  let newSquare = document.createElement("div");
  newSquare.classList.add("grid-square");
  container.appendChild(newSquare);
};

const makeGrid = () => {
  for (let i = 0; i < 256; i++) {
    makeSquare();
  }
};

window.addEventListener("load", makeGrid());
