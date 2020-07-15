"use strict";

const {getRandomIntInterval, getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js

// Даны два целых числа: A, B. Проверить истинность высказывания: «Каждое из чисел A и B нечетное».

const A = getRandomIntInterval(1, 100)
const B = getRandomIntInterval(1, 100)

if (A%2 == 0 && B%2 == 0 ) {
    console.log(false)
} else {
    console.log(true)
}
    

  
