import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import HomePageRestaurant from "../../pages/ShowcaseRestaurant/HomePages/HomePageRestaurant";
import MenuRestaurant from "../../pages/ShowcaseRestaurant/MenuRestaurant/MenuRestaurant";
import GalleryRestaurant from "../../pages/ShowcaseRestaurant/GalleryRestaurant/GalleryRestaurant";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/showcase/restaurant" element={<HomePageRestaurant />} />
      <Route path="/showcase/restaurant/menu" element={<MenuRestaurant />} />
      <Route
        path="/showcase/restaurant/galerie"
        element={<GalleryRestaurant />}
      />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
