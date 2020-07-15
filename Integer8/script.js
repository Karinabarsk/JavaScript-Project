"use strict";

const {getRandomIntInterval, getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js

//Дано двузначное число. Вывести число, полученное при перестановке цифр исходного числа.

let a = getRandomIntInterval(10, 99)


const newA = a.toString().split('').reverse().join('');

console.log(newA)