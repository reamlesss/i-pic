import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/Navigation";
import Button from "react-bootstrap/Button";
import cameraIcon from "./camera-icon.png"; // Import the camera icon
import galleryIcon from "./gallery-icon.png"; // Import the gallery icon
import UploadForm from "./components/UploadForm";
import Particles from "./components/Particles";

function App() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <Navigation />
      <UploadForm />
      {/* <div className="d-flex justify-content-center align-items-center vh-100 flex-column">
        <h1 className="text-center text-primary heading-logo slide-in-blurred-bottom ">
          I Pic
        </h1>
        <h3 className="text-primary slide-in-blurred-bottom">
          I take a picture! I pick a picture!
        </h3>
        <div className="d-flex gap-3 mt-2 flex-row">
          <Button className="btn-primary bg-primary slide-in-blurred-bottom">
            Upload
          </Button>
          <Button className="btn-primary bg-primary slide-in-blurred-bottom">
            Browse
          </Button>
        </div>
      </div> */}
    </>
  );
}

export default App;
