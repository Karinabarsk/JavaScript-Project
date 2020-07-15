"use strict";

const {getRandomIntInterval, getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js

// Даны два целых числа: A, B. Проверить истинность высказывания: «Справедливы неравенства A ≥ 0 или B < −2».

const A = getRandomIntInterval(-100, 100)
const B = getRandomIntInterval(-100, 100)


if( A >= 0 || B < -2){
    console.log(true)
} else {
    console.log(false)
}
    

  
