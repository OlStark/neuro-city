const circle = document
  .querySelector(".figures__circle")
  .addEventListener("click", (e) => {
    e.target.classList.toggle("circle-active");
  });

const tangle = document
  .querySelector(".figures__tangle")
  .addEventListener("click", (e) => {
    e.target.classList.toggle("tangle-active");
  });

const sqare = document
  .querySelector(".figures__square")
  .addEventListener("click", (e) => {
    e.target.classList.toggle("square-active");
  });

const rectangle = document
  .querySelector(".figures__rectangle")
  .addEventListener("click", (e) => {
    e.target.classList.toggle("rectangle-active");
  });

const canvas = document.getElementById("figure");
const context = canvas.getContext("2d");

// Окружность
context.beginPath();
context.arc(75, 75, 50, 0, Math.PI * 2);
context.fillStyle = "red";
context.fill();
context.closePath();

// Треугольник
context.beginPath();
context.moveTo(150, 150);
context.lineTo(100, 250);
context.lineTo(200, 250);
context.closePath();
context.fillStyle = "blue";
context.fill();

// Квадрат
context.fillStyle = "green";
context.fillRect(250, 100, 100, 100);

// Прямоугольник
context.fillStyle = "yellow";
context.fillRect(400, 100, 200, 100);
