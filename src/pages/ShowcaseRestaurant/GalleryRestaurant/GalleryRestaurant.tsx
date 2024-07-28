import React from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import NavbarRestaurant from "../../../components/Navbar/NavbarRestaurant/NavbarRestaurant";
import photos from "./photos";

const GalleryRestaurant: React.FC = () => {
  // const photos = [
  //   { src: "/img/restaurant2.jpg", width: 80, height: 120 },
  //   { src: "/img/plat.jpg", width: 3024, height: 4032 },
  //   { src: "/img/frontRestaurant.jpg", width: 80, height: 120 },
  //   { src: "/img/restaurant2.jpg", width: 80, height: 120 },
  //   { src: "/img/plat.jpg", width: 3024, height: 4032 },
  //   { src: "/img/frontRestaurant.jpg", width: 80, height: 120 },
  //   { src: "/img/restaurant2.jpg", width: 80, height: 120 },
  //   { src: "/img/plat.jpg", width: 3024, height: 4032 },
  //   { src: "/img/frontRestaurant.jpg", width: 80, height: 120 },
  // ];
  return (
    <div>
      <NavbarRestaurant />
      <div className="p-20">
        <RowsPhotoAlbum photos={photos} />
      </div>
    </div>
  );
};

export default GalleryRestaurant;
