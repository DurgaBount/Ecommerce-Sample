import React from "react";
import "./styles.css";
import { useParams } from "react-router-dom";
import prodcutsList from "../../data/prodcutsList.json";
import Header from "../components/header";
import Footer from "../components/footer";

const ProductDetailsPage = () => {

  const { productID } = useParams();
  const product = prodcutsList.products.find((item)=>{
    return item.id == productID
  })
  return (
    <div>
      <Header/>
      <div className="mainDetailsContainer">
        <div className="productImagesContainer">

          {product.images.map((image)=>{
            return  <img src={image} alt="logo" />
          })}

        </div>
     
        <div className="productDetialsContainer">
          <h1>{product.title}</h1>
          <h4>{`${product.description}`}</h4>
          <h2>{`Price $ ${product.price}`}</h2>
          <h4>{`Rating ${product.rating}`}</h4>
          <h4>{`Only ${product.stock} Left`}</h4>
        </div>
      </div>
      <Footer/>
      </div>
  );
};

export default ProductDetailsPage;
