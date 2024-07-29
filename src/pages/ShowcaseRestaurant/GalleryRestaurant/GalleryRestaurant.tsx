import React from "react";
import {
  ColumnsPhotoAlbum,
  MasonryPhotoAlbum,
  RowsPhotoAlbum,
} from "react-photo-album";
import NavbarRestaurant from "../../../components/Navbar/NavbarRestaurant/NavbarRestaurant";
import photos from "./photos";
import "react-photo-album/masonry.css";
import "react-photo-album/rows.css";
import "react-photo-album/columns.css";

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
    <div className="bg-restaurant-light">
      <NavbarRestaurant />
      <div className="p-20">
        <ColumnsPhotoAlbum photos={photos} />
        {/* <MasonryPhotoAlbum photos={photos} /> */}
        {/* <RowsPhotoAlbum photos={photos} /> */}
      </div>
    </div>
  );
};

export default GalleryRestaurant;
