"use strict";

const {getRandomIntInterval} = require('../utils') // Импортируем функции из файла utils.js

// Дано целое число N (> 0). Используя один цикл, найти сумму "1 + 1/(1!) + 1/(2!) + 1/(3!) + ... + 1/(N!)"
//(выражение N! — N–факториал — обозначает произведение всех целых чисел от 1 до N: "N! = 1·2·...·N").
//Полученное число является приближенным значением константы e = exp(1).



const N = getRandomIntInterval(1, 20)
let sum = 0
let F = 1

for(let i = 1; i<=N ; i++){
    F *= 1/i
    sum += F 
}
console.log(sum)