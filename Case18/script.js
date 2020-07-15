"use strict";

const {getRandomIntInterval, getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js

// Дано целое число в диапазоне 100–999. Вывести строку-описание данного числа,
//например: 256 — «двести пятьдесят шесть», 814 — «восемьсот четырнадцать»

let A = getRandomIntInterval(100, 999)

 
switch (A / 100)
{
  case 1: console.log("сто"); 
  break;
  case 2: console.log("двести"); 
  break;
  case 3: console.log("триста"); 
  break;
  case 4: console.log("четыреста"); 
  break;
  case 5: console.log("пятьсот"); 
  break;
  case 6: console.log("шестьсот"); 
  break;
  case 7: console.log("семьсот"); 
  break;
  case 8: console.log("восемьсот"); 
  break;
  case 9: console.log("девятьсот");
  break;
}

switch ((A / 10) % 10)
{
  case 1:
    switch (A % 10)
    {
      case 0: console.log("десять"); 
      break;
      case 1: console.log("одинадцать");
      break;
      case 2: console.log("двенадцать");
      break;
      case 3: console.log("тринадцать");
      break;
      case 4: console.log("четырнадцать");
      break;
      case 5: console.log("пятнадцать");
      break;
      case 6: console.log("шестнадцать");
      break;
      case 7: console.log("семнадцать");
      break;
      case 8: console.log("восемнадцать");
      break;
      case 9: console.log("девятнадцать"); break;
    }
    break;
  case 2: console.log("двадцать"); break;
  case 3: console.log("тридцать"); break;
  case 4: console.log("сорок"); break;
  case 5: console.log("пятьдесят"); break;
  case 6: console.log("шестьдесят"); break;
  case 7: console.log("семьдесят"); break;
  case 8: console.log("восемьдесят"); break;
  case 9: console.log("девяносто"); break;
}
 
switch ((A / 10) % 10)
{
  case 0:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
    switch (A % 10)
    {
      case 1: console.log(" один");break;
      case 2: console.log(" два");break;
      case 3: console.log(" три");break;
      case 4: console.log(" четыре");break;
      case 5: console.log(" пять");break;
      case 6: console.log(" шесть");break;
      case 7: console.log(" семь");break;
      case 8: console.log(" восемь");break;
      case 9: console.log(" девять"); break;
    }
    break;
}
