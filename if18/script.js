"use strict";

const {getRandomIntInterval, getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js

// Даны три целых числа, одно из которых отлично от двух других, равных между собой. Определить порядковый номер числа, отличного от остальных

let A = getRandomIntInterval(1, 10)
let B = getRandomIntInterval(1, 10)
let C = getRandomIntInterval(1, 10)


if (A == B ){
    console.log('3')
} 

if (A == C) {
    console.log("2")
}

if (C == B) {
    console.log("1")
} 

