import React from "react";
import "../styles/amazon.css";

const Cards = ({ item, handleClick }) => {
  const { name, manufacturer, price, img } = item;

  const handleDetails = () => {
    console.log("Details Clicked");
  };
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{name}</p>
        <p>{manufacturer}</p>
        <p>Price - {price}tk</p>
        <button onClick={() => handleClick(item)}>Add to List</button>
        <button
          style={{ marginLeft: "10px" }}
          onClick={() => handleDetails(item)}
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default Cards;

// id, title, autor, price, img
