import React from "react";

const Header = ({ onHambergurClick, searchHidden=false }) => {
  return (
    <div className="mainParentContainer">
    <div className="parentContainer">
      {/* Nav bar */}
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

      {/* Mobile nav bar*/}
      <div className="mob-nav-bar">
        <div onClick={onHambergurClick}>
          <img src={process.env.PUBLIC_URL + "/more.png"} alt="logo" />
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + "/logoo.png"} alt="logo" />
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + "/user.png"} alt="logo" />
          <img src={process.env.PUBLIC_URL + "/cart.png"} alt="logo" />
        </div>
      </div>

      {/* Serach Container */}
      {!searchHidden && <div className="serachContainerHeader">
        <div className="search">
          <input placeholder="search"></input>
        </div>
      </div>}
      

      {/* User and Cart icons */}
      <div className="userAndCartContainer">
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
    {/* Serach Container */}
    {!searchHidden &&  <div className="serachContainerBottom">
        <div className="search">
          <input placeholder="search"></input>
        </div>
      </div>}
   
    </div>
  );
};

export default Header;
