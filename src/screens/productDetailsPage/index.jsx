import React from "react";

const ProductDetailsPage = () => {
  return (
    <div>
      <p>ProductDetailsPage</p>
      <div className="nav-bar">
      <ul>
        <li>
        <img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo"/>
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
      <div className="secondContainer">
      <div className="search"> 
        <input placeholder="search"></input>
      </div>
      <ul>
        <li>
        <img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo"/>
        </li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;





