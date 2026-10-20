import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { PageHero } from './PageHero.jsx';
import styles from './LegalLayout.module.css';

/** Shared shell for the privacy statement and cookie policy: hero, sticky index, readable column. */
export function LegalLayout({ label, lines, intro, updated, sections, children }) {
  const { hash } = useLocation();

  // Links like /voorwaarden#maandplannen: scroll to the section once the page transition has settled.
  useEffect(() => {
    if (!hash) return undefined;
    const id = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' }), 350);
    return () => clearTimeout(id);
  }, [hash]);

  return (
    <>
      <PageHero label={label} size="m" meta={[`Laatst bijgewerkt: ${updated}`]} lines={lines} intro={intro} />
      <div className={`shell grid ${styles.body}`}>
        <nav className={styles.toc} aria-label="Inhoud">
          <p className="t-mono t-dim">Inhoud</p>
          <ol>
            {sections.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="u-link">
                  <span className="t-mono t-dim">{String(i + 1).padStart(2, '0')}</span> {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <article className={styles.article}>{children}</article>
      </div>
    </>
  );
}

/** One numbered section of a legal page. */
export function LegalSection({ id, n, title, children }) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`} className={styles.h}>
        <span className="t-mono t-dim">{String(n).padStart(2, '0')}</span> {title}
      </h2>
      {children}
    </section>
  );
}
