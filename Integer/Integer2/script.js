"use strict";

const {getRandomIntInterval, getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js//

// Дана масса "M" в килограммах. Используя операцию деления нацело, найти количество полных тонн в ней (1 тонна = 1000 кг).

const M = getRandomIntInterval(1000, 1000000)

const Tonn = Math.floor(M/1000)

console.log(Tonn)


