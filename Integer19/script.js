"use strict";

const {getRandomIntInterval, getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js

//С начала суток прошло N секунд (N — целое). Найти количество полных минут, прошедших с начала суток.

const N = 61//getRandomIntInterval(1, 86400)

const minDay = Math.round(N/60)

console.log(minDay)

const i
  
