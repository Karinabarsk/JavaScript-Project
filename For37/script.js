"use strict";

const {getRandomIntInterval} = require('../utils') // Импортируем функции из файла utils.js

// Дано целое число N (> 0). Найти сумму " 1^1 + 2^2 + ... +N^N "

const N = getRandomIntInterval(1, 20)

let sum = 0
for(let i = 1; i<=N ; i++){
    sum += Math.pow(i,i)
}
console.log(sum)