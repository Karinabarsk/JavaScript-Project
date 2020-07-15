"use strict";

const {getRandomIntInterval, getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js

// Дано четырехзначное число. Проверить истинность высказывания: «Данное число читается одинаково слева направо и справа налево».

const A = getRandomIntInterval(1000, 9999)


if( A.toString().split('').reverse().join('') == A){
    console.log(true)
} else {
    console.log(false)
}
    

  
