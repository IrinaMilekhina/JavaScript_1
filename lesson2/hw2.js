'use strict'
/**
 Почему код дает именно такие результаты?
 */
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 - инкремент перед переменной, поэтому сначала выполняется увеличение на единицу, затем возврат
d = b++; alert(d);           // 1 - инкремент после переменной, сначала возврат, затем увеличение на единицу
c = (2 + ++a); alert(c);      // 5 - инкремент перед, сначала к а прибавляется единица, затем выполняется сложение. 
// Т.к. а на данный момент уже равно 2 в результате выполнения первого выражения, то получаем 5.
d = (2 + b++); alert(d);      // 4 - b = 2, т.к. в выражении 2 был инкремент.
// в данном выражении инкремен указан после, поэтому сначала к b прибавляется два и выполняется возврат (результат 4), а затем прибавляется еще 1
alert(a);                    // 3 - изначально a = 1, в выражениях 1 и 3 прибавляется по единице
alert(b);                    // 3 - изначально b = 1, в выражениях 2 и 4 прибавляется по единице


/**
Чему будет равен x?
 */
var a = 2;
var x = 1 + (a *= 2);

// x = 5
// сначала выполняется выражение в скобках, в результате которого a = 4, затем сложение


/**
Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму;
Ноль можно считать положительным числом.
 */

let a;
let b;

function exercise3(a, b) {
    if (a >= 0 && b >= 0) {
        console.log(a - b);
    }
    else if (a < 0 && b < 0) {
        console.log(a * b);
    } else {
        console.log(a + b);
    }
}

exercise3(0, 3);  // 0-3=-3
exercise3(-2, -3);  // -2*-3=6
exercise3(0, -1);  // 0+-1=-1

/**
Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
*/
let a;
a = Math.floor(Math.random() * (16 - 0));
switch (a) {
    case 0:
        console.log(0);
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    case 6:
        console.log(6);
    case 7:
        console.log(7);
    case 8:
        console.log(8);
    case 9:
        console.log(9);
    case 10:
        console.log(10);
    case 11:
        console.log(11);
    case 12:
        console.log(12);
    case 13:
        console.log(13);
    case 14:
        console.log(14);
    case 15:
        console.log(15);
}

/**
Реализовать четыре основные арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
*/

function myAdd(a, b) {
    return a + b;
}

function mySub(a, b) {
    return a - b;
}

function myMul(a, b) {
    return a * b;
}

function myDiv(a, b) {
    return a / b;
}

console.log(myAdd(6, 3));
console.log(mySub(6, 3));
console.log(myMul(6, 3));
console.log(myDiv(6, 3));

/**
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 — значения аргументов, operation — строка с названием операции. В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (применить switch).
*/

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'addition': return myAdd(arg1, arg2);
        case 'subtraction': return mySub(arg1, arg2);
        case 'multiplication': return myMul(arg1, arg2);
        case 'division': return myDiv(arg1, arg2);
        default: return null;
    }
}

console.log(mathOperation(6, 3, 'subtraction'));

/**
*Сравнить null и 0. Объяснить результат.
*/

console.log(null == 0); // false
console.log(null === 0); // false
// null - это отдельный тип данных. typeof instance === "object". Специальный примитив.

/**
*С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val — заданное число, pow –— степень.
 */

function power(val, pow) {
    if (pow == 0) {
        return 1;
    } else if (pow == 1) {
        return val;
    } else {
        return val * power(val, pow - 1);
    }
}


console.log(power(2, 0));
console.log(power(2, 1));
console.log(power(2, 3));
