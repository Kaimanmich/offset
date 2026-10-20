import { Parallax } from 'ui-kit';
import { Screen } from './Screen.jsx';
import { Swatches } from './Swatches.jsx';
import styles from './ConceptDetails.module.css';

/** Design vision, specs and supporting screens of one concept (used on /werk/:slug). */
export function ConceptDetails({ project }) {
  return (
    <section className={`shell ${styles.details}`} aria-label={`Designvisie van ${project.title}`}>
      <div className={`grid ${styles.body}`}>
        <dl className={styles.specs}>
          <div>
            <dt className="t-mono t-dim">Status</dt>
            <dd>Concept — eigen initiatief, geen klantwerk</dd>
          </div>
          <div>
            <dt className="t-mono t-dim">Soort</dt>
            <dd>{project.kind}</dd>
          </div>
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
          <div>
            <dt className="t-mono t-dim">Hoogtepunten</dt>
            <dd>
              <ul className={styles.features}>
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>

        <div className={styles.vision}>
          <p className={`t-mono ${styles.visionLabel}`}>
            <span aria-hidden="true">■</span> Designvisie
          </p>
          {project.vision.map((p, i) => (
            <p key={i} className={i === 0 ? styles.visionLead : `t-lead t-dim ${styles.visionText}`}>
              {p}
            </p>
          ))}
        </div>
      </div>

      <div className={`grid ${styles.shots}`}>
        {project.shots.map((shot, i) => (
          <Parallax key={shot.src} speed={i % 2 ? -0.06 : 0.04} className={styles[`shot${i % 3}`]}>
            <Screen shot={shot} />
          </Parallax>
        ))}
      </div>
    </section>
  );
}
