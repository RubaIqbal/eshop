
import React  from "react";
import { Button, Col, Row } from 'react-bootstrap';
import cart from '../../src/Assets/Images/shopping-cart.png';


export default function AddToCartButton(props) {
    return (         
        <div>
            <Button variant="primary" className={"cart_btn"}>
                <img src={cart} alt="" className={"cart_btn_img"} />
                <span>{props.btnText}</span>
            </Button>
        </div>
    )
}