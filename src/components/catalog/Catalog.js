import Goods from "../goods/Goods";

function Catalog(props) {
    return(
        <div>
        <section class="py-5 text-center container">
            <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <h1 class="fw-light">Добро пожаловать в наш магазин котиков</h1>
                    <p class="lead text-muted">Здесь Вы можете полюбоваться на прекрасных котиков и даже выбрать себе
                        какого-нибудь!</p>
                </div>
            </div>
        </section>
        <div class="album py-5 bg-light">
            <div class="container" id="catalog" data-count="1">

                <Goods goods={props.goods} />

            </div>
        </div>
        </div>
    )
}

export default Catalog