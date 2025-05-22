import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Cosmic Encyclopedia</h1>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/planets" className="nav-link">Planets</Link>
        <Link to="/stars" className="nav-link">Stars</Link>
        <Link to="/nebulae" className="nav-link">Nebulae</Link>
        <Link to="/galaxies" className="nav-link">Galaxies</Link>
      </div>
    </nav>
  );
};

export default NavBar;