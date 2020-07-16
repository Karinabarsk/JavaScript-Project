"use strict";

const {getRandomIntInterval, getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js

// Даны два целых числа A и B (A < B). Вывести в порядке убывания все целые числа, расположенные между A и B
//(не включая числа A и B), а также количество N этих чисел.
const A = getRandomIntInterval(1, 10)
const B = getRandomIntInterval(11, 20)

for(let i = B-1; i > A; i-- ){
    console.log('Числа по убыванию: ' + i + ' количество N этих чисел: ' + (B-A-1))
}

