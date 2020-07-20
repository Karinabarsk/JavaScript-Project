"use strict";

const {getRandomIntInterval} = require('../utils') // Импортируем функции из файла utils.js

// Даны целые числа a, b, c. Проверить истинность высказывания: «Существует треугольник со сторонами a, b, c».



const a = getRandomIntInterval(10, 9999)
const b = getRandomIntInterval(10, 9999)
const c = getRandomIntInterval(10, 9999)


if( (b+c)>a && (a+c)>b && (a+b)>c){
    console.log('Треугольник существует')
} else {
    console.log('Треугольник не существует')
}
    

  
