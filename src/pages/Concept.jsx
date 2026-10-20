import { Link as RouterLink, useParams } from 'react-router';
import { Arrow } from '../components/Arrow.jsx';
import { ConceptDetails } from '../components/ConceptDetails.jsx';
import { FinalCta } from '../components/FinalCta.jsx';
import { LiveDemo } from '../components/LiveDemo.jsx';
import { MagneticButton } from '../components/MagneticButton.jsx';
import { PageHero } from '../components/PageHero.jsx';
import { Seo } from '../components/Seo.jsx';
import { PROJECTS } from '../data/content.js';
import NotFound from './NotFound.jsx';
import styles from './Concept.module.css';

const pad = (n) => String(n).padStart(2, '0');

/** Own page per concept: reached only from Werk ("Bekijk concept"), not from the main navigation. */
export default function Concept() {
  const { slug } = useParams();
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  if (index < 0) return <NotFound />;

  const project = PROJECTS[index];
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  return (
    <>
      <Seo
        title={`${project.title} — concept — Kaimanmich`}
        description={`${project.summary} Bekijk het concept live en scroll er zelf door.`}
        path={`/werk/${project.slug}`}
      />

      <PageHero
        label={`Concept ${pad(index + 1)}`}
        size="m"
        meta={[project.kind, `Eigen initiatief · ${project.year}`, 'Geen klantwerk']}
        lines={[project.title, { node: '— Concept', className: styles.tag }]}
        intro={project.summary}
      >
        <div className={styles.heroActions}>
          <MagneticButton href={project.demo} target="_blank" rel="noreferrer" variant="line" cursor="Open" arrow="up-right">
            Open in volledig scherm
          </MagneticButton>
          <RouterLink to="/projecten" className={`t-mono ${styles.back}`}>
            <Arrow direction="left" /> <span className="u-link">Al het werk</span>
          </RouterLink>
        </div>
      </PageHero>

      <div className="shell">
        <LiveDemo key={project.slug} project={project} />
      </div>

      <ConceptDetails project={project} />

      <nav className={styles.next} aria-label="Volgend concept">
        <RouterLink to={`/werk/${next.slug}`} className={`shell ${styles.nextLink}`} data-cursor-label="Volgende">
          <span className={`t-mono ${styles.nextMeta}`}>
            Volgend concept — {next.kind}
          </span>
          <span className={styles.nextTitle}>
            {next.title} <span className={styles.nextTag}>— Concept</span>
            <Arrow className={styles.nextArrow} />
          </span>
        </RouterLink>
      </nav>

      <FinalCta
        index="05"
        lines={['Zoiets voor', 'jouw zaak?']}
        note="Elk concept is een startpunt — jouw site wordt van nul ontworpen"
      />
    </>
  );
}
