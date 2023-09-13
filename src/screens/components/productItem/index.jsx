import React from "react";
import { Link } from "react-router-dom";

const Product = ({item}) => {
    return <div className="gridItemContainer">
    <Link to={`/product/${item?.id}`}>
      <img src={item.thumbnail} alt="logo" />
      <div className="discrptionContainer">
        <h1>{item.title}</h1>
        <h3>{`Price: ${item.price}$`}</h3>
        <p>{item.description}</p>
      </div>
    </Link>
  </div>
}

export default Product