import { Link as RouterLink } from 'react-router';
import { Arrow } from '../components/Arrow.jsx';
import { FinalCta } from '../components/FinalCta.jsx';
import { Marquee } from '../components/Marquee.jsx';
import { RevealText } from '../components/RevealText.jsx';
import { SectionHead } from '../components/SectionHead.jsx';
import { Seo } from '../components/Seo.jsx';
import { ServiceIndex } from '../components/ServiceIndex.jsx';
import { Hero } from './home/Hero.jsx';
import { Intro } from './home/Intro.jsx';
import { Process } from './home/Process.jsx';
import { SelectedWork } from './home/SelectedWork.jsx';
import { WhyOffset } from './home/WhyOffset.jsx';
import styles from './Home.module.css';

export default function Home() {
  return (
    <>
      <Seo
        title="Kaimanmich webdesign — uw expert voor online zichtbaarheid"
        description="Kaimanmich webdesign, uw expert voor online zichtbaarheid: websites op maat die opvallen en gevonden worden. Landingspagina vanaf €295."
        path="/"
      />
      <Hero />
      <Intro />
      <Marquee words={['Kaimanmich', 'Online zichtbaarheid']} label="Kaimanmich webdesign — uw expert voor online zichtbaarheid" />

      <section className={`light ${styles.services}`} aria-labelledby="services-title">
        <div className="shell">
          <SectionHead index="02" label="Diensten" aside="Startprijzen — prijs op maat" as="p" />
          <div className={`grid ${styles.servicesTop}`}>
            <RevealText
              as="h2"
              id="services-title"
              className={`t-display t-narrow ${styles.servicesTitle}`}
              lines={['Gebouwd op', { node: 'maat van je', className: styles.shift }, 'ambitie.']}
            />
            <div className={styles.servicesAside}>
              <p className="t-body t-dim">
                Drie duidelijke startpunten, van één pagina tot een volledig art-directed website. Elk project wordt
                afzonderlijk uitgestippeld en geprijsd.
              </p>
              <RouterLink to="/diensten" className={`t-mono ${styles.allLink}`}>
                <span className="u-link">Alle diensten &amp; prijzen</span> <Arrow />
              </RouterLink>
            </div>
          </div>
          <ServiceIndex />
          <RouterLink to="/diensten#maandelijks" className={`t-mono t-dim ${styles.monthly}`}>
            <span>+ Hosting, updates &amp; domeinnaam — €49 per maand</span>
            <span className="u-link">Bekijk de maandplannen</span>
            <Arrow />
          </RouterLink>
        </div>
      </section>

      <SelectedWork />
      <Process />
      <WhyOffset />
      <FinalCta />
    </>
  );
}
