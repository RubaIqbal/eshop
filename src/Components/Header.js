
import React  from "react";
import logo from '../Assets/Images/logo.png';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row } from 'react-bootstrap';
import home from '../../src/Assets/Images/home.png';
import cart from '../../src/Assets/Images/cart-blue.png';
import AddToCartButton from "../Components/AddToCartButton";
import { useNavigate } from 'react-router-dom';

export default function Header() {
   let navigate = useNavigate();
   

    return (
          <>
          <header className="header_style">
          <h1 onClick={()=>navigate("/")}>𝒞𝑜𝓂𝓅𝓊𝓉𝑒𝓇 𝒜𝓅𝓅𝓁𝒾𝓃𝒸𝑒𝓈</h1>
            {/* <Row>
            <Col xs={2} sm={2} md={2} lg={2} xl={2}  className="align-self-center">
              <img src={home} alt="Home Icon" className={"cart_btn_img"} />
            </Col>
            <Col xs={8} sm={8} md={8} lg={8} xl={8} className="" onClick={()=>navigate("/")}>
              <h1>𝒞𝑜𝓂𝓅𝓊𝓉𝑒𝓇 𝒜𝓅𝓅𝓁𝒾𝓃𝒸𝑒𝓈</h1>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2} className="align-self-center">
              <img src={cart} alt="Cart Icon" className={"cart_btn_img"} />
              <span className={"cart_count"}>(60)</span>
            </Col>
          </Row> */}
          </header>
          </>);
  }