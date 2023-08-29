import "../App.css";
import image from "../assets/placeholder.png";
import logo from "../assets/logo.svg";
import { useRef } from "react";

function ButtonSlider() {
  const images = [logo, image, image, image, image, image, logo];
  const scrollElement = useRef<HTMLDivElement | null>(null);

  const scrollSlider = (scrollLeft: boolean) => {
    if (scrollElement && scrollElement.current) {
      const scrollDistance = scrollLeft ? -600 : 600;
      scrollElement.current.scrollLeft += scrollDistance;
    }
  };

  return (
    <>
      <div className="ButtonSlider" ref={scrollElement}>
        {images.map((source) => (
          <img src={source} />
        ))}
      </div>
      <div className="buttonDiv">
        <button onClick={() => scrollSlider(true)}>LEFT</button>
        <button onClick={() => scrollSlider(false)}>RIGHT</button>
      </div>
    </>
  );
}

export default ButtonSlider;
