import React from "react";

const Footer = () =>{
    return <footer className="flex-container">
    <div>
      <h1>Support</h1>
      <ul>
        <li>
          <p>FAQs</p>
        </li>
        <li>
          <p>customer service</p>
        </li>
      </ul>
    </div>
    <div>
      <h1>Legal</h1>

      <ul>
        <li>
          <p>Terms & Conditions</p>
        </li>
        <li>
          <p>Privacy policy</p>
        </li>
      </ul>
    </div>
    <div>
      <h1>Follow Us</h1>
      <div className="socailMediiaIcons">
          <img src={process.env.PUBLIC_URL + "/twitter.png"} alt="logo" />
          <img src={process.env.PUBLIC_URL + "/facebook.png"} alt="logo" />
        
          <img src={process.env.PUBLIC_URL + "/instagram.png"} alt="logo" />
       
          <img src={process.env.PUBLIC_URL + "/whatsapp.png"} alt="logo" />
          </div>
    </div>
  </footer>
}

export default Footer