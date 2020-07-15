"use strict";

const {getRandomIntInterval, getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js

// Дано целое число в диапазоне 20–69, определяющее возраст (в годах). Вывести строку-описание указанного возраста, обеспечив правильное согласование числа со словом «год», например:
//20 — «двадцать лет», 32 — «тридцать два года», 41 — «сорок один год».

let A = 54//getRandomIntInterval(20, 69)


switch(true) {
    case A == 20:
    case A >= 25 && A <=30:
    case A >= 35 && A <=40:
    case A >= 45 && A <=50:
    case A >= 55 && A <=60:
    case A >= 65 && A <=69:
        console.log(A + ' лет');
        break;

    case A == 21:
    case A == 31:
    case A == 41:
    case A == 51:
    case A == 61:
        console.log(A + ' год') 
        break;
    default:
       console.log(A + ' года'); 
}

