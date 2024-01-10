/*Создать механизм для безопасного добавления метаданных к
объектам книг с использованием Symbol.*/
// 2. Реализовать функции addMetadata (добавление метаданных) и getMetadata (получение метаданных).
function addMetadata(book, metaDataType, data) {
    book[metaDataType] = data;
};

function getMetadata(book, metaDataType) {
    return book[metaDataType];
};

export function usageOfSymbols() {

    //1. Создать уникальные символы для метаданных: отзывы, рейтинг, теги.

    const comment = Symbol("comment");
    const rate = Symbol("rate");
    const tag = Symbol("tag");

    //3. Создать объект книги, добавить метаданные и вывести их нa консоль.

    const book = {
        "title": "Война и мир",
        "author": "Л.Н.Толстой"
    };

    addMetadata(book, comment, "Длинная книга с длииииинными предложениями");
    console.log(getMetadata(book, comment));
}