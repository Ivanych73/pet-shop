import { useParams } from "react-router-dom"
import { getDetail } from "../../data/GetCatalog";

export const Detail = () => {
    const {goodId} = useParams();
    console.log(goodId);
    const good = getDetail(goodId);
    return (
        <div className="container border border-primary rounded my-3 d-sm-flex justify-content-center">
            <figure className="figure">
                <img src={`http://php-advanced/lesson8/images/fullsize/${good.imageTitle}`} className="full-size-image py-2" alt="{good.imageTitle}" />
                <h3 className="h3">{good.goodTitle}</h3>
                <p className = "lead">{good.description}</p>
                <p className = "small">Этот котик стоит&nbsp;{good.price}</p>
                <a className="btn btn-sm btn-outline-secondary buy-button" data-id="{{content_data.good.goodId}}" href="#">Купить</a>
            </figure>
        </div>
    )
}