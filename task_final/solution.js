// Исправьте функцию sendRequest
// Аргументы функции:
// - имя клиента
// - телефон клиента
// - объект с адресом доставки: {street, house, entrance, floor, flat}
// - список товаров в заказе
// - стоимость заказа с учетом скидок и доставки
// Как результат функции требуется вернуть JSON,
// cформированный в соответствии с правилами:
// Объект data содержит все данные
// В объекте data есть свойства:
// - client - строка, имя клиента + телефон клиента;
// - order - объект, содержащий данные о заказе:
//     - address - строка с адресом доставки, записанным человекопонятным языком (как в примере)
//     - sum - стоимость заказа с учетом скидок и доставки
// - goods: массив объектов с информацией о позициях заказа:
//     - title - название позиции
//     - count - количество в заказе
// например:
// {
//    "data": {
//      "client": "Иван +7(987)65-43-210",
//      "order": {
//        "address": "ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв 53",
//        "sum": 900
//       },
//       "goods": [
//         {
//           "title": "Пицца",
//           "count": 2
//         }
//      ]
//    }
// }

function sendRequest(name, phone, address, goods, sum) {
    
    // Объект data для возврата результата
    let data = {goods: [], order: {}};

    // Переменная countOfGoods - кол-во товаров
    let countOfGoods = goods.length;
    
    // Добавляем имя и номер клиента
    data.client = name + " " + phone;

    // Добавляем в переменную clientAddress - адрес
    let clientAddress = "ул. " + address.street + ", дом " + address.house +
    ", " + address.entrance + " подъезд, " + address.floor + " этаж, кв " + address.flat; 
    
    // В объект order передаю адрес и сумму
    data.order.address = clientAddress;    
    data.order.sum = sum;
    
    // Цикл перебирает аргумент goods который является массивом 
    for (let i = 0; i < countOfGoods; i += 1) { 
        
        // Создаем объект товар и добавлеяем title и count
        let tovar = {title: goods[i].title, count: goods[i].count};
        
        // Добавляем в конец массива data.goods
        data.goods.push(tovar);

    }

    // Преобразование объекта data в формат JSON
    let jsonData = JSON.stringify({data});

    // Возврат результата jsonData 
    return jsonData;
    
}
