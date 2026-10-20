import { useEffect, useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { CATEGORIES, closeConsentSettings, saveConsent, useConsent } from '../lib/consent.js';
import styles from './CookieBanner.module.css';

const EASE = [0.22, 1, 0.36, 1];

/**
 * First-visit consent banner + preferences panel. Accept, reject and
 * preferences carry equal visual weight; non-essential categories start off.
 * Reopened from the footer's "Cookie-instellingen".
 */
export function CookieBanner() {
  const { consent, panelOpen } = useConsent();
  const reduce = useReducedMotion();
  const [prefs, setPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const firstButton = useRef(null);

  const visible = !consent || panelOpen;
  const showPrefs = prefs || panelOpen;

  useEffect(() => {
    if (panelOpen) {
      setAnalytics(Boolean(consent?.analytics));
      firstButton.current?.focus();
    }
  }, [panelOpen, consent]);

  useEffect(() => {
    if (!panelOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && closeConsentSettings();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [panelOpen]);

  const decide = (value) => {
    saveConsent({ analytics: value });
    setPrefs(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.banner}
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-title"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: EASE, delay: consent ? 0 : 0.8 }}
        >
          <div className={styles.head}>
            <p id="cookie-title" className="t-mono">
              <span className={styles.mark} aria-hidden="true" /> Cookies &amp; privacy
            </p>
            {panelOpen && (
              <button type="button" className={`t-mono ${styles.close}`} onClick={closeConsentSettings}>
                Sluiten
              </button>
            )}
          </div>

          <p className={styles.text}>
            We volgen je niet. Er staan geen advertentie- of trackingcookies op deze site — alleen wat nodig is om
            hem te laten werken. Meer in ons{' '}
            <RouterLink to="/cookies" className="u-link">
              cookiebeleid
            </RouterLink>
            .
          </p>

          {showPrefs && (
            <ul className={styles.categories}>
              {CATEGORIES.map((c) => {
                const checked = c.locked ? true : analytics;
                return (
                  <li key={c.id}>
                    <label className={styles.toggleRow}>
                      <span>
                        <span className={styles.catLabel}>{c.label}</span>
                        <span className={styles.catText}>{c.text}</span>
                      </span>
                      <input
                        type="checkbox"
                        role="switch"
                        className={styles.switch}
                        checked={checked}
                        disabled={c.locked}
                        onChange={(e) => setAnalytics(e.target.checked)}
                      />
                    </label>
                  </li>
                );
              })}
            </ul>
          )}

          <div className={styles.actions}>
            <button ref={firstButton} type="button" className={styles.btn} onClick={() => decide(false)}>
              Alles weigeren
            </button>
            {showPrefs ? (
              <button type="button" className={styles.btn} onClick={() => decide(analytics)}>
                Keuze opslaan
              </button>
            ) : (
              <button type="button" className={styles.btn} onClick={() => setPrefs(true)}>
                Voorkeuren
              </button>
            )}
            <button type="button" className={styles.btn} onClick={() => decide(true)}>
              Alles accepteren
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
