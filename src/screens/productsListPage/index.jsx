import React from "react";
import "./styles.css";
import prodcutsList from "../../data/prodcutsList.json";
import Header from "../components/header";
import Product from "../components/productItem";
import Footer from "../components/footer";

const ProductsListPage = () => {
  return (
    <div>
      <Header/>
      <div className="gridContainer">
        {prodcutsList.products.map((item) => {
          return (
            <Product item={item}/>
          );
        })}
      </div>
      <Footer/>
    </div>
  );
};

export default ProductsListPage;
