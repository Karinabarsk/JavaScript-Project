"use strict";

const {getRandomIntInterval, getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js

// Дан размер файла в байтах. Используя операцию деления нацело, найти количество полных килобайтов, которые занимает данный файл (1 килобайт = 1024 байта).

const Byte = getRandomIntInterval(1000, 1000000)

const Fale = Math.floor(Byte/1024)

console.log(Fale)
