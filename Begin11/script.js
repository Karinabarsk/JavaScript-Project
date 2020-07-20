"use strict";

const {getRandomIntInterval, getRandomFloatInterval} = require('../utils') // Импортируем функции из файла utils.js

// Begin8
// Даны два ненулевых числа. Найти сумму, разность, произведение и частное их модулей.

let a = getRandomIntInterval(1, 100)
let b = getRandomIntInterval(1, 100)

/*
Не видно, какие значения были изначально, Для этого логгируйте сгенерируемые значения
console.log(a, b,)
*/


const sum = a + b
const minus = a - b
const mult = a*b
const divis = a/b

console.log(sum , minus , mult, divis) // Форматирование кода в JS, запятые примыкают к левой части - console.log(sum, minus, mult, divis)
