let div1 = document.querySelector("#Box1");
const div2 = document.querySelector("#Box2");
var div3 = document.querySelector("#Box3");
let div4 = document.querySelector("#Box4");
let div5 = document.querySelector("#key");

let colorSwap = (e) => {
  e.target.style.backgroundColor = "black";
};

document.querySelector("#Box1").addEventListener("click", colorSwap);
div2.addEventListener("click", colorSwap);
div3.addEventListener("click", colorSwap);
div4.addEventListener("click", colorSwap);
div5.addEventListener("click", colorSwap);

let createDiv = (color) => {
  let newDiv = document.createElement("div");
  document.body.appendChild(newDiv);
  newDiv.style.height = "200px";
  newDiv.style.width = "200px";
  newDiv.style.backgroundColor = color;
};

document.addEventListener("keydown", (event) => {
  if (event.key === "a") {
    div5.style.backgroundColor = "purple";
  } else if (event.key === "s") {
    div5.style.backgroundColor = "grey";
  } else if (event.key === "d") {
    div5.style.backgroundColor = "pink";
  } else if (event.key === "q") {
    createDiv("skyblue");
  } else if (event.key === "w") {
    createDiv("orange");
  } else if (event.key === "e") {
    createDiv("brown");
  }
});
