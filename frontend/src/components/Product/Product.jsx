import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Product.css";

import Card from "../Card/Card.jsx";
import Loader from "../Loader/Loader.jsx";
import Navbar from "../Navbar/Navbar.jsx";

import { useParams } from "react-router-dom";

const Product = () => {
  const { prodId } = useParams();
  // console.log(prodId)

  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      setIsLoading(true);
      try {
        const res = await axios.get(`http://localhost:8800/techland/${prodId}`);
        setProducts(res.data);
        // console.log(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProduct();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <div className="product-container">
            <div className="card-container">
              <input
                type="text"
                placeholder="Search"
                onChange={(e) => {
                  setSearchItem(e.target.value);
                }}
              />

              {products
                .filter((val) => {
                  if (searchItem === "") {
                    return val;
                  } else if (
                    val.name.toLowerCase().includes(searchItem.toLowerCase())
                  )
                    return val;
                  else if (
                    val.description
                      .toLowerCase()
                      .includes(searchItem.toLowerCase())
                  )
                    return val;
                })
                .map((product, index) => {
                  let prices = product.price.split("\n");
                  let newPrice = prices[0];
                  // let oldPrice = prices[1];

                  let descriptions = product.description.split("\n");

                  return (
                    <div key={index} className="single-product-card">
                      <Card
                        name={product.name}
                        descriptions={descriptions}
                        newPrice={newPrice}
                        imgSrc={product.imgSrc}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
