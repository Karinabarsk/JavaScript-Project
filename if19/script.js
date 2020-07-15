"use strict";

const {getRandomIntInterval, getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js

// Даны четыре целых числа, одно из которых отлично от трех других, равных между собой. Определить порядковый номер числа, отличного от остальных.

let A = 10//getRandomIntInterval(-1000, 1000)
let B = 10//getRandomIntInterval(-1000, 1000)
let C = 4//getRandomIntInterval(-1000, 1000)
let D = 10//getRandomIntInterval(-1000, 1000)

if (A == B && A == C) {
console.log('Порядковый номер числа, отличного от остальных: 4')
} else if (A == B && A == D) {
console.log('Порядковый номер числа, отличного от остальных: 3')
}  else if (A == C && A == D) {
    console.log('Порядковый номер числа, отличного от остальных: 2')
}  else if (C == B && C == D) {
    console.log('Порядковый номер числа, отличного от остальных: 1')
}