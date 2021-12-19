
import React,{useEffect} from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Papa from 'papaparse';
import ProductList from "./Pages/ProductList";
import ProductDetails from "./Pages/ProductDetails";
import DataContext from "./Context/DataContext";
import Header from './Components/Header';
import Footer from "./Components/Footer";

function App() {

  const [productList, setProductList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState([]);

  useEffect(() => {
    getData()
  }, []);
  async function getData() {
    setIsLoading(true)
    try {
      
    const response = await fetch('./test_listings.csv');
    const reader = response.body.getReader();
    const result = await reader.read() // raw array
    const decoder = new TextDecoder('utf-8')
    const csv = decoder.decode(result.value) // the csv text
    const results = Papa.parse(csv, { header: true }) // object with { data, errors, meta }
    const rows = results.data // array of objects
    setProductList(rows)
    setIsLoading(false)
    } catch (error) {
      // console.log({error})
    }
  }

  if(isLoading)
  return <h1>Loading Data</h1>


  return (
    <DataContext.Provider value={{productList}}>
      
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
    <Footer />

  </DataContext.Provider>
  );
}

export default App;
