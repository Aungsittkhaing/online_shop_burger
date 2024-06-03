import React from "react";
import BurgerImg from "../assets/img/burger.png";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Body = () => {
  return (
    <main className="body container">
      <div className="body-content">
        <h1>Mr.Burger is available for you!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          voluptatum necessitatibus, quis praesentium exercitationem molestiae
          labore rerum, consectetur?
        </p>
        <div className="body-btn">
          <button>Shop Now</button>
          <button className="seconday-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On!</p>
        </div>
        <div className="brand-icons">
          <div className="icons">
            <FaFacebook />
            <FaSquareXTwitter />
          </div>
        </div>
      </div>
      <div className="body-image">
        <img src={BurgerImg} className="burger-img" />
      </div>
    </main>
  );
};

export default Body;
