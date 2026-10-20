import { useRef } from 'react';
import { CropMarks } from './CropMarks.jsx';
import styles from './ProjectPlaceholder.module.css';

const pad = (n) => String(n).padStart(2, '0');

/**
 * An intentionally empty project slot: hairline frame, crop marks, a hatch
 * field that surfaces around the pointer, and a slot number. No invented work.
 */
export function ProjectPlaceholder({ index, total, ratio = '4 / 5', status = 'In voorbereiding', className = '', style }) {
  const ref = useRef(null);

  const onPointerMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <figure
      ref={ref}
      className={`${styles.slot} ${className}`}
      style={{ aspectRatio: ratio, ...style }}
      onPointerMove={onPointerMove}
      data-cursor-label="Binnenkort"
      aria-label={`Projectplek ${pad(index)} van ${pad(total)} — ${status.toLowerCase()}`}
    >
      <span className={styles.hatch} aria-hidden="true" />
      <span className={styles.scan} aria-hidden="true" />
      <span className={styles.numeral} aria-hidden="true">
        {pad(index)}
      </span>

      <span className={`t-mono ${styles.tl}`} aria-hidden="true">
        {pad(index)} / {pad(total)}
      </span>
      <span className={`t-mono t-dim ${styles.tr}`} aria-hidden="true">
        Gereserveerd
      </span>
      <figcaption className={`t-mono ${styles.bl}`}>
        <span className="status-dot" aria-hidden="true" /> {status}
      </figcaption>
      <span className={`t-mono t-dim ${styles.br}`} aria-hidden="true">
        —
      </span>
      <CropMarks />
    </figure>
  );
}
