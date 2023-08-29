import "../App.css";
import image from "../assets/placeholder.png";
import logo from "../assets/logo.svg";

function ScrollbarSlider() {
  const images = [logo, image, image, image, image, image, logo];
  return (
    <div className="ScrollbarSlider">
      {images.map((source) => (
        <img src={source} />
      ))}
    </div>
  );
}

export default ScrollbarSlider;
