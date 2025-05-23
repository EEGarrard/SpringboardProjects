import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function NotFound() {
  // Optional: Set document title
  useEffect(() => {
    document.title = "Page Not Found | Jobarouter";
  }, []);

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="not-found-header">
          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-subtitle">Page Not Found</h2>
        </div>
        
        <p className="not-found-message">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="not-found-actions">
          <Link to="/" className="not-found-button">
            ← Return to Homepage
          </Link>
          <Link to="/help" className="not-found-button secondary">
            Get Help
          </Link>
        </div>
        
        <div className="not-found-illustration">
          {/* Optional: Add an SVG illustration or image */}
          <svg width="300" height="200" viewBox="0 0 300 200" fill="none">
            <path d="M100 50L150 100L100 150" stroke="#4361ee" strokeWidth="2"/>
            <circle cx="50" cy="100" r="40" stroke="#4361ee" strokeWidth="2"/>
            <path d="M200 50L250 100L200 150" stroke="#4361ee" strokeWidth="2"/>
            <circle cx="250" cy="100" r="40" stroke="#4361ee" strokeWidth="2"/>
          </svg>
        </div>
      </div>
    </div>
  );
}   