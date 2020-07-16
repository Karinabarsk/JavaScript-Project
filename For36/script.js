"use strict";

const {getRandomIntInterval} = require('../utils') // Импортируем функции из файла utils.js

// Даны целые положительные числа N и K. Найти сумму "1^K + 2^K +...+ N^K"

const N = getRandomIntInterval(1, 20)
const K = getRandomIntInterval(1, 20)

let sum = 0
for(let i = 1; i<=N ; i++){
    sum += Math.pow(i,K)
}
console.log(sum)