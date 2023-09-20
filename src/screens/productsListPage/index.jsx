import React, {useRef} from "react";
import "./styles.css";
import prodcutsList from "../../data/prodcutsList.json";
import Header from "../components/header";
import Product from "../components/productItem";
import Footer from "../components/footer";

const ProductsListPage = () => {
  const sideNavRef = useRef()

  const handleSideDrawer = () =>{
 sideNavRef.current.style.width = "200px"
  }

  const closeSidebar = () =>{
    sideNavRef.current.style.width = "0"
     }

  return (
    <div className="mainContainer">
      <Header onHambergurClick={handleSideDrawer} />
      <div className="mySidebar" ref={sideNavRef}>
        <img src={process.env.PUBLIC_URL + "/cross.png"} className="close" alt="close" onClick={closeSidebar} />
        <div className="search">
          <input placeholder="search"></input>
        </div>
        <a href="#Home">Home</a>
        <a href="#News">News</a>
        <a href="#Contact">Contact</a>
        <a href="#About">About</a>
      </div>
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
