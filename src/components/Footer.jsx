import { Link as RouterLink } from 'react-router';
import { STUDIO } from '../data/content.js';
import { openConsentSettings } from '../lib/consent.js';
import { Arrow } from './Arrow.jsx';
import { RegMark } from './RegMark.jsx';
import styles from './Footer.module.css';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/diensten', label: 'Diensten' },
  { to: '/projecten', label: 'Projecten' },
  { to: '/contact', label: 'Contact' },
];

export function Footer() {
  const { legal } = STUDIO;
  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <footer className={`shell ${styles.footer}`}>
      <div className={`grid ${styles.top}`}>
        <div className={styles.brand}>
          <p className={styles.name}>KAIMANMICH</p>
          <p className="t-mono t-dim">{STUDIO.tagline}</p>
        </div>

        <nav className={`${styles.col} ${styles.index}`} aria-label="Footer">
          <p className="t-mono t-dim">Pagina's</p>
          <ul>
            {LINKS.map((l) => (
              <li key={l.to}>
                <RouterLink to={l.to} className="u-link">
                  {l.label}
                </RouterLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={`${styles.col} ${styles.company}`}>
          <p className="t-mono t-dim">Onderneming</p>
          <address>
            <ul>
              <li>{legal.name}</li>
              <li>{legal.street}</li>
              <li>
                {legal.postalCode} {legal.city}
              </li>
              <li className="t-mono t-dim">Btw {legal.vat}</li>
            </ul>
          </address>
        </div>

        <div className={`${styles.col} ${styles.contact}`}>
          <p className="t-mono t-dim">{STUDIO.location}</p>
          <a href={`mailto:${STUDIO.email}`} className={`u-link ${styles.mail}`}>
            {STUDIO.email}
          </a>
          <RouterLink to="/contact" className={`t-mono ${styles.footCta}`}>
            Start een project <Arrow />
          </RouterLink>
        </div>
      </div>

      <div className={styles.bottom}>
        <span className="t-mono">© 2026 Kaimanmich — btw-vrijgesteld</span>
        <span className={`t-mono t-dim ${styles.coords}`}>
          <RegMark size={12} /> {STUDIO.coordinates}
        </span>
        <nav className={styles.legal} aria-label="Juridisch">
          <RouterLink to="/privacy" className="t-mono t-dim u-link">
            Privacyverklaring
          </RouterLink>
          <RouterLink to="/cookies" className="t-mono t-dim u-link">
            Cookiebeleid
          </RouterLink>
          <RouterLink to="/voorwaarden" className="t-mono t-dim u-link">
            Algemene voorwaarden
          </RouterLink>
          <button type="button" className="t-mono t-dim u-link" onClick={openConsentSettings}>
            Cookie-instellingen
          </button>
        </nav>
        <button type="button" className={`t-mono ${styles.top_btn}`} onClick={toTop}>
          Naar boven <Arrow direction="up" />
        </button>
      </div>
    </footer>
  );
}
