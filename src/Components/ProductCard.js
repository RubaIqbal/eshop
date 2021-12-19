
import React,{useContext}  from "react";
import DataContext from "../Context/DataContext";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row } from 'react-bootstrap';
import StockAvailability from './StockAvailability';
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";
import ProductHeading from "./ProductHeading";
import AddToCartButton from "./AddToCartButton";
import { useNavigate } from 'react-router-dom';

 function ProductCard({currentItems}) {

    const {productList}= useContext(DataContext);
    let navigate = useNavigate();
    
    const handleClick=(product)=>{
        
        localStorage.setItem("product",JSON.stringify(product));
        
        navigate('/product');
    }
    return (
        <div>
            <Row>
                {currentItems.map((item,index)=>{
                return(
                <Col xs={6} sm={6} md={4} lg={3} xl={3} className="plp_cart pb-3 px-2" key={index}>
                    <div className={"product_cart_content_wrap"} onClick={()=>handleClick(item)}>
                        <ProductImage prodcutImg={item.image_link} />
                        <div className="px-2 py-2">
                            <ProductHeading title={item.title} type="small" />
                            <div className="plp_price_stock_wrap">
                                <ProductPrice productprice={item.price} />
                                <StockAvailability availability={item.availability} />
                            </div>
                            <AddToCartButton btnText={"Add To Cart"} />
                        </div>
                    </div> 
                </Col>
                )})}
            </Row>
        </div>
    )
  }

export default ProductCard;
