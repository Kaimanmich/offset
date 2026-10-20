import { useState } from 'react';
import styles from './LiveDemo.module.css';

const DEVICES = [
  { id: 'desktop', label: 'Desktop' },
  { id: 'mobile', label: 'Mobiel' },
];

/**
 * The concept itself, scrollable inside a browser frame. Loads only on click
 * (a cover image stands in until then), so third-party fonts/images inside a
 * demo are never fetched without the visitor asking for it.
 */
export function LiveDemo({ project }) {
  const [active, setActive] = useState(false);
  const [device, setDevice] = useState('desktop');
  const parties = project.thirdParties ?? [];

  return (
    <section className={styles.wrap} aria-label={`Live demo van ${project.title}`}>
      <div className={styles.bar}>
        <span className={`t-mono ${styles.status}`}>
          <span className={styles.dot} aria-hidden="true" /> Live demo — concept
        </span>
        <div className={styles.devices} role="group" aria-label="Weergave">
          {DEVICES.map((d) => (
            <button
              key={d.id}
              type="button"
              className={`t-mono ${styles.device}`}
              aria-pressed={device === d.id}
              onClick={() => setDevice(d.id)}
            >
              {d.label}
            </button>
          ))}
        </div>
        <a href={project.demo} target="_blank" rel="noreferrer" className={`t-mono ${styles.full}`}>
          <span className="u-link">Volledig scherm</span> ↗<span className="sr-only"> (opent in een nieuw tabblad)</span>
        </a>
      </div>

      <div className={styles.stage}>
        <div className={`${styles.viewport} ${styles[device]}`}>
          {active ? (
            <iframe
              src={project.demo}
              title={`${project.title} — live demo van het concept`}
              className={styles.frame}
              data-cursor="hide"
            />
          ) : (
            <button type="button" className={styles.facade} onClick={() => setActive(true)} data-cursor-label="Start">
              <img src={project.cover.src} alt="" className={styles.cover} />
              <span className={styles.facadeInner}>
                <span className={styles.play}>
                  <span className={styles.playMark} aria-hidden="true" /> Start de live demo
                </span>
                <span className={`t-mono ${styles.hint}`}>Daarna scroll je gewoon door het concept heen</span>
                {parties.length > 0 && (
                  <span className={`t-mono ${styles.note}`}>
                    Deze demo laadt bij het openen {parties.join(' en ')}.
                  </span>
                )}
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
