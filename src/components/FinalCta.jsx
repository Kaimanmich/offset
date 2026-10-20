import { ImageParallax } from 'ui-kit';
import { IMAGES, STUDIO } from '../data/content.js';
import { pexelsProps } from '../lib/pexels.js';
import { CropMarks } from './CropMarks.jsx';
import { MagneticButton } from './MagneticButton.jsx';
import { RevealText } from './RevealText.jsx';
import styles from './FinalCta.module.css';

/** Full-screen closing statement with the primary call to action and the studio email. */
export function FinalCta({
  index = '06',
  lines = ['Iets dat het', 'bouwen waard is?'],
  button = 'Start een project',
  to = '/contact',
  note = 'Beschikbaar voor geselecteerde projecten — België / Wereldwijd',
  image = IMAGES.shadowGeometry,
}) {
  return (
    <section className={styles.cta} aria-labelledby={`cta-${index}`}>
      <div className={`photo ${styles.bg}`} aria-hidden="true">
        <ImageParallax {...pexelsProps(image, '100vw')} alt="" speed={0.3} className={styles.bgImage} loading="lazy" />
      </div>

      <div className={`shell ${styles.inner}`}>
        <div className={styles.meta}>
          <span className="t-mono">({index}) Volgende stap</span>
          <span className="t-mono t-dim">
            <span className="status-dot" aria-hidden="true" /> {note}
          </span>
        </div>

        <RevealText
          as="h2"
          id={`cta-${index}`}
          className={`t-display t-narrow ${styles.title}`}
          lines={[{ node: lines[0] }, { node: lines[1], className: styles.offsetLine }]}
          stagger={0.12}
        />

        <div className={styles.actions}>
          <MagneticButton to={to} size="l" cursor="Contact">
            {button}
          </MagneticButton>
          <a href={`mailto:${STUDIO.email}`} className={`u-link ${styles.mail}`} data-cursor-label="Mail">
            {STUDIO.email}
          </a>
        </div>
      </div>
      <CropMarks inset="var(--gutter)" className={styles.marks} />
    </section>
  );
}
