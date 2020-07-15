const {getRandomIntInterval, getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js

//Даны два числа a и b. Найти их среднее арифметическое: "(a + b)/2"

const a = getRandomFloatInterval(-1000, 1000)
const b = getRandomFloatInterval(-1000, 1000)

const average = (a + b)/2
console.log("среднее арифметическое: " + average," a: " + a, " b: " + b )

// time

