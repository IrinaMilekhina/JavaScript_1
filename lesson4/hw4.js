/**
Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

function numToStr(number) {
    if (number > 999) {
        console.log('Введенное число больше 999');
        return new NumToStr();
    }
    else
        return new NumToStr(number);
}

function NumToStr(num) {
    this.units = Math.floor(num % 10);
    this.tens = Math.floor(num / 10 % 10);
    this.hundreds = Math.floor(num / 100 % 10);
}

let num1 = numToStr(245);
console.log(num1);
let num2 = numToStr(1000);
console.log(num2);
let num3 = numToStr(34);
console.log(num3);

/**
Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
Реализуйте такие объекты.
Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/
/**
* Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, но в разных местах давал возможность вызывать разные методы.
 */
class Good {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.color = color;
    }
}
let good1 = new Good(1, 'Шапка', 2000, 'Red');
let good2 = new Good(1, 'Шарф', 3550, 'Green');
let good3 = new Good(1, 'Варежки', 1500, 'Green');
let goods_arr = [good1, good2, good3];

function countBasketPrice(goods_arr) {
    let goods_sum = 0;
    for (const value of goods_arr) {
        goods_sum += value.price;
    }
    return goods_sum;
}

console.log(countBasketPrice(goods_arr));



