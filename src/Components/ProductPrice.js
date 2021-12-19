
import React  from "react";

export default function ProductPrice(props) {
    return(
        <div>
            <p className="pdp_price">₹{props.productprice}</p>
        </div>
    )
  }