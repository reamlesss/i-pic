import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/Navigation";
import Button from "react-bootstrap/Button";
import cameraIcon from "./camera-icon.png"; // Import the camera icon
import galleryIcon from "./gallery-icon.png"; // Import the gallery icon
import UploadForm from "./components/UploadForm";

function App() {
  return (
    <>
      <Navigation />
      <UploadForm/>
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
