import React from "react";
import ProductTypes from "./Pages/ProductTypes/ProductTypes";
import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Items from "./Pages/Items/Items";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<ProductTypes />} />
      <Route path="/items/:id/:type" element={<Items />} />
    </Routes>
  );
}

