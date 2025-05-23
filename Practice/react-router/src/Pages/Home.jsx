import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to Jobarouter</h1>
        <p className="hero-subtitle">Your journey begins here</p>
        
        <div className="cta-buttons">
          <Link to="/about" className="cta-button primary">
            Learn About Us
          </Link>
          <Link to="/help" className="cta-button secondary">
            Get Help
          </Link>
        </div>
      </div>

      <div className="features-section">
        <h2 className="section-title">Why Choose Us?</h2>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Fast Navigation</h3>
            <p>Experience seamless routing with React Router</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Beautiful UI</h3>
            <p>Modern design with responsive layouts</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">⚛️</div>
            <h3>React Powered</h3>
            <p>Built with the latest React features</p>
          </div>
        </div>
      </div>
    </div>
  );
}