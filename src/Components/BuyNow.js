
import React  from "react";
import { Button, Col, Row } from 'react-bootstrap';
import buy from '../../src/Assets/Images/buy.png';


export default function BuyNow() {
    return (         
        <div>
            <Button variant="warning" className={"buy_btn"}>
                <img src={buy} alt="" className={"cart_btn_img"} />
                <span>Buy Now</span>
            </Button>
        </div>
    )
  }