import React, { useState, useEffect } from "react";

export default function Resize() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth < 768;
  useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      //cuando se desmonta el componente, es decir cuando le doy opcion de hide
      window.removeEventListener('resize', handleResize)
    };
  }, []);
  return (
    <div>
      <h1>{windowWidth}</h1>
      {isMobile && <h2>Show only mobile devices</h2>}
    </div>
  );
}
