import React from "react";
import Navbar from "../components/Navbar/Navbar";

import "./Home.css";

import Items from "../components/Items/Items.jsx";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <span className="home-title">PC Items</span>
        <Items />
      </div>
    </>
  );
};