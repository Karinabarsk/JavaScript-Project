"use strict";

const {getRandomIntInterval} = require('../utils') // Импортируем функции из файла utils.js

// Дано целое число N (> 0). Если оно является степенью числа 3, то вывести TRUE, если не является — вывести FALSE.

const N = getRandomIntInterval(1, 27)

let r = 1
let s = 3

console.log(N)

while(r * s <= N)
        r *= s;
 
    if (r == N)
        console.log("true");
    else
        console.log("false");

