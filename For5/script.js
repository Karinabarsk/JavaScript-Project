"use strict";

const {getRandomIntInterval, getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js

// Дано вещественное число — цена 1 кг конфет. Вывести стоимость 0.1, 0.2, ..., 1 кг конфет.

let count = 0; 

for( let A = 1 ; A <= 10; A++){
  count++
  console.log('Цена за ' + A/10 + ' кг' + ' ровна ' + count + ' руб' )
}