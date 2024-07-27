import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import HomePageRestaurant from "../../pages/ShowcaseRestaurant/HomePages/HomePageRestaurant";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/showcase/restaurant" element={<HomePageRestaurant />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
