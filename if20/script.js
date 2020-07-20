"use strict";

const {getRandomIntInterval} = require('../utils') // Импортируем функции из файла utils.js

// На числовой оси расположены три точки: A, B, C. Определить,
//какая из двух последних точек (B или C) расположена ближе к A, и вывести эту точку и ее расстояние от точки A.

let A = getRandomIntInterval(1, 10) // Нет сведений о том, что точка А ~> 0
let B = getRandomIntInterval(1, 10)
let C = getRandomIntInterval(1, 10)

console.log(A, B, C)

if (B < C) {
    console.log('Точка В ближе к А, чем С, точка В равна: ' + B + ' она находится от А в расстоянии ' + (B - A))
} else if (B > C) {
    console.log('Точка C ближе к А, чем B, точка C равна: '+ C + ' она находится от А в расстоянии ' + (C - A))
} 
