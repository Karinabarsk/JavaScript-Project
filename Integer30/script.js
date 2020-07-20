"use strict";

const {getRandomIntInterval} = require('../utils') // Импортируем функции из файла utils.js

//Дан номер некоторого года (целое положительное число).
//Определить соответствующий ему номер столетия, учитывая, что, к примеру, началом 20 столетия был 1901 год

const N = getRandomIntInterval(1000, 2020)

const centyry = Math.trunc(N/100 + 1)

console.log('Нам дан год: ' + N + ' номер его столетия: ' + centyry)


  
