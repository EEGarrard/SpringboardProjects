import React, { useState, useEffect } from "react";
import styles from "./planets.module.css";
import SpaceTravelApi from "../../services/SpaceTravelApi";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Layout from "../../components/Layout/Layout";

export default function Planets() {
  const [planets, setPlanets] = useState([]);
  const [spacecrafts, setSpacecrafts] = useState([]);
  const [transferData, setTransferData] = useState({
    spacecraftId: null,
    fromPlanetId: null,
    toPlanetId: null
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isTransferring, setIsTransferring] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const [planetsRes, spacecraftsRes] = await Promise.all([
          SpaceTravelApi.getPlanets(),
          SpaceTravelApi.getSpacecrafts()
        ]);

        if (!planetsRes.isError && !spacecraftsRes.isError) {
          setPlanets(planetsRes.data);
          setSpacecrafts(spacecraftsRes.data);
        } else {
          setError("Failed to load planetary data");
        }
      } catch (err) {
        setError("Interstellar connection problem");
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  const handleTransfer = async () => {
    if (!transferData.spacecraftId || !transferData.toPlanetId) return;

    setIsTransferring(true);
    setError(null);

    try {
      const response = await SpaceTravelApi.sendSpacecraftToPlanet({
        spacecraftId: transferData.spacecraftId,
        targetPlanetId: transferData.toPlanetId
      });

      if (response.isError) throw new Error(response.data || "Transfer failed");

      setSpacecrafts(prev => 
        prev.map(ship => 
          ship.id === transferData.spacecraftId
            ? { ...ship, currentLocation: transferData.toPlanetId }
            : ship
        )
      );

      setTransferData({ spacecraftId: null, fromPlanetId: null, toPlanetId: null });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsTransferring(false);
    }
  };

  const getSpacecraftsForPlanet = (planetId) => {
    return spacecrafts.filter(ship => ship.currentLocation === planetId);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Planetary Hub</h1>
          <p className={styles.subtitle}>Manage spacecraft deployments across the solar system</p>
        </header>

        {error && (
          <div className={styles.errorBanner}>
            <span>{error}</span>
            <button 
              className={styles.retryButton}
              onClick={() => window.location.reload()}
            >
              Retry Connection
            </button>
          </div>
        )}

        {isLoading ? (
          <div className={styles.loadingContainer}>
            <LoadingSpinner />
            <p>Establishing quantum link to planets...</p>
          </div>
        ) : (
          <div className={styles.planetsGrid}>
            {planets.map(planet => (
              <div 
                key={planet.id} 
                className={`${styles.planetCard} ${planet.currentPopulation > 0 ? styles.inhabited : ''}`}
              >
                <div className={styles.planetHeader}>
                  {planet.pictureUrl && (
                    <img 
                      src={planet.pictureUrl} 
                      alt={planet.name} 
                      className={styles.planetImage}
                    />
                  )}
                  <div>
                    <h2 className={styles.planetName}>{planet.name}</h2>
                    <div className={styles.population}>
                      <span>👥 Population:</span>
                      <span>{planet.currentPopulation.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.spacecraftSection}>
                  <h3 className={styles.sectionTitle}>
                    Stationed Spacecrafts 
                    <span className={styles.countBadge}>
                      {getSpacecraftsForPlanet(planet.id).length}
                    </span>
                  </h3>
                  
                  {getSpacecraftsForPlanet(planet.id).length > 0 ? (
                    <ul className={styles.spacecraftList}>
                      {getSpacecraftsForPlanet(planet.id).map(spacecraft => (
                        <li key={spacecraft.id} className={styles.spacecraftItem}>
                          <div className={styles.spacecraftInfo}>
                            {spacecraft.pictureUrl ? (
                              <img 
                                src={spacecraft.pictureUrl} 
                                alt={spacecraft.name}
                                className={styles.spacecraftThumbnail}
                              />
                            ) : (
                              <div className={styles.spacecraftPlaceholder}>🚀</div>
                            )}
                            <div>
                              <h4>{spacecraft.name}</h4>
                              <p>Capacity: {spacecraft.capacity}</p>
                            </div>
                          </div>
                          <button
                            className={styles.transferButton}
                            onClick={() => setTransferData({
                              spacecraftId: spacecraft.id,
                              fromPlanetId: planet.id,
                              toPlanetId: null
                            })}
                            disabled={isTransferring}
                          >
                            Transfer
                            {isTransferring && spacecraft.id === transferData.spacecraftId && (
                              <span className={styles.transferSpinner}></span>
                            )}
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className={styles.noShips}>No spacecrafts stationed</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Transfer Modal */}
        {transferData.spacecraftId && (
          <div className={styles.modalOverlay}>
            <div className={styles.modal}>
              <div className={styles.modalHeader}>
                <h3>
                  Prepare Transfer: {spacecrafts.find(s => s.id === transferData.spacecraftId)?.name}
                </h3>
                <button 
                  className={styles.closeModal}
                  onClick={() => setTransferData({
                    spacecraftId: null,
                    fromPlanetId: null,
                    toPlanetId: null
                  })}
                >
                  &times;
                </button>
              </div>
              
              <div className={styles.modalBody}>
                <div className={styles.transferVisual}>
                  <span className={styles.planetIndicator}>
                    {planets.find(p => p.id === transferData.fromPlanetId)?.name}
                  </span>
                  <span className={styles.transferArrow}>→</span>
                  <span className={styles.planetIndicator}>
                    {transferData.toPlanetId 
                      ? planets.find(p => p.id === transferData.toPlanetId)?.name
                      : "Select destination"}
                  </span>
                </div>

                <label className={styles.selectLabel}>
                  Destination Planet
                  <select
                    value={transferData.toPlanetId || ""}
                    onChange={(e) => setTransferData({
                      ...transferData,
                      toPlanetId: Number(e.target.value)
                    })}
                    disabled={isTransferring}
                    className={styles.planetSelect}
                  >
                    <option value="">Select a planet</option>
                    {planets
                      .filter(p => p.id !== transferData.fromPlanetId)
                      .map(planet => (
                        <option key={planet.id} value={planet.id}>
                          {planet.name} (Pop: {planet.currentPopulation.toLocaleString()})
                        </option>
                      ))}
                  </select>
                </label>
              </div>

              <div className={styles.modalFooter}>
                <button
                  className={styles.secondaryButton}
                  onClick={() => setTransferData({
                    spacecraftId: null,
                    fromPlanetId: null,
                    toPlanetId: null
                  })}
                  disabled={isTransferring}
                >
                  Cancel
                </button>
                <button
                  className={styles.primaryButton}
                  onClick={handleTransfer}
                  disabled={!transferData.toPlanetId || isTransferring}
                >
                  {isTransferring ? (
                    <>
                      <span className={styles.buttonSpinner}></span>
                      Transferring...
                    </>
                  ) : (
                    "Confirm Transfer"
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}