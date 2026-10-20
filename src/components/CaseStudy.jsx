import { Link as RouterLink } from 'react-router';
import { MagneticButton } from './MagneticButton.jsx';
import { RevealText } from './RevealText.jsx';
import { Screen } from './Screen.jsx';
import { SectionHead } from './SectionHead.jsx';
import { Swatches } from './Swatches.jsx';
import styles from './CaseStudy.module.css';

const pad = (n) => String(n).padStart(2, '0');

/**
 * One concept on /projecten: title, cover, the first line of the design vision
 * and the way through to its own page (/werk/:slug) with the live demo.
 */
export function CaseStudy({ project, index }) {
  const titleId = `${project.slug}-title`;
  const href = `/werk/${project.slug}`;

  return (
    <article id={project.slug} className={`shell ${styles.case}`} aria-labelledby={titleId}>
      <SectionHead
        index={pad(index + 1)}
        label={`Concept — ${project.kind}`}
        aside={`Eigen initiatief · ${project.year}`}
        as="p"
      />

      <div className={`grid ${styles.head}`}>
        <RevealText
          as="h2"
          id={titleId}
          className={`t-display t-narrow ${styles.title}`}
          lines={[project.title, { node: '— Concept', className: styles.tag }]}
          stagger={0.1}
        />
        <p className={`t-lead t-pretty ${styles.summary}`}>{project.summary}</p>
      </div>

      <RouterLink to={href} className={styles.coverLink} data-cursor-label="Bekijk" aria-label={`Bekijk het concept ${project.title}`}>
        <Screen shot={project.cover} eager={index === 0} />
      </RouterLink>

      <div className={`grid ${styles.body}`}>
        <dl className={styles.facts}>
          <div>
            <dt className="t-mono t-dim">Richting</dt>
            <dd>{project.direction}</dd>
          </div>
          <div>
            <dt className="t-mono t-dim">Typografie</dt>
            <dd>{project.type}</dd>
          </div>
          <div>
            <dt className="t-mono t-dim">Palet</dt>
            <dd>
              <Swatches colors={project.palette} />
            </dd>
          </div>
        </dl>

        <div className={styles.text}>
          <p className={styles.lead}>{project.vision[0]}</p>
          <div className={styles.actions}>
            <MagneticButton to={href} cursor="Bekijk">
              Bekijk concept
            </MagneticButton>
            <a href={project.demo} target="_blank" rel="noreferrer" className={`t-mono ${styles.demoLink}`}>
              <span className="u-link">Open live demo</span> ↗
              <span className="sr-only"> (opent in een nieuw tabblad)</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
