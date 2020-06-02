$(".lazy").slick({
    lazyLoad: 'ondemand',
    infinite: true
});
$(".regular").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
});
function show(state) {
    document.querySelector('.window').style.display = state;
    document.querySelector('.gray_2').style.display = state;
}
function show_come(state) {
    document.querySelector('.window_come_in').style.display = state;
    document.querySelector('.gray_1').style.display = state;
}




let polosa = document.querySelector('.polosa');
let left = 0;



if ($(window).width() > 1001 && $(window).width() < 1366) {
    function sliderLeft() {
        left = left - 220;
        if (left < -221) {
            left = 0;
        }
        polosa.style.left = left + "px";
    }
    function sliderRight() {
        left = left + 210;
        if (left > 0) {
            left = 0;
        }
        polosa.style.left = left + "px";
    }
} else if ($(window).width() > 700 && $(window).width() < 1000) {
    function sliderLeft() {
        left = left - 220;
        if (left < -441) {
            left = 0;
        }
        polosa.style.left = left + "px";
    }
    function sliderRight() {
        left = left + 210;
        if (left > 0) {
            left = 0;
        }
        polosa.style.left = left + "px";
    }
} else if ($(window).width() < 700) {
    function sliderLeft() {
        left = left - 220;
        if (left < -1011) {
            left = 0;
        }
        polosa.style.left = left + "px";
    }
    function sliderRight() {
        left = left + 210;
        if (left > 0) {
            left = 0;
        }
        polosa.style.left = left + "px";
    }
} else {
    function sliderLeft() {
        left = left - 210;
        if (left < -211) {
            left = 0;
        }
        polosa.style.left = left + "px";
    }
    function sliderRight() {
        left = left + 210;
        if (left > 0) {
            left = 0;
        }
        polosa.style.left = left + "px";
    }
}
// ------------------------------ data base --------------------------
function init() {
    $.post(
        "core.php",
        {
            "action": "init"
        },
        showGoods
    );
}

function showGoods(data) {
    data = JSON.parse(data);
    console.log(data);
    let out = '';
    for (let key in data) {
        out += `<div class="slider_block_goods">`;
        out += `<div class="images">`;
        out += `<img src="${data[key].img}" alt="img" width="180" height="100">`;
        out += `</div>`;
        out += `<div class="today_info">
                        <h5>${data[key].name}</h5>
                        <div class="info_delivery_quantity">
                        <p class="size_10px margin_0"> <img src="images/20_1.png" alt="" width="20" height="20"
                                class="img_top">Есть доставка
                        </p>

                        <p class="size_10px margin_0"> <img src="images/20.png" alt="" width="20" height="20"
                                class="img_top">Есть в наличии 23шт</p>
                    </div>
                    <div class="today_cost">
                        <p class="size_10px">Цена за штуку:</p>
                        <p class="size_18px green">188.40 грн</p>
                    </div>
                    </div>`;
        out += ` <div class="buy">
                        <button class="to-cart" data-articul="${key}">КУПИТЬ</button>
                        <a href="#" class="left_a size_12px">Купить в <span class="red">1</span> клик</a>
                    </div>`
        out += `</div>`;
    }
    document.querySelector('.polosa').innerHTML = out;
}

$(document).ready(function () {
    init();
});
