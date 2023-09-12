import React from "react";
import "./styles.css";
import prodcutsList from '../../data/prodcutsList.json'

const ProductsListPage = () => {

  console.log("sddsa",prodcutsList);

  return (
    <div>
    <div className="parentContainer"> 
      <div className="nav-bar">
        <ul>
          <li>
            <img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" />
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
      <div className="serachAndOther"> 
      <div className="search"> 
        <input placeholder="search"></input>
      </div>
      <ul>
        <li>
        <img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo"/>
        </li>
        {/* <li>
        <img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo"/>
        </li> */}
        </ul>
      </div>
    </div>
    <div className="gridContainer">
      {prodcutsList.products.map((item)=>{
       return <div className="gridItemContainer">
        <img src={item.thumbnail} alt="logo"/>
        <div className="discrptionContainer">
        <h1>{item.title}</h1>
        <h3>{`Price: ${item.price}$`}</h3>

        <p>{item.description}</p>
        </div>
        </div>
      })}
    </div>
    </div>
  );
};

export default ProductsListPage;
