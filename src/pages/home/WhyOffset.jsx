import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ImageParallax } from 'ui-kit';
import { MagneticButton } from '../../components/MagneticButton.jsx';
import { RevealText } from '../../components/RevealText.jsx';
import { SectionHead } from '../../components/SectionHead.jsx';
import { IMAGES } from '../../data/content.js';
import { pexelsProps } from '../../lib/pexels.js';
import styles from './WhyOffset.module.css';

const REFUSALS = [
  ['Geen', 'gerecyclede layouts.'],
  ['Geen', 'overbodige decoratie.'],
  ['Geen', 'one-size-fits-all-oplossingen.'],
];

export function WhyOffset() {
  const reduce = useReducedMotion();
  const stageRef = useRef(null);
  const imageRef = useRef(null);
  const [clip, setClip] = useState('inset(0 0 0 100%)');

  const lines = [
    { node: 'Geen', className: styles.l1 },
    { node: 'zoveelste', className: styles.l2 },
    { node: 'template.', className: styles.l3 },
  ];

  // The outlined copy of the title only exists inside the photo's frame.
  useEffect(() => {
    const stage = stageRef.current;
    const image = imageRef.current;
    if (!stage || !image) return undefined;
    const measure = () => {
      const s = stage.getBoundingClientRect();
      const i = image.getBoundingClientRect();
      setClip(`inset(${i.top - s.top}px ${s.right - i.right}px ${s.bottom - i.bottom}px ${i.left - s.left}px)`);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(stage);
    ro.observe(image);
    return () => ro.disconnect();
  }, []);

  return (
    <section className={`light ${styles.why}`} aria-labelledby="why-title">
      <div className={`shell ${styles.inner}`}>
        <SectionHead index="05" label="Waarom Kaimanmich" aside="Positionering" as="p" />

        <div ref={stageRef} className={styles.stage}>
          <RevealText
            as="h2"
            id="why-title"
            className={`t-display t-narrow ${styles.title}`}
            lines={lines}
            stagger={0.12}
          />

          <div ref={imageRef} className={`photo ${styles.image}`}>
            <ImageParallax
              {...pexelsProps(IMAGES.spiral, '(max-width: 720px) 70vw, 32vw', 1080)}
              loading="lazy"
              speed={0.2}
              ratio="4 / 5"
            />
          </div>

          <RevealText
            as="p"
            aria-hidden="true"
            className={`t-display t-narrow ${styles.title} ${styles.outline}`}
            style={{ clipPath: clip }}
            lines={lines}
            stagger={0.12}
          />
        </div>

        <div className={`grid ${styles.copy}`}>
          <p className={`t-h4 t-pretty ${styles.support}`}>
            Elke website wordt ontworpen rond het merk, het publiek en de ambitie erachter.
          </p>
          <div className={styles.cta}>
            <MagneticButton to="/contact" variant="ink" cursor="Contact">
              Vraag een vrijblijvende offerte
            </MagneticButton>
          </div>
          <ul className={styles.refusals}>
            {REFUSALS.map(([no, rest], i) => (
              <li key={rest}>
                <span className="t-mono t-dim">{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.no}>{no}</span>
                <span className={styles.struck}>
                  {rest}
                  <motion.span
                    className={styles.strike}
                    aria-hidden="true"
                    initial={reduce ? false : { scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 1 }}
                    transition={{ duration: 0.9, delay: 0.3 + i * 0.18, ease: [0.76, 0, 0.24, 1] }}
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
