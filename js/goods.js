const cart = {
    "1":{
        "name": "Автомобильный блок птания для ноутбку ASUS W5G00A 19V 3.42 A 5.5X2.5 ",
        "image": "./images/block.png",
        "price": 188
    },
    "2":{
        "name": "Автомобильный блок птания для ноутбку ASUS W5G00A 19V 3.42 A 5.5X2.5",
        "image": "./images/block.png",
        "price": 188
    },
    "3":{
        "name": "Автомобильный блок птания для ноутбку ASUS W5G00A 19V 3.42 A 5.5X2.5 ",
        "image": "./images/block.png",
        "price": 188
    },
    "4":{
        "name": "Автомобильный блок птания для ноутбку ASUS W5G00A 19V 3.42 A 5.5X2.5 ",
        "image": "./images/block.png",
        "price": 188
    },
    "5":{
        "name": "Автомобильный блок птания для ноутбку ASUS W5G00A 19V 3.42 A 5.5X2.5",
        "image": "./images/block.png",
        "price": 188
    },
    "6":{
        "name": "Автомобильный блок птания для ноутбку ASUS W5G00A 19V 3.42 A 5.5X2.5 ",
        "image": "./images/block.png",
        "price":188
    },
    "7": {
        "name": "Акустический кабель Dialan медь 2*0,75мм прозрачный ПВХ 1м ",
        "url": "#",
        "image": "./images/слой1.png",
        "price": 12.24
    },
    "8": {
        "name": "Акустический кабель Dialan медь 2*0,50мм прозрачный ПВХ 1м ",
        "url": "#",
        "image": "./images/слой1.png",
        "price": 12.24
    },
    "9": {
        "name": "Акустический кабель Dialan медь 2*0,25мм прозрачный ПВХ 1м ",
        "url": "#",
        "image": "./images/слой1.png",
        "price": 12.24
    }  
}

const data = {};
document.querySelector('.lazy').addEventListener('click', event => {
    if (event.target.classList.contains('to-cart')) {
        let articul = event.target.dataset['articul'];
        console.log(articul)
        if (data[articul] !== undefined) {
            data[articul]['count']++;
        }
        else {
            data[articul] = cart[articul];
            data[articul]['count'] = 1;
        }
        localStorage.setItem('cart', JSON.stringify(data));
    }
})
document.querySelector('.best_goods').addEventListener('click', event => {
    if (event.target.classList.contains('to-cart')) {
        let articul = event.target.dataset['articul'];
        console.log(articul)
        if (data[articul] !== undefined) {
            data[articul]['count']++;
        }
        else {
            data[articul] = cart[articul];
            data[articul]['count'] = 1;
        }
        localStorage.setItem('cart', JSON.stringify(data));
    }
})