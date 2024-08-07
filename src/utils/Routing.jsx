import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Cart from "../components/Cart";
import Help from "../components/Help";
import Offers from "../components/Offers";
import RestaurantMenu from "../components/RestaurantMenu";
import CollectionsCategories from "../components/CollectionsCategories";
function Routing() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/help" element={<Help />} />
        <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
        <Route
          path="/categories/:type/:id"
          element={<CollectionsCategories />}
        />
      </Routes>
    </>
  );
}

export default Routing;
