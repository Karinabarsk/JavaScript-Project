"use strict";

const {getRandomIntInterval} = require('../utils') // Импортируем функции из файла utils.js

//С начала суток прошло N секунд (N — целое). Найти количество секунд, прошедших с начала последней минуты.

const N = 186//getRandomIntInterval(1, 86400)

const minDay = N/60
const x = Math.ceil(minDay/60*100)
console.log('количество секунд, прошедших с начала последней минуты: ' + x)


  
