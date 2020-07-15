"use strict";

const {getRandomIntInterval, getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js

// Даны три числа. Найти наименьшее из них.

let A = getRandomIntInterval(-100, 100)
let B = getRandomIntInterval(-100, 100)
let C = getRandomIntInterval(-100, 100)


if (A < B && A < C) {
    console.log("A меньше всех")
} 

if (B < A && B < C) {
    console.log("B меньше всех")
} 


if (C < A && C < B ) {
    console.log("C меньше всех")
} 

