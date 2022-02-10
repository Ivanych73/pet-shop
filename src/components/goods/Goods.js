import Card from "../card/Card"

const CARDS_PER_LINE = 3;

function Goods(props) {
    const goodCards = props.goods.map((good, index) => 
        <div className="col-sm-4 py-3 px-3" key={index}>
            <Card good={good} />
        </div>
    )
    const gridGoods = [];
    let i = 0;
    let strGoods = [];
    while (i< goodCards.length) {
        for (let j=0; j<CARDS_PER_LINE; j++) {
            strGoods.push(goodCards[i]);
            i++;
        }
        gridGoods.push(strGoods);
        strGoods = [];
    }
    const goods = gridGoods.map((line, index) =>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" key={index}>
            {line}
        </div>
    )
    return(
        goods
    )
}

export default Goods