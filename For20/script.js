"use strict";

const {getRandomIntInterval} = require('../utils') // Импортируем функции из файла utils.js

// Дано целое число N (> 0). Используя один цикл, найти сумму "1! + 2! + 3! + ... + N!"

const N = getRandomIntInterval(1, 20)
console.log(N)
let sum = 0
let F = 1

for(let i = 1; i<=N ; i++){
    F *= i
    sum += F 
}
console.log(sum)