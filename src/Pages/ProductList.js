
import React, { useContext, useState, useEffect } from "react";
import { Button, Col, Row } from 'react-bootstrap';
import DataContext from "../Context/DataContext";
import ReactPaginate from 'react-paginate';
import ProductCard from '../Components/ProductCard';
const itemsPerPage = 12;
const defaultSort = "lowtohigh";


function ProductList() {
  const { productList } = useContext(DataContext);
  const [sortBy, setShortBy] = useState(defaultSort);

  const [currentItems, setCurrentItems] = useState([]);
  const [sortedproducts, setSortedproducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);


   React.useMemo(
    () => {

      let list=[]
      if (sortBy === defaultSort)
        {
          list= productList.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

        }else{
          list= productList.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        }


       setSortedproducts(list)

    },
    [sortBy])


  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    if (sortedproducts && sortedproducts.length) {

      setCurrentItems(sortedproducts.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(sortedproducts.length / itemsPerPage));

    }
  }, [itemOffset, itemsPerPage,sortBy]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % productList.length;
    setItemOffset(newOffset);
  };

  // console.log(productList)
  return <>
    <div className="container">
      <p className="pdp_key">Total <span className="product_count">{productList.length}</span> results found for peripherals</p>
      <div className="d-flex align-self-center pb-3">
      <p className="pdp_key my-1">Sort By Price</p>
      <Button className="mx-2" variant={sortBy===defaultSort?"primary":"outline-primary"} onClick={() => setShortBy(defaultSort)}>Low to High</Button>
      <Button className="mx-2" variant={sortBy==="hightolow"?"primary":"outline-primary"}  onClick={() => setShortBy("hightolow")}>High to Low</Button>
    </div>
    <ProductCard currentItems={currentItems} />

    <div className="d-flex justify-content-end mt-3">
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
      </div>
    </div>
  </>
}

export default ProductList;
