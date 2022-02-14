import Card from "./card/card"
import propTypes from "prop-types"

function Goods(props) {
    const goods = props.goods.map((good, index) => 
        <div className="col-sm-12 col-md-6 col-lg-4 py-3 px-3" key={index}>
            <Card good={good} />
        </div>
    )

   return(
       <div className="row">
           {goods}
       </div>
   )
}

export default Goods

Goods.propTypes = {
    goods: propTypes.array,
}