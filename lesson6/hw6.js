'use strict';
/**
Продолжаем реализовывать модуль корзины:
Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы;
Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида.
*/

// ПРОДУКТ
function Product(id, name, price, color, size, text) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.color = color;
    this.size = size;
    this.text = text;
}
let good1 = new Product(1, 'Шапка', 2000, 'Blue', 54, 'Описание шапки');
let good2 = new Product(2, 'Шарф', 3550, 'Blue', 180, 'Описание шарфа');
let good3 = new Product(3, 'Варежки', 1500, 'Green', 'M', 'Описание варежек');

// КАТАЛОГ
let catalog = [];
catalog.push(good1, good2, good3);

function printCatalog(list) {
    let printProduct = document.getElementById('catalog');
    let prod_div;
    let prod_block;
    printProduct.insertAdjacentHTML('beforeend', "<ul class=header id='header'><li class=header-list><h2>Каталог товаров</h2></li><li class=header-list id='basket'><p id='basket-text'></p></li></ul>");
    prod_div = document.createElement('div');
    prod_div.className = 'main-block';
    printProduct.appendChild(prod_div);

    for (let i of catalog) {
        // собрать список фоток
        prod_block = document.createElement('div');
        prod_block.className = 'block';
        let smallsGallery = document.createElement('div');
        // пройти по списку фоток и вставить каждую
        prod_div.appendChild(prod_block);
        prod_block.insertAdjacentHTML('afterbegin', '<p>' + i.name + ' стоимостью ' + i.price + '</p>');
        prod_block.insertAdjacentHTML('beforeend', '<a href="#" data-prodId=' + i.id + ' class=buy-button>Купить</a>');
        prod_block.insertAdjacentElement('afterbegin', smallsGallery);
        prod_block.insertAdjacentHTML('afterbegin', '<img class=big-img src="img/max/' + i.id + '/1.jpg">');
    }
}


printCatalog(catalog);

//КОРЗИНА
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

//ФУНКЦИОНАЛ КНОПКИ КУПИТЬ
document.querySelectorAll('.buy-button').forEach(item => {
    item.addEventListener('click', clickBuy)
});

function clickBuy(e) {
    for (let i of catalog) {
        if (i.id == e.target.dataset.prodid) {
            basket.addOneProduct(i);
            addBasketWindow();
        }
    }
};


// БЛОК ГЕНЕРАЦИИ КОРЗИНЫ НА СТРАНИЦЕ
let mainBlock = document.getElementById('header');
let basketText;
let basketBlock;
function addBasketWindow() {
    basketText = document.querySelector('#basket-text');
    basketText.remove();
    basketBlock = document.querySelector('#basket');
    if (basket.countOfProducts() === 0) {
        basketBlock.insertAdjacentHTML('afterbegin', '<p id="basket-text">В корзине ничего нет</p>');

    }
    else {
        basketBlock.insertAdjacentHTML('beforeend', '<p id="basket-text">' + 'В козине: ' + basket.countOfProducts() + ' товаров на сумму ' + basket.totalPriceOfProducts() + ' рублей' + '</p>');
    }
    mainBlock.appendChild(basketBlock)
}

addBasketWindow()


/**
* У товара может быть несколько изображений. Нужно:
Реализовать функционал показа полноразмерных картинок товара в модальном окне;
Реализовать функционал перехода между картинками внутри модального окна.
*/

document.querySelectorAll('.big-img').forEach(item => {
    item.addEventListener('click', openImg)
});

function openImg(e) {
    // for (let i of catalog) {
    //     if (i.id == e.target.dataset.prodid) {
    //         basket.addOneProduct(i);
    //         addBasketWindow();
    //     }
    // }
    console.log('BIG IMG')
};