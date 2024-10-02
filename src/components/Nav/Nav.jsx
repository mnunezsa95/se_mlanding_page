import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-title-section">
        <p className="nav-title">Resilient Athletix</p>
        <p className="nav-subtitle">Fitness for Now. Preparation for Life.</p>
      </div>
      <div className="nav-buttons">
        <Link to="/" className="main-button">
          Home
        </Link>
        <Link to="/meet-mike" className="main-button">
          Meet Mike
        </Link>
        <Link to="/testimonials" className="main-button">
          Testimonials
        </Link>
        <Link to="/programs" className="main-button">
          Programs
        </Link>
        <Link to="/contact" className="main-button">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
