import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h2>Welcome to the Cosmic Encyclopedia</h2>
      <p>Explore the wonders of our universe by selecting a category above.</p>
      
      <div className="featured-objects">
        <h3>Featured Celestial Objects</h3>
        <div className="featured-grid">
          <Link to="/planets/earth" className="featured-card">
            <h4>Earth</h4>
            <p>Our home planet</p>
          </Link>
          <Link to="/stars/sun" className="featured-card">
            <h4>The Sun</h4>
            <p>Our nearest star</p>
          </Link>
          <Link to="/nebulae/orion" className="featured-card">
            <h4>Orion Nebula</h4>
            <p>Stellar nursery</p>
          </Link>
          <Link to="/galaxies/milkyway" className="featured-card">
            <h4>Milky Way</h4>
            <p>Our home galaxy</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;