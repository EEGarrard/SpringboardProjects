import styles from './PlanetBadge.module.css';

export default function PlanetBadge({ planet, className = '' }) {
  return (
    <span className={`${styles.badge} ${className}`}>
      {planet.name}
    </span>
  );
}