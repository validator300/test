if (localStorage.getItem('cart')) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    let shopCart = new Cart(cart);
    clearBlock();
    document.querySelector('.cart-out').addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('delete')) {
            shopCart.goodsDelete(target.dataset['articul']);
            clearBlock();
            return true;
        }
        else if (target.classList.contains('plus')) {
            shopCart.goodsPlus(target.dataset['articul']);
            clearBlock();
            return true;
        }
        else if (target.classList.contains('minus')) {
            shopCart.goodsMinus(target.dataset['articul']);
            clearBlock();
            return true;
        }
    });
    function clearBlock() {
        document.querySelector('.cart-out').innerHTML = '';
        document.querySelector('.cart-out').append(shopCart.render());
        document.querySelector('.total_amount').innerHTML = '';
        document.querySelector('.total_amount').append(shopCart.getCost());
        document.querySelector('.quantity').innerHTML = '';
        document.querySelector('.quantity').innerHTML = shopCart.getCount()
        localStorage.setItem('cart', JSON.stringify(shopCart.items))
    }
}
function order(state) {
    document.querySelector('.order_block').style.display = state;
    document.querySelector('.gray_3').style.display = state;
}

