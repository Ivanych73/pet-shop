import Goods from "../goods/Goods";

function Catalog(props) {
    return(
        <div>
        <section className="py-5 text-center container">
            <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">Добро пожаловать в наш магазин котиков</h1>
                    <p className="lead text-muted">Здесь Вы можете полюбоваться на прекрасных котиков и даже выбрать себе
                        какого-нибудь!</p>
                </div>
            </div>
        </section>
        <div className="album py-5 bg-light">
            <div className="container" id="catalog" data-count="1">

                <Goods goods={props.goods} />

            </div>
        </div>
        </div>
    )
}

export default Catalog