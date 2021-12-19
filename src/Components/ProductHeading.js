
import React  from "react";

export default function ProductHeading(props) {
    
    const {title,type="small"}=props;
    
    return(
        <div>
            <p className={type==="small"?"plp_product_title":"pdp_product_title"}>{title}</p>
        </div>
    )
  }