import { useState } from 'react';
import PageLayout from "../../components/Layout/PageLayout";
import './Blackholes.css';

export default function Blackholes() {
  const [activeTab, setActiveTab] = useState('basics');
  
  const blackholeFacts = {
    basics: [
      "Formed when massive stars collapse under their own gravity",
      "Gravity so strong that not even light can escape",
      "First image captured in 2019 by Event Horizon Telescope",
      "Exist at the center of most galaxies, including Milky Way"
    ],
    types: [
      "Stellar black holes (3-20 solar masses)",
      "Supermassive black holes (millions to billions solar masses)",
      "Intermediate black holes (100-100,000 solar masses)",
      "Primordial black holes (hypothetical, formed after Big Bang)"
    ],
    phenomena: [
      "Spaghettification: Stretching effect near singularity",
      "Hawking radiation: Theoretical black hole evaporation",
      "Accretion disks: Superheated matter orbiting at near-light speed",
      "Relativistic jets: High-energy beams perpendicular to disk"
    ]
  };

  return (
    <PageLayout>
      <div className="blackhole-container">
        <header className="blackhole-header">
          <h1>Black Holes</h1>
          <p className="subtitle">Cosmic vacuum cleaners with infinite density</p>
        </header>

        <div className="blackhole-visual">
          <div className="event-horizon">
            <div className="accretion-disk"></div>
            <div className="singularity"></div>
            <div className="gravitational-lens"></div>
          </div>
          <div className="visual-legend">
            <span>Accretion Disk</span>
            <span>Event Horizon</span>
            <span>Gravitational Lensing</span>
          </div>
        </div>

        <div className="info-tabs">
          <button 
            className={activeTab === 'basics' ? 'active' : ''}
            onClick={() => setActiveTab('basics')}
          >
            Basics
          </button>
          <button 
            className={activeTab === 'types' ? 'active' : ''}
            onClick={() => setActiveTab('types')}
          >
            Types
          </button>
          <button 
            className={activeTab === 'phenomena' ? 'active' : ''}
            onClick={() => setActiveTab('phenomena')}
          >
            Phenomena
          </button>
        </div>

        <div className="facts-container">
          <ul className="blackhole-facts">
            {blackholeFacts[activeTab].map((fact, index) => (
              <li key={index}>
                <div className="fact-decorator"></div>
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <div className="einstein-quote">
          <blockquote>
            "Black holes are where God divided by zero"
            <footer>- Albert Einstein</footer>
          </blockquote>
        </div>
      </div>
    </PageLayout>
  );
}