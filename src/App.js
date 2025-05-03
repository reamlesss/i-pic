import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/Navigation";
import Posts from "./components/Posts";
import Button from "react-bootstrap/Button";
import cameraIcon from "./camera-icon.png"; // Import the camera icon
import galleryIcon from "./gallery-icon.png"; // Import the gallery icon
import UploadForm from "./components/UploadForm";
import Particles from "./components/Particles";
import ImagePosts from "./components/Posts";
import yzomnadias from "./yzomandias.jpg";
import charlixcx from "./charlixcx.jpg";
import shiktor_veen from "./shiktor_veen.jpg";
import { FaDownload } from "react-icons/fa";
import { useState } from "react";

function App() {
  const [view, setView] = useState("home");

  return (
    <>
      <Navigation setView={setView} />
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
        className="h-100 w-100"
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={5}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      {view === "home" && (
        <div className="vh-100 d-flex align-items-center justify-content-center flex-column">
          <h1 className="text-center text-primary heading-logo slide-in-blurred-bottom ">
            I Pic
          </h1>
          <h3 className="text-primary slide-in-blurred-bottom">
            I take a picture! I pick a picture!
          </h3>
          <div className="d-flex gap-3 mt-2 flex-column">
            <Button
              className="btn-primary bg-primary slide-in-blurred-bottom"
              onClick={() => setView("upload")}
            >
              Upload
            </Button>
            <Button
              className="btn-primary bg-primary slide-in-blurred-bottom"
              onClick={() => setView("browse")}
            >
              Browse
            </Button>
          </div>
        </div>
      )}
      {view === "upload" && (
        <UploadForm
          handleCancel={() => setView("home")}
          
        />
      )}
      {view === "browse" && <ImagePosts />}
    </>
  );
}

export default App;
