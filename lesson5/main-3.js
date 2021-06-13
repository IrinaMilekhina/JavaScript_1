'use strict';
/**
* Сделать так, чтобы товары в каталоге выводились при помощи JS:
Создать массив товаров (сущность Product);
При загрузке страницы на базе данного массива генерировать вывод из него. HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS.
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


let catalog = [];
catalog.push(good1, good2, good3);

function printCatalog(list) {
    let printProduct = document.getElementById('catalog');
    let prod;
    printProduct.insertAdjacentHTML('beforeend', '<h2>Каталог товаров<h2>');

    for (let i of catalog) {
        prod = document.createElement('p');
        prod.innerText = i.name + ' стоимостью ' + i.price;
        printProduct.appendChild(prod);
    }

}

printCatalog(catalog);