import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.link}>Home</NavLink>
      <NavLink to="/planets" className={styles.link}>Planets</NavLink>
      <NavLink to="/spacecrafts" className={styles.link}>Spacecrafts</NavLink>
    </nav>
  );
}