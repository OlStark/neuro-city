function validateForm() {
  // Получаем значения полей формы
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  // Удаляем предыдущие сообщения об ошибках
  const errorMessages = document.getElementsByClassName("error-message");
  for (let i = 0; i < errorMessages.length; i++) {
    errorMessages[i].style.display = "none";
  }

  // Проверяем имя
  const nameRegex = /^[A-Za-zА-Яа-я]{3,30}$/;
  if (!nameRegex.test(name)) {
    document.getElementById("nameError").style.display = "block";
    return false;
  }

  // Проверяем телефон
  const phoneRegex = /^[\+]?[0-9]{10,15}$/;
  if (!phoneRegex.test(phone)) {
    document.getElementById("phoneError").style.display = "block";
    return false;
  }

  // Проверяем пароль
  const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9]).{8,40}$/;
  if (!passwordRegex.test(password)) {
    document.getElementById("passwordError").style.display = "block";
    return false;
  }

  // Проверяем совпадение паролей
  if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").style.display = "block";
    return false;
  }

  // Все данные прошли валидацию
  return true;
}

document
  .querySelector(".submit")
  .addEventListener("click", validateForm, alert("Заявка отправлена"));
