"use strict";


// Дано целое число "N (> 0)". Найти сумму "1 + 1/2 + 1/3 + . . . + 1/N" (вещественное число).
let N = 2

let sum = 1 

for(let i = 2; i <= N; i++){
    sum += sum/i
}
console.log(sum)


