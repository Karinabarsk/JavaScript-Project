"use strict";

const {getRandomIntInterval} = require('../utils') // Импортируем функции из файла utils.js

// Дано целое число N (> 0). Найти "N! = 1·2·...·N" (N–факториал).

let N = getRandomIntInterval(1, 50)

let sum = 1

for(let i = 1; i <= N; i++ ){
    sum *=i
}

console.log(N)
console.log(sum)