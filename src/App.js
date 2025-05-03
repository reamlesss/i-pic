import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/Navigation";
import Posts from "./components/Posts"
import Button from "react-bootstrap/Button";
import cameraIcon from "./camera-icon.png"; // Import the camera icon
import galleryIcon from "./gallery-icon.png"; // Import the gallery icon
import UploadForm from "./components/UploadForm";
import Particles from "./components/Particles";
import yzomnadias from "./yzomandias.jpg";
import charlixcx from "./charlixcx.jpg";
import shiktor_veen from "./shiktor_veen.jpg";
import { FaDownload } from "react-icons/fa";


function App() {
  return (
    <>
      <Navigation />
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
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="vh-100 d-flex align-items-center justify-content-center flex-column">
        <h1 className="text-center text-primary heading-logo slide-in-blurred-bottom ">
          I Pic
        </h1>
        <h3 className="text-primary slide-in-blurred-bottom">
          I take a picture! I pick a picture!
        </h3>
        <div className="d-flex gap-3 mt-2 flex-column">
          <Button className="btn-primary bg-primary slide-in-blurred-bottom">
            Upload
          </Button>
          <Button className="btn-primary bg-primary slide-in-blurred-bottom">
            Browse
          </Button>
        </div>
      </div>
      {/* <UploadForm /> */}

      {/* <div className="mt-5 d-flex align-items-center justify-content-center flex-column gap-5">
        <div className="image-post bg-primary  text-primary p-4 rounded">
          <img
            src={yzomnadias}
            alt="Event"
            className="img-fluid rounded mb-3"
          />
          <div className="d-flex flex-column align-items-start mb-3">
            <p>
              <strong>User:</strong> prokopdvere
            </p>
            <p>
              <strong>Location:</strong> Majáles Praha
            </p>
            <p>
              <strong>Date:</strong> April 28, 2024
            </p>
            <p>
              <strong>Event:</strong> Yzomandias & Niktendo show
            </p>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column">
            <Button className="btn-primary bg-primary me-2 ">
              <FaDownload />
            </Button>
            <span>Downloads: 543</span>
          </div>
        </div>
        <div className="image-post bg-primary  text-primary p-4 rounded">
          <img src={charlixcx} alt="Event" className="img-fluid rounded mb-3" />
          <div className="d-flex flex-column align-items-start mb-3">
            <p>
              <strong>User:</strong> bendover
            </p>
            <p>
              <strong>Location:</strong> Coachella
            </p>
            <p>
              <strong>Date:</strong> April 15, 2025
            </p>
            <p>
              <strong>Event:</strong> CharliXCX Brat show
            </p>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column">
            <Button className="btn-primary bg-primary me-2 ">
              <FaDownload />
            </Button>
            <span>Downloads: 543</span>
          </div>
        </div>
        <div className="image-post bg-primary  text-primary p-4 rounded">
          <img
            src={shiktor_veen}
            alt="Event"
            className="img-fluid rounded mb-3"
          />
          <div className="d-flex flex-column align-items-start mb-3">
            <p>
              <strong>User:</strong> Benediktrenc
            </p>
            <p>
              <strong>Location:</strong> Majáles Praha
            </p>
            <p>
              <strong>Date:</strong> April 29, 2025
            </p>
            <p>
              <strong>Event:</strong> Viktor sheen Impostor syndrom show
            </p>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column">
            <Button className="btn-primary bg-primary me-2 ">
              <FaDownload />
            </Button>
            <span>Downloads: 354</span>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
