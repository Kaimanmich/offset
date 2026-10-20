import { useRef } from 'react';
import { Link as RouterLink } from 'react-router';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ImageReveal, Parallax } from 'ui-kit';
import { Arrow } from '../../components/Arrow.jsx';
import { SectionHead } from '../../components/SectionHead.jsx';
import { IMAGES } from '../../data/content.js';
import { pexelsProps } from '../../lib/pexels.js';
import styles from './Intro.module.css';

// The statement, grouped so single phrases can carry their own treatment.
const GROUPS = [
  { words: ['Kaimanmich'], kind: 'strong' },
  { words: ['is', 'een'] },
  { words: ['onafhankelijke'], kind: 'cond' },
  { words: ['digitale', 'designstudio', 'die'] },
  { words: ['opvallende', 'websites'], kind: 'mark' },
  { words: ['bouwt', 'voor', 'merken', 'die'] },
  { words: ['weigeren', 'gewoon', 'te', 'ogen.'], kind: 'off' },
];
const TOTAL = GROUPS.reduce((n, g) => n + g.words.length, 0);

const DISCIPLINES = ['Art direction', 'Interfacedesign', 'Ontwikkeling', 'Motion', 'Hosting & onderhoud'];

function Word({ progress, index, children }) {
  const opacity = useTransform(progress, [index / TOTAL, (index + 1) / TOTAL], [0.16, 1]);
  return <motion.span style={{ opacity }}>{children} </motion.span>;
}

function Group({ group, start, progress, reduce }) {
  const end = (start + group.words.length) / TOTAL;
  const underline = useTransform(progress, [end - 0.02, end + 0.06], [0, 1]);
  const shift = useTransform(progress, [end - 0.04, end + 0.08], [0, 1]);
  const shadow = useTransform(shift, (v) => `${(-0.05 * v).toFixed(3)}em ${(0.045 * v).toFixed(3)}em 0 rgba(200, 255, 61, ${(0.6 * v).toFixed(2)})`);

  const words = group.words.map((w, i) =>
    reduce ? (
      <span key={w}>{w} </span>
    ) : (
      <Word key={w} progress={progress} index={start + i}>
        {w}
      </Word>
    ),
  );

  if (group.kind === 'mark') {
    return (
      <span className={styles.mark}>
        {words}
        <motion.span className={styles.underline} style={{ scaleX: reduce ? 1 : underline }} aria-hidden="true" />
      </span>
    );
  }
  if (group.kind === 'off') {
    return (
      <motion.span className={styles.off} style={{ textShadow: reduce ? undefined : shadow }}>
        {words}
      </motion.span>
    );
  }
  return <span className={group.kind ? styles[group.kind] : undefined}>{words}</span>;
}

export function Intro() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.5'] });

  let cursor = 0;
  return (
    <section className={`shell ${styles.intro}`} aria-labelledby="intro-label">
      <SectionHead index="01" id="intro-label" label="Studio" aside="Onafhankelijk — België" />

      <p ref={ref} className={styles.statement}>
        {GROUPS.map((g) => {
          const start = cursor;
          cursor += g.words.length;
          return <Group key={start} group={g} start={start} progress={scrollYProgress} reduce={reduce} />;
        })}
      </p>

      <div className={`grid ${styles.below}`}>
        <figure className={styles.figure}>
          <figcaption className="t-mono t-dim">Fig. 01 — Beton, licht, ingetogenheid</figcaption>
          <Parallax speed={-0.12}>
            <ImageReveal
              {...pexelsProps(IMAGES.concreteLines, '(max-width: 720px) 80vw, 30vw', 1080)}
              loading="lazy"
              direction="up"
              ratio="3 / 4"
              className="photo"
            />
          </Parallax>
        </figure>

        <div className={styles.copy}>
          <p className="t-lead t-pretty">
            We nemen maar een beperkt aantal projecten tegelijk aan. Strategie, art direction, design en ontwikkeling
            blijven onder één dak — zodat wat ontworpen wordt ook exact zo gebouwd wordt.
          </p>
          <ul className={styles.disciplines} aria-label="Disciplines">
            {DISCIPLINES.map((d, i) => (
              <li key={d}>
                <span className="t-mono t-dim">{String(i + 1).padStart(2, '0')}</span>
                {d}
              </li>
            ))}
          </ul>
          <RouterLink to="/contact" className={`t-mono ${styles.talk}`}>
            <span className="u-link">Vertel ons over je project</span> <Arrow />
          </RouterLink>
        </div>
      </div>
    </section>
  );
}
