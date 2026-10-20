import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router';
import { Parallax } from 'ui-kit';
import { Arrow } from '../components/Arrow.jsx';
import { CaseStudy } from '../components/CaseStudy.jsx';
import { PageHero } from '../components/PageHero.jsx';
import { ProjectPlaceholder } from '../components/ProjectPlaceholder.jsx';
import { SectionHead } from '../components/SectionHead.jsx';
import { Seo } from '../components/Seo.jsx';
import { CLIENT_SLOTS, PROJECTS } from '../data/content.js';
import styles from './Projects.module.css';

const pad = (n) => String(n).padStart(2, '0');

// Open client places after the concepts — each entry is a grid placement + drift speed.
const LAYOUT = [
  { cls: 'a', ratio: '16 / 10', speed: 0 },
  { cls: 'b', ratio: '3 / 4', speed: 0.14 },
  { cls: 'c', ratio: '4 / 5', speed: -0.08 },
];

export default function Projects() {
  const { hash } = useLocation();
  const open = LAYOUT.slice(0, CLIENT_SLOTS);

  // Deep links to one concept on this page (#house-of-baroque, …).
  useEffect(() => {
    const id = hash.slice(1);
    if (!id) return undefined;
    const t = setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 350);
    return () => clearTimeout(t);
  }, [hash]);

  return (
    <>
      <Seo
        title="Projecten en concepten — Kaimanmich"
        description="Conceptwerk van Kaimanmich: een museumwebsite, een brandingsite, een huisartsenpraktijk en een tuinaannemer — telkens met de designvisie en een live demo om zelf door te scrollen."
        path="/projecten"
      />

      <PageHero
        label="Projecten"
        meta={['Geselecteerd werk', `${pad(PROJECTS.length)} concepten`, 'Live te bekijken']}
        lines={['Geselecteerd', { node: 'werk.', className: styles.shift }]}
      >
        <div className={styles.status}>
          <p className="t-lead">
            Vier concepten op eigen initiatief — een museum, een brandingsite, een huisartsenpraktijk en een
            tuinaannemer. Het zijn duidelijk concepten, geen klantwerk. Open er een en scroll zelf door de live demo.
          </p>
          <ol className={styles.index}>
            {PROJECTS.map((p, i) => (
              <li key={p.slug}>
                <RouterLink to={`/werk/${p.slug}`} className={styles.indexLink} data-cursor-label="Bekijk">
                  <span className="t-mono t-dim">{pad(i + 1)}</span>
                  <span className={styles.indexTitle}>{p.title}</span>
                  <span className="t-mono t-dim">Concept · {p.kind}</span>
                </RouterLink>
              </li>
            ))}
          </ol>
        </div>
      </PageHero>

      {PROJECTS.map((p, i) => (
        <CaseStudy key={p.slug} project={p} index={i} />
      ))}

      {open.length > 0 && (
        <section className={`shell ${styles.openSlots}`} aria-labelledby="open-slots">
          <SectionHead
            index={pad(PROJECTS.length + 1)}
            id="open-slots"
            label="Klantwerk — in voorbereiding"
            aside={`${pad(CLIENT_SLOTS)} plekken vrij`}
          />
          <div className={`grid ${styles.slots}`}>
            {open.map((slot, i) => (
              <Parallax key={slot.cls} speed={slot.speed} className={styles[slot.cls]}>
                <ProjectPlaceholder index={i + 1} total={CLIENT_SLOTS} ratio={slot.ratio} />
              </Parallax>
            ))}
            <p className={`t-mono t-dim ${styles.caption}`} aria-hidden="true">
              Gereserveerd voor klantwerk. Geen nepklanten als opvulling.
            </p>
          </div>
        </section>
      )}

      <section className={styles.first} aria-label="Word ons eerste klantproject">
        <RouterLink to="/contact" className={`shell ${styles.firstLink}`} data-cursor-label="Contact">
          <span className={`t-mono ${styles.firstMeta}`}>De eerste klantplek is vrij</span>
          <span className={styles.firstText}>
            Word ons eerste klantproject
            <Arrow className={styles.firstArrow} />
          </span>
        </RouterLink>
      </section>
    </>
  );
}
