import { useEffect, useRef, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { SERVICES, formatPrice } from '../data/content.js';
import { useConsent } from '../lib/consent.js';
import { Arrow } from './Arrow.jsx';
import { CropMarks } from './CropMarks.jsx';
import styles from './PromoPopup.module.css';

const KEY = 'kaimanmich-promo-dismissed';
const SNOOZE_DAYS = 7;
const DELAY_MS = 12_000;
const SCROLL_TRIGGER = 0.45;
const HIDDEN_ON = ['/contact', '/privacy', '/cookies'];
const EASE = [0.22, 1, 0.36, 1];

const landing = SERVICES.find((s) => s.slug === 'landingspagina');

function recentlyDismissed() {
  try {
    const at = Number(localStorage.getItem(KEY));
    return at && Date.now() - at < SNOOZE_DAYS * 864e5;
  } catch {
    return false;
  }
}

/**
 * Small centred offer card: "Landingspagina vanaf €295". Appears once per
 * visit — after 12 s or 45 % scroll, never before the cookie choice is made,
 * never on contact/legal pages — and stays away for a week once closed.
 */
export function PromoPopup() {
  const { consent, panelOpen } = useConsent();
  const { pathname } = useLocation();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const shown = useRef(false);
  const dialogRef = useRef(null);
  const returnFocus = useRef(null);

  const blocked = !consent || panelOpen || HIDDEN_ON.includes(pathname);

  useEffect(() => {
    if (blocked || shown.current || recentlyDismissed()) return undefined;
    const show = () => {
      if (shown.current) return;
      shown.current = true;
      returnFocus.current = document.activeElement;
      setOpen(true);
    };
    const timer = setTimeout(show, DELAY_MS);
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max > SCROLL_TRIGGER) show();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, [blocked]);

  // Navigating to the contact page (e.g. through the CTA) closes it.
  useEffect(() => {
    if (HIDDEN_ON.includes(pathname)) setOpen(false);
  }, [pathname]);

  const close = () => {
    setOpen(false);
    try {
      localStorage.setItem(KEY, String(Date.now()));
    } catch {
      // Storage blocked: it simply won't come back during this visit.
    }
    returnFocus.current?.focus?.();
  };

  useEffect(() => {
    if (!open) return undefined;
    dialogRef.current?.querySelector('a, button')?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key !== 'Tab' || !dialogRef.current) return;
      const items = [...dialogRef.current.querySelectorAll('a, button')];
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.backdrop}
          onClick={(e) => e.target === e.currentTarget && close()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            ref={dialogRef}
            className={styles.card}
            role="dialog"
            aria-modal="true"
            aria-labelledby="promo-title"
            aria-describedby="promo-text"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, clipPath: 'inset(8% 0% 8% 0%)' }}
            animate={{ opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <button type="button" className={styles.close} onClick={close} aria-label="Aanbieding sluiten">
              <span aria-hidden="true" />
            </button>

            <p className={`t-mono ${styles.kicker}`}>
              <span className={styles.mark} aria-hidden="true" /> Instappakket
            </p>
            <h2 id="promo-title" className={styles.title}>
              Landingspagina
              <span className={styles.price}>
                <span className={styles.from}>vanaf</span> {formatPrice(landing.price)}
              </span>
            </h2>
            <p id="promo-text" className={styles.text}>
              Eén pagina op maat — ontworpen, gebouwd en live gezet. Ideaal voor een lancering, campagne of je eerste
              stap online.
            </p>

            <RouterLink to="/contact?type=landingspagina" className={styles.cta} onClick={close} data-cursor-label="Contact">
              <span className={styles.ctaFill} aria-hidden="true" />
              <span className={styles.ctaLabel}>Vraag je landingspagina aan</span>
              <Arrow />
            </RouterLink>
            <button type="button" className={`t-mono ${styles.later}`} onClick={close}>
              Misschien later
            </button>
            <CropMarks className={styles.marks} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
