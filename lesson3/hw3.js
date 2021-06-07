'use strict'
/**
1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
*/
let n = 100;

nextPrime:
for (let i = 2; i <= n; i++) {

    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }

    console.log(i);
}

/**
2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/
let goods_arr = [100, 220, 4360, 1.5, 67.7];

function countBasketPrice(goods_arr) {
    let goods_sum = 0;
    for (const value of goods_arr) {
        goods_sum += value;
    }
    console.log(goods_sum);
}

countBasketPrice(goods_arr);
/**
3.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for(…){// здесь пусто}
*/
for (var i = 0; i <= 9; console.log(i++)) { };

/**
4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
*/
const pyram_el = 'x';
const rows = 20;
let row_counter = 1;

while (row_counter <= rows) {
    let pyram_str = '';
    for (let i = 0; i < row_counter; i++) {
        pyram_str += pyram_el;
    }
    console.log(pyram_str);
    row_counter++;
}
