function generateSquares() {
  const minCount = 10;
  const maxCount = 100;
  let count = Math.floor(Math.random() * (maxCount - minCount + 1)) + minCount;

  let container = document.getElementById("container");
  container.innerHTML = ""; // Очищаем контейнер перед генерацией новых квадратов

  for (let i = 0; i < count; i++) {
    const square = document.createElement("div");
    square.className = "square";
    square.style.backgroundColor = getRandomColor();
    container.appendChild(square);
  }
}

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.querySelector(".generate").addEventListener("click", generateSquares);
