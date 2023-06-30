// esto seria el ejercicio 3 .2

// let ele = document.getElementById("ele1");

// function pintar() {
//   ele.style.backgroundColor = "yellow";
// };
// ele.addEventListener("click", pintar);

//y aca el 3. 3

let ele = document.getElementById("ele1");
let higligth = (ele.style.backgroundColor = "green");
let pintar = function (color) {
  ele.style.backgroundColor = color;
};

ele.addEventListener("click", () => {
  pintar("yellow");
});
