import { Link as RouterLink } from 'react-router';
import { Arrow } from '../../components/Arrow.jsx';
import { ConceptCard } from '../../components/ConceptCard.jsx';
import { MagneticButton } from '../../components/MagneticButton.jsx';
import { RevealText } from '../../components/RevealText.jsx';
import { SectionHead } from '../../components/SectionHead.jsx';
import { PROJECTS } from '../../data/content.js';
import styles from './SelectedWork.module.css';

export function SelectedWork() {
  return (
    <section className={`shell ${styles.work}`} aria-labelledby="work-title">
      <SectionHead
        index="03"
        label="Geselecteerd werk"
        aside={`${String(PROJECTS.length).padStart(2, '0')} concepten — klantwerk in voorbereiding`}
        as="p"
      />

      <div className={`grid ${styles.top}`}>
        <RevealText
          as="h2"
          id="work-title"
          className={`t-display t-condensed ${styles.title}`}
          lines={['Vier', { node: 'concepten.', className: styles.soon }]}
          stagger={0.14}
        />
        <div className={styles.side}>
          <p className="t-lead">
            Een museum, een brandingsite, een huisartsenpraktijk en een tuinaannemer — op eigen initiatief, om te
            tonen hoe we werken voor heel verschillende zaken. Elk concept kun je live bekijken.
          </p>
          <RouterLink to="/projecten" className={`t-mono ${styles.allLink}`}>
            <span className="u-link">Al het werk</span> <Arrow />
          </RouterLink>
        </div>
      </div>

      <div className={`grid ${styles.cards}`}>
        {PROJECTS.map((p, i) => (
          <ConceptCard key={p.slug} project={p} index={i} className={styles[`card${i % 4}`]} />
        ))}
      </div>

      <div className={styles.next}>
        <p className="t-mono t-dim">
          <span className="status-dot" aria-hidden="true" /> Klantwerk — de eerste plek is vrij
        </p>
        <MagneticButton to="/contact" cursor="Contact">
          Start een project
        </MagneticButton>
      </div>
    </section>
  );
}
