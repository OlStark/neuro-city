const button = document.querySelector(".wrapper__button");
const card = document.querySelectorAll(".card");

const handleClick = () => card.forEach((el) => el.classList.toggle("active"));

const debounce = (func, waitTime) => {
  let timeout;

  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(func, waitTime);
  };
};
button.addEventListener("click", debounce(handleClick, 1000));
