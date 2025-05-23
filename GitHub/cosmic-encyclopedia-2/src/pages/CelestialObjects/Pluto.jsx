import PageLayout from "../../components/Layout/PageLayout";
import './Pluto.css'; // We'll create this

export default function Pluto() {
  const plutoFacts = [
    "Once considered the 9th planet, now classified as a dwarf planet",
    "Has a heart-shaped glacier called Tombaugh Regio",
    "Orbits the sun every 248 Earth years",
    "Has 5 known moons, with Charon being the largest",
    "Surface temperature: -375°F (-225°C)",
    "A day on Pluto lasts 153 Earth hours"
  ];

  return (
    <PageLayout>
      <div className="pluto-container">
        <header className="pluto-header">
          <h1>Pluto <span className="dwarf-tag">Dwarf Planet</span></h1>
          <p className="subtitle">The mysterious world at the edge of our solar system</p>
        </header>

        <div className="pluto-content">
          <div className="pluto-image-container">
            <div className="pluto-image"></div>
            <p className="image-caption">New Horizons spacecraft view of Pluto (2015)</p>
          </div>

          <div className="pluto-facts">
            <h2>Did you know?</h2>
            <ul>
              {plutoFacts.map((fact, index) => (
                <li key={index}>{fact}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pluto-exploration">
          <h2>Exploration History</h2>
          <p>
            NASA's New Horizons became the first spacecraft to visit Pluto in 2015, 
            revealing stunning details about its surface and atmosphere.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}