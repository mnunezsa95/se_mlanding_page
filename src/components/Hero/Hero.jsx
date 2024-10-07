import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero__contianer">
      <div className="hero__sub-container">
        <h1 className="hero__title">
          Elevate Yourself.
          <br />
          Prepare for Life.
        </h1>
        <div className="hero__buttons">
          <Link to="/programs">
            <button className="hero__button" type="button">
              LEARN MORE
            </button>
          </Link>
          <Link to="/contact">
            <button className="hero__button" type="button">
              GET IN TOUCH
            </button>
          </Link>
        </div>
      </div>
      <div className="hero-image"></div>
    </div>
  );
};

export default Hero;
