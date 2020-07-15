"use strict";

const {getRandomIntInterval, getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js

// Дано целое число в диапазоне 1–7. Вывести строку — название дня недели, соответствующее данному числу (1 — «понедельник», 2 — «вторник» и т. д.)

let A = getRandomIntInterval(1, 7)


switch(A) {
    case A = 1:
        console.log('Monday');
        break;
    case A = 2:
        console.log('Tuesday');
        break;
    case A = 3:
        console.log('Wednesday');
        break;
    case A = 4:
        console.log('Thursday');
        break;
    case A = 5:
        console.log('Friday');
        break;
    case A = 6:
        console.log('Saturday');
        break;
    case A = 7:
        console.log('Sunday');
        break;
}
