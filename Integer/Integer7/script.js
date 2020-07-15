"use strict";

const {getRandomIntInterval, getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js

function getNumbersSum(num){
        
         return num.toString().split('').reduce(function(a, b) {
    
             return +a + +b;

         }
         )
    }
    console.log(getNumbersSum(25))

   //

   function getStart(num){
        
    return num.toString().split('').reduce(function(a, b) {

        return +a * +b;

    }
    )
}
console.log(getStart(25))

