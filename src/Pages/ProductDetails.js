import React,{useContext,useEffect,useState}  from "react";
import DataContext from "../Context/DataContext";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row } from 'react-bootstrap';
import prodcutImg from '../../src/Assets/Images/prod-img.jpeg';
import rateImg from '../../src/Assets/Images/star.png';
import ProductHeading from "../Components/ProductHeading";
import ProductPrice from "../Components/ProductPrice";
import ProductImage from "../Components/ProductImage";
import StockAvailability from "../Components/StockAvailability";
import AddToCartButton from "../Components/AddToCartButton";
import BuyNow from "../Components/BuyNow";


export default function ProductDetails() {
    const [product,setProduct]= useState({});


    useEffect(() => {

        let productStr=localStorage.getItem("product");
        const productJSON=JSON.parse(productStr);
        setProduct(productJSON);

        return ()=>{
            // localStorage.removeItem("product");
        };
        
    }, []);


    if(!product)
    return <h1>Product not found</h1>


    const {image_link=prodcutImg,product_type="NA" ,title="NA",
          price=0,description="NA",brand="NA",size="NA",
          availability="NA"
        }=product


    return (
        <>
        <div className="container">
            <Row>
                <Col xs={12} sm={12} md={5} lg={5} xl={5} className="py-3">
                    <div>
                    <img src={image_link} alt="" className={"pdp_product_img"} />
                    {/* <ProductImage /> */}
                    </div>
                </Col>
                <Col xs={12} sm={12} md={7} lg={7} xl={7} className="py-3">
                    <p className="pdp_key">{product_type}</p>
                    <ProductHeading title={title} type="big"/>
                    {/* <ProductPrice /> */}
                    <div className="plp_price_stock_wrap">
                    <ProductPrice productprice={price} />
                    <StockAvailability availability={availability}/>
                    </div>
                    {/* <div className="rate_wrapper">
                        <span className="rate_txt">4.5</span>
                        <img src={rateImg} alt="" className={"rate_star"} />
                    </div> */}
                    <p className="pdp_key">Brand: <span className="pdp_value">{brand}</span></p>
                    <p className="pdp_key">Size: <span className="pdp_value">{size}</span></p>
                    <div className="d-flex">
                        <span className="pdp_key">Qty: </span>
                        <input type="number" min="1" max="100" defaultValue="1" className="mx-2" />
                    </div>
                    <Row>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6} className="py-3">
                            <AddToCartButton btnText="Add To Cart" />
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6} className="py-3">
                        {/* <Button variant="warning" className={"cart_btn"}>Buy Now</Button> */}
                        <BuyNow />
                        </Col>
                        </Row>
                </Col>
            </Row>
            <div>
                <p className="pdp_key">Product Description: </p>
                <p className="pdp_value">{description}</p>
            </div>
        </div>
    </>
    )
  }