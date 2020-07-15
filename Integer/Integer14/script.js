"use strict";

const {getRandomIntInterval, getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js

const arr = '123'
const newArr = arr.toString().split('').reverse().join('');

console.log(newArr)
  
