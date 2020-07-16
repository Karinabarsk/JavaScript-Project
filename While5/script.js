"use strict";

const {getRandomIntInterval} = require('../utils') // Импортируем функции из файла utils.js

// Дано целое число N (> 0), являющееся некоторой степенью числа 2. Найти целое число K — показатель этой степени.
let N = getRandomIntInterval(1, 100)
let K = 0

while (N>=2){
    ++K;
    N/=2;
}

console.log(K)


