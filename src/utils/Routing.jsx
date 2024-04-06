import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Cart from "../components/Cart";
import Help from "../components/Help";
import Offers from "../components/Offers";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </>
  );
}

export default Routing;
