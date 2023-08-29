import "./App.css";
import image from "./assets/placeholder.png";
import logo from "./assets/logo.svg";

function App() {
  const images = [image, image, image, image, image];
  return (
    <div className="App">
      {images.map((source) => (
        <img src={source} />
      ))}
    </div>
  );
}

export default App;
