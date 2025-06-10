import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./Spacecrafts.module.css";
import SpaceTravelApi from "../../services/SpaceTravelApi";
import { useNavigate } from "react-router-dom";

export default function Spacecrafts() {
  const [spacecrafts, setSpacecrafts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    async function loadSpaceCrafts() {
      const response = await SpaceTravelApi.getSpacecrafts();
      if (!response.isError) {
        setSpacecrafts(response.data);
      }
      setIsLoading(false);
    }
    loadSpaceCrafts();
  }, []);

  const navigate = useNavigate();

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Spacecrafts</h1>
        <button
          className={styles.createButton}
          onClick={() => navigate("/spacecrafts/new")}
        >
          + New Spacecraft
        </button>

        {isLoading ? (
          <p>Loading spacecrafts...</p>
        ) : (
          <div className={styles.grid}>
            {spacecrafts.map((spacecraft) => (
              <div key={spacecraft.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  {/* Spacecraft Image */}
                  {spacecraft.pictureUrl ? (
                    <img 
                      src={spacecraft.pictureUrl} 
                      alt={spacecraft.name}
                      className={styles.spacecraftImage}
                    />
                  ) : (
                    <div className={styles.placeholderImage}>
                      🚀
                    </div>
                  )}
                  <h3>{spacecraft.name}</h3>
                </div>
                <p>Capacity: {spacecraft.capacity}</p>
                <p>{spacecraft.description}</p>
                <button
                  className={styles.detailsButton}
                  onClick={() => navigate(`/spacecrafts/${spacecraft.id}`)}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}