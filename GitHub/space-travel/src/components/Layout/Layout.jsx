import { useState, useEffect } from 'react';
import Navigation from '../Navigation/Navigation';
import styles from './Layout.module.css';
import { useLocation } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <ScrollToTop />
      <Navigation className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`} />
      
      <main className={styles.main}>
        <div 
          className={styles.content}
          key={location.pathname} // Force re-render on route change
        >
          {children}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Space Travel Hub | Explore the Cosmos</p>
      </footer>
    </div>
  );
}