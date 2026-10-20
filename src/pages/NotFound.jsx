import { MagneticButton } from '../components/MagneticButton.jsx';
import { PageHero } from '../components/PageHero.jsx';
import { Seo } from '../components/Seo.jsx';

export default function NotFound() {
  return (
    <>
      <Seo title="Pagina niet gevonden — Kaimanmich" description="Deze pagina bestaat niet." path="/404" />
      <PageHero label="404" meta={['Pagina niet gevonden']} lines={['Van het', 'raster.']}>
        <div style={{ gridColumn: '1 / -1', display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'center' }}>
          <p className="t-lead t-dim">Deze pagina bestaat niet — of ze was nooit bedoeld om in de pas te lopen.</p>
          <MagneticButton to="/" variant="line">
            Terug naar home
          </MagneticButton>
        </div>
      </PageHero>
    </>
  );
}
