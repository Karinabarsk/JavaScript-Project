"use strict";

const {getRandomIntInterval, getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js

// Дано целое число. Если оно является положительным, то прибавить к нему 1; если отрицательным, то вычесть из него 2; если нулевым, то заменить его на 10. Вывести полученное число.

let A = getRandomIntInterval(-1000, 1000)

if (A > 0) {
console.log(++A)
} else if (A<0) {
console.log(A -=2)
} else if (A == 0) {
    console.log(A=10)
}