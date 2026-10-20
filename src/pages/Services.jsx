import { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router';
import { Arrow } from '../components/Arrow.jsx';
import { FinalCta } from '../components/FinalCta.jsx';
import { MagneticButton } from '../components/MagneticButton.jsx';
import { GridLines } from '../components/GridLines.jsx';
import { PageHero } from '../components/PageHero.jsx';
import { SectionHead } from '../components/SectionHead.jsx';
import { Seo } from '../components/Seo.jsx';
import { ServiceRow } from '../components/ServiceRow.jsx';
import { ADDONS, IMAGES, MONTHLY, PRICE_NOTE, SERVICES, formatPrice } from '../data/content.js';
import styles from './Services.module.css';

const pad = (n) => String(n).padStart(2, '0');

export default function Services() {
  const { hash } = useLocation();
  const target = hash.slice(1);
  const [open, setOpen] = useState(() => {
    const initial = new Set(SERVICES.filter((s) => s.featured).map((s) => s.slug));
    if (SERVICES.some((s) => s.slug === target)) initial.add(target);
    return initial;
  });

  // Deep links (#premium-website, #maandelijks): open the package if it is one, then bring it into view.
  useEffect(() => {
    if (!target) return undefined;
    if (SERVICES.some((s) => s.slug === target)) setOpen((prev) => new Set(prev).add(target));
    const id = setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 350);
    return () => clearTimeout(id);
  }, [target]);

  const toggle = (slug) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });

  return (
    <>
      <Seo
        title="Webdesign en websites op maat — Diensten en prijzen — Kaimanmich"
        description="Websites op maat door Kaimanmich: landingspagina vanaf €295, bedrijfswebsite vanaf €750, premium website vanaf €1.500. Hosting met domeinnaam voor €49 per maand."
        path="/diensten"
      />

      <PageHero
        label="Diensten"
        meta={[`${pad(SERVICES.length)} pakketten`, `${pad(MONTHLY.length)} maandplannen`, `${pad(ADDONS.length)} extra's`]}
        lines={['Diensten', { node: '& prijzen.', className: styles.heroShift }]}
        intro="Duidelijke startprijzen voor elk soort project. Elke site wordt van nul ontworpen en op maat geprijsd — het bedrag is waar het gesprek begint, niet waar het eindigt."
      >
        <div className={styles.heroCta}>
          <MagneticButton to="/contact" cursor="Contact">
            Vraag een offerte
          </MagneticButton>
          <a href="#maandelijks" className={`t-mono ${styles.heroLink}`}>
            <span className="u-link">Hosting &amp; maandplannen</span> <Arrow direction="down" />
          </a>
        </div>
      </PageHero>

      <section className={styles.list} aria-label="Pakketten">
        {SERVICES.map((s, i) => (
          <ServiceRow key={s.slug} service={s} index={i} open={open.has(s.slug)} onToggle={() => toggle(s.slug)} />
        ))}
        <p className={`shell t-mono t-dim ${styles.priceNote}`}>{PRICE_NOTE}</p>
      </section>

      <section id="maandelijks" className={`shell ${styles.monthly}`} aria-labelledby="monthly-title">
        <SectionHead index="04" id="monthly-title" label="Maandelijks" aside="Bovenop elk pakket" />
        <div className={`grid ${styles.monthlyTop}`}>
          <p className={`t-display t-narrow ${styles.monthlyTitle}`}>
            Online
            <br />
            <span className={styles.heroShift}>blijven.</span>
          </p>
          <p className={`t-lead t-pretty ${styles.monthlyLead}`}>
            Hosting, updates en je domeinnaam zitten niet verstopt in een pakketprijs. Ze zijn een aparte maandelijkse
            kost — zo zie je precies wat je site nodig heeft om te blijven draaien.
          </p>
        </div>
        <ul className={`grid ${styles.monthlyList}`}>
          {MONTHLY.map((m, i) => (
            <li key={m.slug} className={`${styles.monthlyItem} ${m.featured ? `light ${styles.monthlyFeatured}` : ''}`}>
              <span className="t-mono t-dim">
                {pad(i + 1)} — Maandplan{m.featured ? ' · aanrader' : ''}
              </span>
              <h3 className={styles.monthlyName}>{m.label}</h3>
              <p className={styles.monthlyPrice}>
                <span className={`t-tabular ${styles.monthlyAmount}`}>{formatPrice(m.price)}</span>
                <span className="t-mono t-dim">/ maand</span>
              </p>
              <p className={`t-dim ${styles.monthlyText}`}>{m.text}</p>
              <ul className={styles.monthlyIncludes}>
                {m.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <MagneticButton
                to={`/contact?type=hosting`}
                variant={m.featured ? 'ink' : 'line'}
                cursor="Contact"
                className={styles.monthlyBtn}
              >
                Kies {m.label.toLowerCase()}
              </MagneticButton>
            </li>
          ))}
        </ul>
        <p className={`t-mono t-dim ${styles.priceNote}`}>
          Maandplannen worden maandelijks gefactureerd en zijn maandelijks opzegbaar — zie de{' '}
          <RouterLink to="/voorwaarden#maandplannen" className="u-link">
            algemene voorwaarden
          </RouterLink>
          .
        </p>
      </section>

      <section className={`shell ${styles.addons}`} aria-labelledby="addons-title">
        <GridLines className={styles.addonsGrid} />
        <SectionHead index="05" id="addons-title" label="Extra's" aside="Eenmalig" />
        <div className={`grid ${styles.addonsBody}`}>
          <p className={`t-h4 ${styles.addonsLead}`}>Eenmalige extra's, apart geprijsd. Voeg ze toe aan elk pakket.</p>
          <ul className={styles.addonsList}>
            {ADDONS.map((a) => (
              <li key={a.label}>
                <span>{a.label}</span>
                <span className="t-mono t-dim">{a.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta
        index="06"
        lines={['Twijfel je', 'wat past?']}
        button="Vraag advies"
        note="Past het niet in een pakket? Dan bouwen we het juiste"
        image={IMAGES.stairs}
      />
    </>
  );
}
