"use strict";

const {getRandomIntInterval, getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js

// Даны два целых числа A и B (A < B). Вывести в порядке возрастания все целые числа, расположенные между A и B (включая сами числа A и B), а также количество N этих чисел.

let A = getRandomIntInterval(1, 100)
let B = getRandomIntInterval(1, 100)

console.log("default - ", A, B)

for(let i = A; i < B; i++ ){
    console.log(i)
}

