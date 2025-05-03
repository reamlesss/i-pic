import "./Posts.css";
import { Button } from "react-bootstrap";
import yzomnadias from "../yzomandias.jpg";
import charlixcx from "../charlixcx.jpg";
import shiktor_veen from "../shiktor_veen.jpg";
import { FaDownload } from "react-icons/fa";
import { useEffect, useRef } from "react";

function Posts() {
  const postsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in-blurred-bottom");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    postsRef.current.forEach((post) => {
      if (post) observer.observe(post);
    });

    return () => {
      postsRef.current.forEach((post) => {
        if (post) observer.unobserve(post);
      });
    };
  }, []);

  return (
    <>
      <div className="mt-5 d-flex align-items-center justify-content-center flex-column gap-5">
        <div
          ref={(el) => (postsRef.current[0] = el)}
          className="image-post bg-primary text-primary p-4 rounded"
        >
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
        <div
          ref={(el) => (postsRef.current[1] = el)}
          className="image-post bg-primary text-primary p-4 rounded"
        >
          <img src={charlixcx} alt="Event" className="img-fluid rounded mb-3" />
          <div className="d-flex flex-column align-items-start mb-3">
            <p>
              <strong>User:</strong> adripiana
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
        <div
          ref={(el) => (postsRef.current[2] = el)}
          className="image-post bg-primary text-primary p-4 rounded"
        >
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
      </div>
    </>
  );
}

export default Posts;
