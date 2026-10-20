import { formatPrice } from '../data/content.js';
import { pexelsProps } from '../lib/pexels.js';
import { MagneticButton } from './MagneticButton.jsx';
import styles from './ServiceRow.module.css';

const pad = (n) => String(n).padStart(2, '0');

/**
 * One pricing row. The header is a disclosure button: hover previews the
 * package (rolling number, summary, image), click expands the full scope.
 */
export function ServiceRow({ service, index, open, onToggle }) {
  const { slug, title, price, summary, featured } = service;
  const panelId = `${slug}-scope`;
  const headId = `${slug}-head`;

  return (
    <article
      id={slug}
      className={`${styles.row} ${featured ? `light ${styles.featured}` : ''} ${open ? styles.open : ''}`}
    >
      <h3 className={styles.h}>
        <button
          id={headId}
          type="button"
          className={`shell grid ${styles.head}`}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          data-cursor-label={open ? 'Sluit' : 'Open'}
        >
          <span className={`t-mono ${styles.num}`}>
            <span className={styles.roll}>
              <span>{pad(index + 1)}</span>
              <span aria-hidden="true">{pad(index + 1)}</span>
            </span>
          </span>

          <span className={styles.titleBlock}>
            {featured && (
              <span className={`t-mono ${styles.tag}`}>
                <span className={styles.tagMark} aria-hidden="true" /> Aanrader
              </span>
            )}
            <span className={styles.title}>{title}</span>
            <span className={styles.summaryWrap}>
              <span className={styles.summary}>{summary}</span>
            </span>
          </span>

          <span className={styles.price}>
            <span className="t-mono t-dim">Vanaf</span>
            <span className={`t-tabular ${styles.amount}`}>{formatPrice(price)}+</span>
          </span>

          <span className={styles.toggle} aria-hidden="true" />

          <span className={`photo ${styles.peek}`} aria-hidden="true">
            <img {...pexelsProps(service.image, '16vw', 720)} alt="" loading="lazy" />
          </span>
        </button>
      </h3>

      <div id={panelId} role="region" aria-labelledby={headId} className={styles.panel} inert={!open}>
        <div className={styles.panelInner}>
          <div className={`shell grid ${styles.scope}`}>
            <div className={styles.forCol}>
              <p className="t-mono t-dim">{service.forLabel}</p>
              <ul>
                {service.for.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.incCol}>
              <p className="t-mono t-dim">{service.includesLabel || 'Inbegrepen'}</p>
              <ul className={styles.incList}>
                {service.includes.map((item, i) => (
                  <li key={item}>
                    <span className="t-mono t-dim">{pad(i + 1)}</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.actionCol}>
              {service.note && <p className={styles.note}>{service.note}</p>}
              <a href="#maandelijks" className={`t-mono t-dim u-link ${styles.monthlyNote}`}>
                + Hosting &amp; domeinnaam vanaf €49 per maand
              </a>
              <MagneticButton
                to={`/contact?type=${slug}`}
                variant={featured ? 'ink' : 'line'}
                cursor="Contact"
              >
                Vraag {service.short.toLowerCase()} aan
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
