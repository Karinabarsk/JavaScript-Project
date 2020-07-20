"use strict";

const {getRandomIntInterval} = require('../utils') // Импортируем функции из файла utils.js

// Дано вещественное число A и целое число N (>0). Используя один цикл, найти сумму "1 + A + A^2 + A^3 + ... + A^N"

const A = getRandomIntInterval(1, 20)
const N = getRandomIntInterval(1, 20)
let sum = 1

for(let i = 1; i<=N ; i++){
    sum += Math.pow(A,i) 
}
console.log(sum)