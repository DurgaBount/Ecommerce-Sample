import React from "react";

const Header = () => {
  return (
    <div className="parentContainer">
      <div className="nav-bar">
        <ul>
          <li>
            <img src={process.env.PUBLIC_URL + "/logoo.png"} alt="logo" />
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
            <img src={process.env.PUBLIC_URL + "/user.png"} alt="logo" />
          </li>
          <li>
            <img src={process.env.PUBLIC_URL + "/cart.png"} alt="logo" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header
