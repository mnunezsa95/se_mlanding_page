import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-title-section">
        <p className="nav-title">Resilient Athletix</p>
        <p className="nav-subtitle">Fitness for Now. Preparation for Life.</p>
      </div>
      <div className="nav-buttons">
        <button className="main-button">Meet Mike</button>
        <button className="main-button">Testimonials</button>
        <button className="main-button">Program</button>
        <button className="main-button">Contact</button>
      </div>
    </nav>
  );
};

export default Nav;
