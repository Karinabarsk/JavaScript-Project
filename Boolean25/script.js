"use strict";

const {getRandomIntInterval, getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js

// Даны числа x, y. Проверить истинность высказывания: «Точка с координатами (x, y) лежит во второй координатной четверти».
const x = getRandomIntInterval(-1000, 9999)
const y = getRandomIntInterval(-1000, 9999)


if( x< 0 && y >0){
    console.log(true)
} else {
    console.log(false)
}
    

  
