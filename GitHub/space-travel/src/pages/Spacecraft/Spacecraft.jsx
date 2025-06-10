import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import styles from "./Spacecraft.module.css";
import { useState, useEffect } from "react";
import SpaceTravelApi from "../../services/SpaceTravelApi";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import PlanetBadge from "./PlanetBadge";

export default function Spacecraft() {
  const { id } = useParams();
  const [spacecraft, setSpacecraft] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPlanet, setCurrentPlanet] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadSpacecraftData() {
      setIsLoading(true);
      try {
        const [spacecraftRes, planetsRes] = await Promise.all([
          SpaceTravelApi.getSpacecraftById({ id }),
          SpaceTravelApi.getPlanets()
        ]);

        if (!spacecraftRes.isError && !planetsRes.isError) {
          setSpacecraft(spacecraftRes.data);
          const planet = planetsRes.data.find(
            p => p.id === spacecraftRes.data.currentLocation
          );
          setCurrentPlanet(planet || null);
        }
      } catch (error) {
        console.error("Error loading spacecraft data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadSpacecraftData();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to permanently delete this spacecraft?")) return;
    
    setIsDeleting(true);
    try {
      await SpaceTravelApi.destroySpacecraftById({ id });
      navigate("/spacecrafts", { state: { message: "Spacecraft deleted successfully" } });
    } catch (error) {
      console.error("Error deleting spacecraft:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div className={styles.loadingContainer}>
          <LoadingSpinner />
          <p>Loading spacecraft data...</p>
        </div>
      </Layout>
    );
  }

  if (!spacecraft) {
    return (
      <Layout>
        <div className={styles.notFound}>
          <h2>Spacecraft Not Found</h2>
          <p>The spacecraft you're looking for doesn't exist or may have been moved.</p>
          <button 
            className={styles.primaryButton}
            onClick={() => navigate("/spacecrafts")}
          >
            Browse All Spacecrafts
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.imageContainer}>
            {spacecraft.pictureUrl ? (
              <img
                src={spacecraft.pictureUrl}
                alt={spacecraft.name}
                className={styles.image}
              />
            ) : (
              <div className={styles.imagePlaceholder}>🚀</div>
            )}
          </div>
          <div className={styles.headerContent}>
            <h1 className={styles.title}>{spacecraft.name}</h1>
            {currentPlanet && (
              <div className={styles.location}>
                <span>Currently stationed at:</span>
                <PlanetBadge 
                  planet={currentPlanet}
                  className={styles.planetBadge}
                />
              </div>
            )}
          </div>
        </div>

        <div className={styles.details}>
          <div className={styles.detailCard}>
            <h3>Specifications</h3>
            <div className={styles.specsGrid}>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Capacity</span>
                <span className={styles.specValue}>{spacecraft.capacity} passengers</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Status</span>
                <span className={styles.specValue}>Operational</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Construction Date</span>
                <span className={styles.specValue}>N/A</span>
              </div>
            </div>
          </div>

          <div className={styles.detailCard}>
            <h3>Description</h3>
            <p className={styles.description}>{spacecraft.description}</p>
          </div>
        </div>

        <div className={styles.buttonGroup}>
          <button
            className={styles.secondaryButton}
            onClick={() => navigate("/spacecrafts")}
          >
            &larr; Back to Fleet
          </button>
          <div className={styles.actionButtons}>
            <button
              className={styles.primaryButton}
              onClick={() => navigate(`/spacecrafts/edit/${id}`)}
            >
              Edit Specifications
            </button>
            <button 
              className={styles.dangerButton} 
              onClick={handleDelete}
              disabled={isDeleting}
            >
              {isDeleting ? (
                <>
                  <span className={styles.spinner}></span>
                  Deleting...
                </>
              ) : (
                "Decommission Spacecraft"
              )}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}