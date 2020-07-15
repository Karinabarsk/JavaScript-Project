"use strict";

const {getRandomIntInterval, getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js

// Даны два целых числа: A, B. Проверить истинность высказывания: «Справедливы неравенства A > 2 и B ≤ 3»

const A = getRandomIntInterval(1, 100)
const B = getRandomIntInterval(1, 100)

if (A>2 && B <= 3 ) {
    console.log(true)
} else {
    console.log(false)
}
    

  
