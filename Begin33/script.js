"use strict";

const {getRandomIntInterval} = require('../utils') // Импортируем функции из файла utils.js


// Известно, что X кг конфет стоит A рублей. Определить, сколько стоит 1 кг и Y кг этих же конфет.
let X = 15//getRandomIntInterval(1, 100)
let A = 75//getRandomIntInterval(1, 100)
let Y = getRandomIntInterval(1, 100)

let Z = A/X

console.log('Один кг конфет стоит: ' +  Z + ' руб' + ' ,а Y конфет стоит: ' + Z*Y + ' руб')
