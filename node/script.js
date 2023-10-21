const fs = require("fs");
const os = require("os");

// Путь до файла с текстовой строкой
const filePath = "./file1.txt";

// Считываем содержимое файла
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Переворачиваем строку
  const reversedString = data.split("").reverse().join("");

  // Путь до нового файла для записи перевернутой строки
  const newFilePath = "./file2.txt";

  // Записываем перевернутую строку в новый файл
  fs.writeFile(newFilePath, reversedString, (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log("Перевернутая строка успешно записана в новый файл.");

    // Выводим домашнюю директорию
    const homeDirectory = os.homedir();
    console.log("Домашняя директория:", homeDirectory);

    // Выводим тип операционной платформы
    const platform = os.platform();
    console.log("Тип операционной платформы:", platform);
  });
});
