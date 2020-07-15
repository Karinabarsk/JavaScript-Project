"use strict";

const {getRandomIntInterval, getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js

// Дано вещественное число A и целое число N (>0). Используя один цикл, вывести все целые степени числа A от 1 до N.

let A = getRandomIntInterval(1, 20)
let N = getRandomIntInterval(1, 20)

let st = 1

for( A = 1; A<N; A++){
    st = N*A
}
console.log(st)