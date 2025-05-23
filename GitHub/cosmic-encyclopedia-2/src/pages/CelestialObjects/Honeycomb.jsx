import { useState } from 'react';
import PageLayout from "../../components/Layout/PageLayout";
import './Honeycomb.css';

export default function Honeycomb() {
  const [rotation, setRotation] = useState(0);
  const [sides, setSides] = useState(6);
  const [activeTheory, setActiveTheory] = useState('binary');

  const theories = {
    binary: {
      title: "Binary Star Hypothesis",
      description: "Two stars' gravitational dance creates shockwaves",
      evidence: "MWC 922 contains a hot binary star system",
      color: "#ff4d4d"
    },
    magnetic: {
      title: "Magnetic Bubble Theory",
      description: "Complex magnetic fields sculpt the structure",
      evidence: "Unusually ordered polarization patterns detected",
      color: "#4d79ff"
    },
    crystal: {
      title: "Space-Time Crystal",
      description: "Quantum structure of vacuum itself",
      evidence: "Mathematically perfect angles",
      color: "#b34dff"
    }
  };

  return (
    <PageLayout>
      <div className="honeycomb-page">
        <header className="cosmic-header">
          <h1>The Space Honeycomb</h1>
          <p className="subtitle">MWC 922: The Universe's Most Perfect Hexagon</p>
        </header>

        <div className="science-card">
          <div className="visualization-container">
            <div 
              className="honeycomb-3d" 
              style={{ 
                '--rotation': `${rotation}deg`,
                '--sides': sides
              }}
              onClick={() => setRotation(rotation + (360/sides))}
            >
              {Array(sides).fill().map((_, i) => (
                <div 
                  key={i} 
                  className="honeycomb-wall"
                  style={{
                    transform: `rotate(${i * (360/sides)}deg)`,
                    background: `linear-gradient(to right, 
                      rgba(255,77,77,0.1), 
                      ${theories[activeTheory].color})`
                  }}
                />
              ))}
              <div className="central-stars"></div>
            </div>
            <div className="scale-indicator">
              <span>Diameter: ~30 trillion miles</span>
              <span>Distance: 5,000 light-years</span>
            </div>
          </div>

          <div className="controls">
            <div className="sides-control">
              <label>Wall Count:</label>
              <input 
                type="range" 
                min="4" 
                max="12" 
                value={sides}
                onChange={(e) => setSides(parseInt(e.target.value))}
              />
              <span>{sides}</span>
            </div>
            <button 
              className="reset-button"
              onClick={() => {
                setRotation(0);
                setSides(6);
              }}
            >
              Reset to Natural Form
            </button>
          </div>
        </div>

        <div className="theories-section">
          <h2>Scientific Theories</h2>
          <div className="theory-tabs">
            {Object.keys(theories).map((theory) => (
              <button
                key={theory}
                className={activeTheory === theory ? 'active' : ''}
                onClick={() => setActiveTheory(theory)}
                style={{
                  borderColor: theories[theory].color
                }}
              >
                {theories[theory].title}
              </button>
            ))}
          </div>
          <div className="theory-info" style={{
            borderColor: theories[activeTheory].color
          }}>
            <h3 style={{ color: theories[activeTheory].color }}>
              {theories[activeTheory].title}
            </h3>
            <p>{theories[activeTheory].description}</p>
            <div className="evidence">
              <strong>Supporting Evidence:</strong> {theories[activeTheory].evidence}
            </div>
          </div>
        </div>

        <div className="cosmic-wonder">
          <h3>Why This Baffles Astronomers:</h3>
          <ul>
            <li>Natural structures rarely show such perfect geometry</li>
            <li>Walls are 1,000x sharper than typical nebula boundaries</li>
            <li>Maintains structure despite stellar winds</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}