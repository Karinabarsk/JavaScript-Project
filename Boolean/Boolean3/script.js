"use strict";

const {getRandomIntInterval, getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js

// Дано целое число A. Проверить истинность высказывания: «Число A является четным».

const A = getRandomIntInterval(1, 1000)

if (A%2 == 0) {
    console.log(true)
    } else {
    console.log (false)
    }

  
