"use strict";

const {getRandomIntInterval, getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js

//Найти значение функции "y=3x−6x−7" при данном значении "x".
const x = getRandomIntInterval(1, 1000)

const y = 3*x - 6*x - 7
console.log(y)

