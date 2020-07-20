"use strict";

const {getRandomIntInterval, getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js

// Дано целое число A. Проверить истинность высказывания: «Число A является четным».

const A = getRandomIntInterval(1, 1000)
console.log(A)
if (A%2 === 0) { // Там, где нам явно не нужно преобразование типов - всегда используем эквиваленцию (===)
    console.log(true) // Форматируем код подобным образом
} else {
    console.log (false)
}

  
