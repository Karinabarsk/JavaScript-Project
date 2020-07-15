"use strict";

const {getRandomIntInterval, getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js


// Дана длина L окружности. Найти ее радиус R и площадь S круга, ограниченного этой окружностью, учитывая, что L = 2πR, S = π*R^2 . В качестве значения π использовать 3.14.

let L = getRandomIntInterval(1, 100)
let P = 3.14

const R = L/2*P
const S = P*(R*R)

console.log('Радиус равен: ' + R + ' Площадь круга ровна: ' + S)
