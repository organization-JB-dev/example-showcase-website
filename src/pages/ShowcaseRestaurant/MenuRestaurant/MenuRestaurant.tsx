import React, { useEffect, useState } from "react";
import NavbarRestaurant from "../../../components/Navbar/NavbarRestaurant/NavbarRestaurant";

const MenuRestaurant: React.FC = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };

  const handleIframeError = () => {
    setIframeError(true);
  };

  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  return (
    <div>
      <NavbarRestaurant fixed={false} />
      {iframeError ? (
        <div className="h-screen w-full flex items-center justify-center">
          <p>Erreur de chargement du menu. Veuillez réessayer plus tard.</p>
        </div>
      ) : (
        <iframe
          src="/docs/VeganRestaurantMenu.pdf"
          className="h-screen w-full"
          onLoad={handleIframeLoad}
          onError={handleIframeError}
        ></iframe>
      )}
      {!iframeLoaded && !iframeError && (
        <div className="h-screen w-full flex items-center justify-center">
          <p>Chargement du menu...</p>
        </div>
      )}
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
};

export default MenuRestaurant;
