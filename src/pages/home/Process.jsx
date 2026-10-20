import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { Link as RouterLink } from 'react-router';
import { Arrow } from '../../components/Arrow.jsx';
import { GridLines } from '../../components/GridLines.jsx';
import { SectionHead } from '../../components/SectionHead.jsx';
import { PROCESS } from '../../data/content.js';
import styles from './Process.module.css';

const pad = (n) => String(n).padStart(2, '0');

/**
 * Vertical timeline. A sticky counter tracks the stage in view; the stage
 * under the reading line expands to reveal its detail, and an accent rule
 * fills down the timeline with scroll.
 */
export function Process() {
  const listRef = useRef(null);
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 0.55', 'end 0.55'] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  useEffect(() => {
    const items = listRef.current?.querySelectorAll('[data-step]');
    if (!items) return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(Number(e.target.dataset.step)));
      },
      { rootMargin: '-42% 0px -52% 0px' },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className={styles.process} aria-labelledby="process-label">
      <GridLines />
      <div className={`shell ${styles.inner}`}>
        <SectionHead index="04" id="process-label" label="Werkwijze" aside="Vijf fasen — één team" />

        <div className={`grid ${styles.body}`}>
          <div className={styles.sticky}>
            <p className={`t-display t-narrow ${styles.lead}`}>
              Zo werken
              <br />
              <span className={styles.leadOffset}>we.</span>
            </p>
            <div className={styles.counter} aria-hidden="true">
              <span className={styles.counterMask}>
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={active}
                    className={styles.counterNum}
                    initial={reduce ? { opacity: 0 } : { y: '100%' }}
                    animate={{ y: '0%', opacity: 1 }}
                    exit={reduce ? { opacity: 0 } : { y: '-100%' }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {pad(active + 1)}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className={`t-mono t-dim ${styles.counterTotal}`}>/ {pad(PROCESS.length)}</span>
            </div>
            <p className={`t-dim ${styles.note}`}>
              Geen overdracht tussen vreemden: wie je project uitstippelt, ontwerpt en bouwt het ook.
            </p>
          </div>

          <div className={styles.timeline}>
            <span className={styles.track} aria-hidden="true">
              <motion.span className={styles.trackFill} style={{ scaleY: reduce ? 1 : fill }} />
            </span>
            <ol ref={listRef} className={styles.steps}>
              {PROCESS.map((step, i) => (
                <li
                  key={step.title}
                  data-step={i}
                  className={`${styles.step} ${active === i ? styles.active : ''}`}
                  onPointerEnter={(e) => e.pointerType === 'mouse' && setActive(i)}
                >
                  <span className={styles.node} aria-hidden="true" />
                  <span className={`t-mono ${styles.stepNum}`}>{pad(i + 1)} —</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <div className={styles.detailWrap}>
                    <div className={styles.detail}>
                      <p className="t-lead t-pretty">{step.text}</p>
                      <ul className={styles.tags} aria-label={`Onderdelen van ${step.title.toLowerCase()}`}>
                        {step.tags.map((t) => (
                          <li key={t} className="t-mono">
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
            <RouterLink to="/contact" className={`t-mono ${styles.stepCta}`}>
              <span className="u-link">Begin bij stap 01 — vertel ons wat je nodig hebt</span> <Arrow />
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  );
}
