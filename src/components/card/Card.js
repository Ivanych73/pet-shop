import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Card (props) {
    const detailHref = `index.php?path=detail/${props.good.goodId}`;
    //const editHref = `index.php?path=admin/editgood/${props.good.goodId}`;
    return(
        <div className="card shadow-sm">
            <Link to={`/detail/${props.good.goodId}`}>
                <img className="m-2" src={`http://php-advanced/lesson8/images/thumbnail/${props.good.imageTitle}`} alt={props.good.imageTitle}></img>
            </Link>
            <div className="card-body">
                <p className="card-text">{props.good.goodTitle}</p>
                <div className="d-flex justify-content-between align-items-center">
                    
                    {/* <a className="btn btn-sm btn-outline-secondary" href={editHref}>Редактировать</a> */}
                    
                    <div className="btn-group">
                        <Link to={`/detail/${props.good.goodId}`} className="btn btn-sm btn-outline-secondary">Подробнее</Link>
                        {/* <a className="btn btn-sm btn-outline-secondary" href={detailHref}>Подробнее</a> */}
                        <a className="btn btn-sm btn-outline-secondary buy-button" data-id={props.good.goodId} href="">Купить</a>
                    </div>
                    
                    <small className="text-muted">Стоимость:&nbsp;<span>{props.good.price}</span></small>
                </div>
            </div>
        </div>
    );
}

export default Card;

Card.propTypes = {
    good: propTypes.object,
}