import { useState } from 'react';
import PageLayout from "../../components/Layout/PageLayout";
import './Supernovas.css';

export default function Supernovas() {
  const [activeType, setActiveType] = useState('typeII');
  
  const supernovaData = {
    typeII: {
      title: "Type II Supernovae",
      description: "Massive star collapse (>8 solar masses)",
      features: [
        "Hydrogen lines in spectrum",
        "Leaves behind neutron star or black hole",
        "Peak luminosity: 10⁴⁴ ergs (100 billion suns)",
        "Examples: SN 1987A (Large Magellanic Cloud), Crab Nebula (SN 1054)"
      ],
      color: "#f59e0b"
    },
    typeIa: {
      title: "Type Ia Supernovae",
      description: "White dwarf thermonuclear explosion",
      features: [
        "No hydrogen lines in spectrum",
        "Standard candles for measuring cosmic distances",
        "Completely destroys the white dwarf",
        "Examples: SN 1572 (Tycho's Supernova), SN 1006 (brightest recorded)"
      ],
      color: "#ef4444"
    },
    stats: {
      title: "Supernova Statistics",
      description: "Universal cosmic explosions",
      features: [
        "Frequency: 2-3 per century in Milky Way",
        "Energy output: 10⁴⁴ joules (1 foe)",
        "Core temperature: 100 billion °C at peak",
        "Produces heavy elements: iron, gold, uranium",
        "Shock waves trigger new star formation"
      ],
      color: "#8b5cf6"
    }
  };

  return (
    <PageLayout>
      <div className="supernova-container">
        <header className="supernova-header">
          <h1>Supernovae</h1>
          <p className="subtitle">The universe's most violent explosions</p>
        </header>

        <div className="supernova-visual" style={{ "--active-color": supernovaData[activeType].color }}>
          <div className="explosion-animation"></div>
          <div className="shockwave"></div>
          <div className="energy-badge">
            <span className="value">1 FOE</span>
            <span className="label">(10⁴⁴ joules)</span>
          </div>
        </div>

        <div className="type-selector">
          <button 
            className={activeType === 'typeII' ? 'active' : ''}
            onClick={() => setActiveType('typeII')}
            style={{ "--btn-color": "#f59e0b" }}
          >
            Type II
          </button>
          <button 
            className={activeType === 'typeIa' ? 'active' : ''}
            onClick={() => setActiveType('typeIa')}
            style={{ "--btn-color": "#ef4444" }}
          >
            Type Ia
          </button>
          <button 
            className={activeType === 'stats' ? 'active' : ''}
            onClick={() => setActiveType('stats')}
            style={{ "--btn-color": "#8b5cf6" }}
          >
            Statistics
          </button>
        </div>

        <div className="info-panel">
          <h2>{supernovaData[activeType].title}</h2>
          <p className="description">{supernovaData[activeType].description}</p>
          
          <div className="features">
            <h3>Key Information:</h3>
            <ul>
              {supernovaData[activeType].features.map((feature, i) => (
                <li key={i}>
                  <span className="feature-icon">✴</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="cosmic-quote">
          <blockquote>
            "We are all made of star-stuff. The carbon, nitrogen and oxygen in our bodies 
            was created in the cores of stars that went supernova."
            <footer>- Carl Sagan</footer>
          </blockquote>
        </div>
      </div>
    </PageLayout>
  );
}