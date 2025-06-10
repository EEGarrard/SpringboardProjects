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
      <div className={styles.spacePattern}></div>
      
      <ScrollToTop />
      <Navigation className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`} />
      
      <main className={styles.main}>
        <div 
          className={styles.content}
          key={location.pathname}
        >
          {children}
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>© {new Date().getFullYear()} Interstellar Fleet Command</p>
          <div className={styles.footerLinks}>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Contact Command</a>
          </div>
        </div>
      </footer>
    </div>
  );
}