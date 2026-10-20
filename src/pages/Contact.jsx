import { useSearchParams } from 'react-router';
import { ImageParallax } from 'ui-kit';
import { ContactForm } from '../components/ContactForm.jsx';
import { LocalTime } from '../components/LocalTime.jsx';
import { PageHero } from '../components/PageHero.jsx';
import { Seo } from '../components/Seo.jsx';
import { IMAGES, STUDIO } from '../data/content.js';
import { pexelsProps } from '../lib/pexels.js';
import styles from './Contact.module.css';

export default function Contact() {
  const [params] = useSearchParams();

  return (
    <>
      <Seo
        title="Start een project — Kaimanmich"
        description="Vertel Kaimanmich over je project — landingspagina, bedrijfswebsite of premium website. België / Wereldwijd. info@kaimanmich.be"
        path="/contact"
      />

      <PageHero
        label="Contact"
        size="m"
        meta={['Nieuwe projecten', STUDIO.location]}
        lines={['Laten we iets maken', { node: 'dat de moeite waard is.', className: styles.shift }]}
        intro="Een project in gedachten? Vertel ons er kort iets over."
      />

      <section className={`shell grid ${styles.body}`} aria-label="Projectaanvraag">
        <aside className={styles.aside}>
          <div className={styles.block}>
            <p className={`t-mono ${styles.available}`}>
              <span className="status-dot" aria-hidden="true" /> Beschikbaar voor geselecteerde projecten
            </p>
            <p className="t-mono t-dim">{STUDIO.location}</p>
          </div>

          <a href={`mailto:${STUDIO.email}`} className={`u-link ${styles.mail}`} data-cursor-label="Mail">
            {STUDIO.email}
          </a>

          <ul className={styles.social}>
            {STUDIO.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className="t-mono u-link">
                  {s.label}
                  <span className="sr-only"> (opent in een nieuw tabblad)</span>
                </a>
              </li>
            ))}
            <li>
              <LocalTime className="t-mono t-dim" prefix="Lokale tijd, BE —" />
            </li>
          </ul>

          <div className={`photo ${styles.image}`}>
            <ImageParallax {...pexelsProps(IMAGES.stairs, '(max-width: 900px) 60vw, 26vw', 1080)} alt="" loading="lazy" speed={0.18} ratio="4 / 5" />
          </div>
        </aside>

        <div className={styles.formCol}>
          <ContactForm initialType={params.get('type') || ''} />
        </div>
      </section>
    </>
  );
}
