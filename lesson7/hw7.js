'use strict';
/**
Реализовать страницу корзины:
Добавить возможность не только смотреть состав корзины, но и редактировать его, обновляя общую стоимость или выводя сообщение «Корзина пуста».
На странице корзины:
Сделать отдельные блоки «Состав корзины», «Адрес доставки», «Комментарий»;
Сделать эти поля сворачиваемыми;
Заполнять поля по очереди, то есть давать посмотреть состав корзины, внизу которого есть кнопка «Далее». Если нажать ее, сворачивается «Состав корзины» и открывается «Адрес доставки» и так далее.

*/
const $main = document.querySelector('main');
const $prod_div = document.querySelector('#prod_div');
const $basket = document.querySelector('#basket');
const $popup = document.querySelector('#popup');
const $closePopupBtn = document.querySelector('#closePopupBtn');
const $nextSectionBtn = document.querySelector('#nextSectionBtn');
const $basketDetails = document.querySelector('#basket-details');

let currentBasketSection = 1;

let products = [];
let basket = [];

function getIDCounter(params) {
    let lastID = 1;

    return function () {
        return lastID++
    }
}

const idCounter = getIDCounter();
const basketIdCounter = getIDCounter();

// ПРОДУКТ
function Product(name, price, color, size, text, img) {
    this.id = idCounter();
    this.name = name;
    this.price = price;
    this.color = color;
    this.size = size;
    this.text = text;
    this.img = img;
}

function BasketProduct({ name, price }) {
    this.id = basketIdCounter();
    this.name = name;
    this.price = price;
}

function drawMain() {
    for (let product of products) {
        drawProductCard(product);
    }
}

function drawProductCard({ name, price, text, img, id }) {
    const html = `<div class="block">
        <h2>${name}</h2>
        <img src="${img}">
        <p>${text}</p>
        <p class="price">${price}р</p>
        <button data-id="${id}" class=button>В корзину</button>
    </div>`;

    $prod_div.insertAdjacentHTML('beforeend', html);
}

function drawBasketItem({ name, price, id }) {
    const html = `<div class="basket-block">
        <h2>${name}</h2>
        <p class="price">${price}р</p>
        <button data-id="${id}">Удалить</button>
    </div>`;

    $basketDetails.insertAdjacentHTML('beforeend', html);
}

function drawBasket() {
    $basket.textContent = '';
    if (basket.length > 0) {
        $basket.insertAdjacentHTML('beforeend', `<p>В корзине ${basket.length} товаров на ${getBasketPrice()} рублей`);
    } else {
        $basket.insertAdjacentHTML('beforeend', 'В корзине ничего нет');
    }

    $basketDetails.textContent = '';
    basket.forEach(function (product) {
        drawBasketItem(product);
    })
}

function addToBasket(id) {
    const product = products.find(function (product) {
        return product.id === id;
    });

    basket.push(new BasketProduct(product))
}

function removeFromBasket(id) {
    const productIndex = basket.findIndex(function (product) {
        return product.id === id;
    });
    basket.splice(productIndex, 1);
}

function getBasketPrice() {
    return basket.reduce(function (acc, product) {
        return acc + product.price;
    }, 0)
}

function fetchProducts() {
    products = [
        new Product('Шапка', 2000, 'Blue', 54, 'Описание шапки', 'img/1.jpg'),
        new Product('Шарф', 3550, 'Blue', 180, 'Описание шарфа', 'img/2.jpg'),
        new Product('Варежки', 1500, 'Green', 'M', 'Описание варежек', 'img/3.jpg'),
    ]
}

function showPopup() {
    $popup.style.display = 'block'
}

function hidePopup() {
    $popup.style.display = 'none'
}

function nextSection() {
    document.querySelector('#section-' + currentBasketSection).style.display = "none";
    currentBasketSection = currentBasketSection < 3 ? currentBasketSection + 1 : 1;
    document.querySelector('#section-' + currentBasketSection).style.display = "block";
}

$main.addEventListener('click', function (e) {
    addToBasket(Number(e.target.getAttribute('data-id')));
    drawBasket();
})

$basketDetails.addEventListener('click', function (e) {
    removeFromBasket(Number(e.target.getAttribute('data-id')));
    drawBasket();
})

$basket.addEventListener('click', showPopup);
$closePopupBtn.addEventListener('click', hidePopup);
$nextSectionBtn.addEventListener('click', nextSection);

fetchProducts();
drawMain();
drawBasket();

