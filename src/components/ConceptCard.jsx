import { Link as RouterLink } from 'react-router';
import { Arrow } from './Arrow.jsx';
import { CropMarks } from './CropMarks.jsx';
import { Swatches } from './Swatches.jsx';
import styles from './ConceptCard.module.css';

const pad = (n) => String(n).padStart(2, '0');

/** Home-page teaser for a concept; links to its own page with the live demo. */
export function ConceptCard({ project, index, className = '' }) {
  return (
    <RouterLink to={`/werk/${project.slug}`} className={`${styles.card} ${className}`} data-cursor-label="Bekijk">
      <div className={styles.frame}>
        <img
          src={project.cover.src}
          alt={project.cover.alt}
          width="2000"
          height="852"
          loading="lazy"
          decoding="async"
          className={styles.img}
        />
        <CropMarks />
      </div>

      <div className={styles.meta}>
        <span className="t-mono">
          Concept {pad(index + 1)} — {project.kind}
        </span>
        <span className="t-mono t-dim">{project.year}</span>
      </div>

      <div className={styles.titleRow}>
        <h3 className={styles.title}>
          {project.title} <span className={styles.tag}>— Concept</span>
        </h3>
        <Arrow direction="up-right" className={styles.arrow} />
      </div>

      <div className={styles.foot}>
        <span className={`t-dim ${styles.summary}`}>{project.summary}</span>
        <Swatches colors={project.palette} />
      </div>
    </RouterLink>
  );
}
