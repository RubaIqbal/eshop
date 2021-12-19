
import React  from "react";
import { Link } from "react-router-dom";
import prodcutImg from '../../src/Assets/Images/prod-img.jpeg';

const ProductImage = (props) => {
    return (
        <div className="text-center py-2 px-2">
            {/* <Link href="#"> */}
            <img src={props.prodcutImg} alt="" className={"product_img"} />
            {/* </Link> */}
        </div>
    )
}
export default  ProductImage;