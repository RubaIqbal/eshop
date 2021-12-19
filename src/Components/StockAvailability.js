
import React  from "react";

export default function StockAvailability(props) {
    return (
        <div className="stock-wrapper">
            <span>{props.availability}</span>
        </div>
    )
  } 