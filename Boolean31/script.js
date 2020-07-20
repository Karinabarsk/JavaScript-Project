"use strict";

const {getRandomIntInterval} = require('../utils') // Импортируем функции из файла utils.js

// Даны целые числа a, b, c, являющиеся сторонами некоторого треугольника.
//Проверить истинность высказывания: «Треугольник со сторонами a, b, c является равнобедренным».


const a = getRandomIntInterval(10, 9999)
const b = getRandomIntInterval(10, 9999)
const c = getRandomIntInterval(10, 9999)


if( a === b || a === c || c === b){
    console.log('Треугольник равнобедренный')
} else {
    console.log('Треугольник не равнобедренный')
}
    

  
