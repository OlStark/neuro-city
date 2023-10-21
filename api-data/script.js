const url = "https://reqres.in/api/users";

async function getUsers(page) {
  const response = await fetch(url, page ? +`?page=${page}` : null);
  console.log(page);
  if (!response.ok) {
    const message = "Error" + response.status;
    console.log(message);
    throw Error(message);
  }
  const data = await response.json();

  return data;
}

async function main() {
  const usersData = await getUsers();
  console.log(usersData);
  const start = 1;
  const end = usersData.total_pages;

  function displayList(arrData) {
    let posts = document.querySelector(".posts");

    arrData.data.forEach((el) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <h4>
          ${el.first_name}${el.last_name}
        </h4>
        <img src="${el.avatar}" alt="photo" />
        <a>${el.email}</a>`;
      posts.appendChild(card);
    });
  }

  function displayPaginate() {
    let paginate = document.querySelector(".pagination");
    let pagButtons = document.createElement("div");
    pagButtons.classList.add("pagination__buttons");

    for (let i = start; i <= end; i++) {
      let pagButton = displayPaginationBtn(i);
      pagButtons.appendChild(pagButton);
    }
    paginate.appendChild(pagButtons);
  }

  function displayPaginationBtn(page) {
    let pagButton = document.createElement("button");
    pagButton.classList.add("pagination__button");
    pagButton.innerText = page;
    pagButton.addEventListener("click", () => {
      getUsers(page);
    });
    return pagButton;
  }
  displayList(usersData);
  displayPaginate(usersData);
}
getUsers();

main();
