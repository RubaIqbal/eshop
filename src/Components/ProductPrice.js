
import React  from "react";

export default function ProductPrice(props) {

    const {productprice,type="small"}=props;

    return(
        <div>
            <p className={type==="small"?"plp_price":"pdp_price"}>₹{productprice}</p>
        </div>
    )
  }