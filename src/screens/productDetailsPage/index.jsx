import React, { useRef } from "react";
import "./styles.css";
import { useParams } from "react-router-dom";
import prodcutsList from "../../data/prodcutsList.json";
import Header from "../components/header";
import Footer from "../components/footer";

const ProductDetailsPage = () => {
  const { productID } = useParams();
  const product = prodcutsList.products.find((item) => {
    return item.id == productID;
  });

  const sideNavRef = useRef();

  const handleSideDrawer = () => {
    sideNavRef.current.style.width = "200px";
  };

  const closeSidebar = () => {
    sideNavRef.current.style.width = "0";
  };

  return (
    <div className="mainContainer">
      <Header onHambergurClick={handleSideDrawer} searchHidden={true} />
      <div className="mySidebar" ref={sideNavRef}>
        <img
          src={process.env.PUBLIC_URL + "/cross.png"}
          className="close"
          alt="close"
          onClick={closeSidebar}
        />
        <a href="#Home">Home</a>
        <a href="#News">News</a>
        <a href="#Contact">Contact</a>
        <a href="#About">About</a>
      </div>

      <div className="mainDetailsContainer">
        <div className="productImagesContainer">
          {product.images.map((image) => {
            return <img src={image} alt="logo" />;
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

      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
