'use strict';
/**
Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
Пустая корзина должна выводить строку «Корзина пуста»;
Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
 */

function Product(id, name, price, color, size, text) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.color = color;
    this.size = size;
    this.text = text;
}
let good1 = new Product(1, 'Шапка', 2000, 'Red', 54, 'Описание шапки');
let good2 = new Product(2, 'Шарф', 3550, 'Green', 180, 'Описание шарфа');
let good3 = new Product(3, 'Варежки', 1500, 'Green', 'M', 'Описание варежек');


function Basket() {
    this.list = {};
    this.addOneProduct = function AddProduct(product) {
        this.list[product.name] = product;
    }
    this.addSeveralProduct = function AddProduct(product) {
        for (let i of product) {
            this.list[i.name] = i;
        }
    }
    this.deleteProduct = function DeleteProduct(product) {
        delete this.list[product.name];
    }
    this.totalPriceOfProducts = function TotalPriceOfProducts() {
        let totalPrice = 0;
        for (let p in this.list) {
            totalPrice += this.list[p].price;
        }
        return totalPrice;
    }

    this.countOfProducts = function () {
        return Object.keys(this.list).length;
    }
}

let basket = new Basket();
basket.addSeveralProduct([good1, good2, good3]);
console.log(basket);

// БЛОК ГЕНЕРАЦИИ КОРЗИНЫ НА СТРАНИЦЕ
let mainBlock = document.querySelector('div');
let basketWindow;

function addBasketWindow() {
    basketWindow = document.createElement('div');

    if (basket.countOfProducts() === 0) {
        basketWindow.insertAdjacentHTML('beforeend', '<p>В корзине ничего нет<p>');

    }
    else {
        basketWindow.insertAdjacentHTML('beforeend', '<p>' + 'В козине: ' + basket.countOfProducts() + ' товаров на сумму ' + basket.totalPriceOfProducts() + ' рублей' + '<p>');
    }
    mainBlock.appendChild(basketWindow)
}

addBasketWindow()
