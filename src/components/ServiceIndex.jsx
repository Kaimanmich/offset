import { useState } from 'react';
import { Link as RouterLink } from 'react-router';
import { SERVICES, formatPrice } from '../data/content.js';
import { Arrow } from './Arrow.jsx';
import styles from './ServiceIndex.module.css';

const pad = (n) => String(n).padStart(2, '0');

/**
 * Large vertical service index. Hovering a row expands it, nudges the title
 * off its column and dims the others; the cursor carries the "View" label.
 */
export function ServiceIndex() {
  const [active, setActive] = useState(-1);

  return (
    <ol
      className={`${styles.list} ${active >= 0 ? styles.hasActive : ''}`}
      onPointerLeave={() => setActive(-1)}
    >
      {SERVICES.map((s, i) => (
        <li key={s.slug} className={`${styles.row} ${active === i ? styles.active : ''}`}>
          <RouterLink
            to={`/diensten#${s.slug}`}
            className={`grid ${styles.link}`}
            data-cursor-label="Bekijk"
            onPointerEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onBlur={() => setActive(-1)}
          >
            <span className={`t-mono ${styles.num}`}>{pad(i + 1)}</span>
            <span className={styles.title}>{s.short}</span>
            <span className={styles.price}>
              <span className="t-mono t-dim">Vanaf</span> <span className="t-tabular">{formatPrice(s.price)}</span>
            </span>
            <span className={styles.arrow} aria-hidden="true">
              <Arrow />
            </span>
          </RouterLink>
        </li>
      ))}
    </ol>
  );
}
