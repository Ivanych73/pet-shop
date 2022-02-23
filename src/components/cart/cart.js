import Card from "../catalog/goods/card/card";

export const Cart = (props) => {
    let emptyCartMessage = "";
    const getEmptyCartMessage = () => {
        return (
            <p className="lead">В Вашей корзине пока пусто</p>
        )
    }
    let goodsInCart;
    let makeOrder;
    const getMakeOrder = () => {
        return (
            <div className="row my-3">
            <div className="col-6 d-flex justify-content-center">
                <div className="lead">Общая стоимость корзины составляет <span className="total-price">0</span></div>
            </div>
            <div className="col-6 d-flex justify-content-center">
                <form action="index.php?path=order/edit" method="post">
                    <input type="submit" className = "btn btn-primary" value="Оформить заказ" />
                </form>
            </div>
        </div>
        )
    }
    if (props.cart) {
        goodsInCart = props.cart.map(function(good){
            return (
                <div className="row my-2  item-{good.goodId}">
                    <div className="col-4"><Card good={good}/></div>
                    <div className="col-4 d-flex justify-content-around align-items-center">
                        <a className = "btn btn-secondary buy-button" data-id={good.goodId} href="">Добавить</a>
                        <a className = "btn btn-secondary remove-button" data-id={good.goodId} href="">Удалить</a>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center">
                        Всего:&nbsp
                        <span className="count-item-{good.goodId}">{good.quantity}</span>        
                    </div>
                </div>
            )
        });
        makeOrder = getMakeOrder();

    } else emptyCartMessage = getEmptyCartMessage();
    const getWelcome = () => {
        return (
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light is-cart">Корзина Ваших покупок</h1>
                        {emptyCartMessage}
                    </div>
                </div>
            </section>
        )
    }

    const welcome = getWelcome();

    return (
        <div className="container">
            {welcome}
    
            {goodsInCart}

            {makeOrder}
        </div>
    )
}