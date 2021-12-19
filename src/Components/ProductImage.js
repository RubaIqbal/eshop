
import React  from "react";
import prodcutImg from '../../src/Assets/Images/prod-img.jpeg';

const ProductImage = (props) => {
    return (
        <div className="text-center py-2 px-2">
            <img src={props.prodcutImg} alt="Product Image" className={"product_img"} />
        </div>
    )
}
export default  ProductImage;