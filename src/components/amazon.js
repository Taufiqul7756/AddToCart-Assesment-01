import React, { useEffect, useState } from "react";
import list from "../data";
import Cards from "./card";
import "../styles/amazon.css";

const Amazon = ({ handleClick }) => {
  const [products, setProducts] = useState([]);
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetch("https://fec-inventory-api.herokuapp.com/product-info")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    fetch("https://fec-inventory-api.herokuapp.com/inventory-info")
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);

  return (
    <section>
      {products.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
      {inventory.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Amazon;
