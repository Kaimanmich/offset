import { useEffect, useState } from 'react';
import { Link as RouterLink, NavLink, useLocation } from 'react-router';
import { motion } from 'framer-motion';
import { MobileMenu, Navbar, Magnetic } from 'ui-kit';
import { NAV, STUDIO } from '../data/content.js';
import { Arrow } from './Arrow.jsx';
import { LocalTime } from './LocalTime.jsx';
import { Logo } from './Logo.jsx';
import styles from './Navigation.module.css';

const MENU_ITEMS = [{ to: '/', label: 'Home' }, ...NAV];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const [onLight, setOnLight] = useState(false);

  // Close the overlay whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  // Flip the bar's tone while a light (paper) section sits underneath it.
  useEffect(() => {
    let raf = 0;
    const check = () => {
      raf = 0;
      const under = document
        .elementsFromPoint(window.innerWidth / 2, 36)
        .find((el) => !el.closest('header'));
      setOnLight(Boolean(under?.closest('.light')));
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };
    check();
    const settle = setTimeout(check, 1300); // after a route transition has uncovered the page
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(settle);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <Navbar className={`${styles.nav} ${onLight ? styles.onLight : ''}`} solidAfter={24}>
        <div className={`grid ${styles.inner}`}>
          <RouterLink to="/" className={styles.logo} aria-label="Kaimanmich — naar de homepage">
            <Logo />
          </RouterLink>

          <nav className={styles.links} aria-label="Hoofdmenu">
            <ul>
              {NAV.map((item, i) => (
                <li key={item.to}>
                  <NavLink to={item.to} className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>
                    <span className={styles.num} aria-hidden="true">
                      0{i + 1}
                    </span>
                    <span className={styles.linkText}>{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <LocalTime className={`t-mono t-dim ${styles.time}`} />

          <Magnetic strength={0.2} className={styles.ctaWrap}>
            <RouterLink to="/contact" className={styles.cta} data-cursor-label="Contact">
              <span className={styles.ctaDot} aria-hidden="true" />
              Start een project
            </RouterLink>
          </Magnetic>

          <button
            type="button"
            className={`t-mono ${styles.menuButton}`}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen(true)}
          >
            Menu
            <span className={styles.menuGlyph} aria-hidden="true" />
          </button>
        </div>
      </Navbar>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        transition="clip"
        closeLabel="Menu sluiten"
        className={styles.menu}
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className={styles.menuTop}>
          <span className="t-mono t-dim">Menu</span>
          <LocalTime className="t-mono t-dim" />
        </div>
        <nav aria-label="Mobiel menu">
          <ul className={styles.menuList}>
            {MENU_ITEMS.map((item, i) => (
              <motion.li
                key={item.to}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.18 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                style={{ '--i': i }}
              >
                <NavLink
                  to={item.to}
                  end
                  className={({ isActive }) => `${styles.menuLink} ${isActive ? styles.menuActive : ''}`}
                >
                  <span className="t-mono">0{i + 1}</span>
                  {item.label}
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </nav>
        <div className={styles.menuFoot}>
          <a className={styles.menuMail} href={`mailto:${STUDIO.email}`}>
            {STUDIO.email}
          </a>
          <RouterLink to="/contact" className={`t-mono ${styles.menuCta}`}>
            Start een project <Arrow />
          </RouterLink>
        </div>
      </MobileMenu>
    </>
  );
}
