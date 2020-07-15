"use strict";

const {getRandomIntInterval, getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js

// Дано целое число "N (> 0)". Найти сумму "1 + 1/2 + 1/3 + . . . + 1/N" (вещественное число).
let N = getRandomIntInterval(1, 10)

let sum = 1 

for(let i = N; i <= 10; i++){
    sum += sum/i
}
console.log(sum)


