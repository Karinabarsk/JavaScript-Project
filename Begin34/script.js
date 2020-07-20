"use strict";

const {getRandomIntInterval} = require('../utils') // Импортируем функции из файла utils.js


// Известно, что X кг шоколадных конфет стоит A рублей, а Y кг ирисок стоит B рублей. Определить, сколько стоит 1 кг шоколадных конфет, 1 кг ирисок,
// а также во сколько раз шоколадные конфеты дороже ирисок.
let X = 15//getRandomIntInterval(1, 100)
let A = 75//getRandomIntInterval(1, 100)
let Y = 20//getRandomIntInterval(1, 100)
let B = 500//getRandomIntInterval(1, 100)

let Z = A/X
let N = B/Y

console.log('Один кг ирисок стоит: ' +  Z + ' руб' + ' ,а один кг шоколадных стоит: ' + N + ' руб')

if(N>Z){
    console.log('Шоколадные конфеты дороже ирисок в ' + N/Z + ' раз')
} else {
    console.log('Шоколадные дешевле')
}
