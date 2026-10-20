import { Fragment } from 'react';
import { Marquee as KitMarquee } from 'ui-kit';
import styles from './Marquee.module.css';

/** Slow statement ticker — alternating solid and outlined words. */
export function Marquee({ words = ['Kaimanmich', 'Online zichtbaarheid'], speed = 70, label }) {
  return (
    <div className={styles.band}>
      {label && <span className="sr-only">{label}</span>}
      <KitMarquee speed={speed} pauseOnHover={false} gap="0" aria-hidden="true">
        {[0, 1].map((round) => (
          <Fragment key={round}>
            {words.map((w, i) => (
              <span key={`${round}-${w}`} className={styles.item}>
                <span className={i % 2 ? styles.outline : styles.solid}>{w}</span>
                <span className={styles.dash} aria-hidden="true">
                  —
                </span>
              </span>
            ))}
          </Fragment>
        ))}
      </KitMarquee>
    </div>
  );
}
