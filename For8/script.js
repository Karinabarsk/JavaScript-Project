"use strict";

const {getRandomIntInterval, getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js

// Даны два целых числа A и B (A < B). Найти произведение всех целых чисел от A до B включительно.
let A = getRandomIntInterval(1, 10)
let B = getRandomIntInterval(1, 10)

let mult = 1 

for(let i = A; i <= B; i++){
    mult = mult*i // mult * i
}
console.log(mult)


