import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./home.module.css";
import Layout from "../../components/Layout/Layout";

export default function Home() {
  const navigate = useNavigate();
  
  return (
    <Layout>
      <div className={styles.hero}>
        <div className={styles.stars}></div>
        <div className={styles.twinkling}></div>
        
        <div className={styles.content}>
          <h1 className={styles.title}>Space Travel Hub</h1>
          <p className={styles.subtitle}>Explore the cosmos. Manage your fleet. Conquer new worlds.</p>
          
          <div className={styles.buttonGroup}>
            <button 
              className={styles.primaryButton}
              onClick={() => navigate("/planets")}
            >
              Explore Planets
            </button>
            <button
              className={styles.secondaryButton}
              onClick={() => navigate("/spacecrafts")}
            >
              Manage Spacecrafts
            </button>
          </div>
        </div>
        
        <div className={styles.scrollIndicator}>
          <span>Begin Journey</span>
          <div className={styles.arrow}></div>
        </div>
      </div>
      
      <div className={styles.features}>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>🌎</div>
          <h3>Planetary Management</h3>
          <p>Monitor and manage all planetary colonies in our solar system with real-time data.</p>
        </div>
        
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>🚀</div>
          <h3>Fleet Control</h3>
          <p>Command your spacecraft fleet with precision. Transfer vessels between planets instantly.</p>
        </div>
        
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>🛠️</div>
          <h3>Ship Construction</h3>
          <p>Design and build new spacecraft to expand your interstellar capabilities.</p>
        </div>
      </div>
    </Layout>
  );
}