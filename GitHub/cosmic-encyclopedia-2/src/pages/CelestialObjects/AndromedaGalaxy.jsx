import React from 'react';
import PageLayout from '../../components/Layout/PageLayout';
import './AndromedaGalaxy.css'; // We'll create this

export default function AndromedaGalaxy() {
  const andromedaFacts = [
    "Also known as Messier 31 (M31)",
    "2.5 million light-years from Earth",
    "Contains about 1 trillion stars (2.5× Milky Way's stars)",
    "On collision course with Milky Way (in ~4.5 billion years)",
    "Diameter: ~220,000 light-years",
    "First recorded observation: 964 AD by Persian astronomer",
    "Visible to naked eye under dark skies"
  ];

  return (
    <PageLayout>
      <div className="andromeda-container">
        <header className="andromeda-header">
          <h1>Andromeda Galaxy <span className="m31-tag">M31</span></h1>
          <p className="subtitle">Our neighboring spiral galaxy</p>
        </header>

        <div className="andromeda-hero">
          <div className="galaxy-image"></div>
          <div className="distance-badge">
            <span className="number">2.5</span>
            <span className="unit">Million Light Years</span>
            <span className="label">From Earth</span>
          </div>
        </div>

        <div className="andromeda-content">
          <div className="facts-section">
            <h2>Key Characteristics</h2>
            <ul>
              {andromedaFacts.map((fact, index) => (
                <li key={index}>
                  <span className="fact-icon">✧</span>
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          <div className="collision-section">
            <h2>Galactic Collision Course</h2>
            <div className="collision-visual">
              <div className="milky-way"></div>
              <div className="collision-arrow">→←</div>
              <div className="andromeda-visual"></div>
            </div>
            <p>
              Andromeda is approaching the Milky Way at about 110 km/s. 
              In 4.5 billion years, they'll begin merging to form a new elliptical galaxy.
            </p>
          </div>
        </div>

        <div className="observation-tip">
          <h3>Observation Tip</h3>
          <p>
            Look northeast on autumn evenings. Andromeda appears as a faint, 
            elongated smudge between the constellations Andromeda and Cassiopeia.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}