import { Link as RouterLink } from 'react-router';
import { LegalLayout, LegalSection } from '../components/LegalLayout.jsx';
import styles from '../components/LegalLayout.module.css';
import { Seo } from '../components/Seo.jsx';
import { openConsentSettings } from '../lib/consent.js';

// Every entry below was found on the running site (2026-10-02). Add a row — and gate the
// script through loadIfConsented() in lib/consent.js — before adding any new tool.
const ITEMS = [
  {
    name: 'kaimanmich-consent',
    provider: 'Kaimanmich — opslag in je browser',
    purpose: 'Onthoudt je cookiekeuze, zodat we die niet bij elk bezoek opnieuw vragen.',
    category: 'Noodzakelijk',
    duration: 'Tot je ze wist of ons beleid wijzigt',
  },
  {
    name: 'kaimanmich-promo-dismissed',
    provider: 'Kaimanmich — opslag in je browser',
    purpose: 'Onthoudt dat je de aanbieding sloot, zodat ze een week wegblijft. Wordt pas bewaard als jij ze sluit.',
    category: 'Noodzakelijk (op jouw vraag)',
    duration: '7 dagen van kracht, blijft staan tot je ze wist',
  },
  {
    name: '__cf_bm',
    provider: 'Cloudflare, via Pexels (images.pexels.com)',
    purpose: 'Beveiligt het netwerk dat de foto’s levert tegen bots.',
    category: 'Noodzakelijk — derde partij',
    duration: '30 minuten',
  },
  {
    name: '_cfuvid',
    provider: 'Cloudflare, via Pexels (images.pexels.com)',
    purpose: 'Beveiliging en het eerlijk verdelen van verkeer op het fotonetwerk.',
    category: 'Noodzakelijk — derde partij',
    duration: 'Tot je je browser sluit',
  },
];

const SECTIONS = [
  { id: 'wat', title: 'Wat cookies zijn' },
  { id: 'lijst', title: 'Wat deze site gebruikt' },
  { id: 'geen', title: 'Wat we niet gebruiken' },
  { id: 'keuze', title: 'Je keuze aanpassen' },
];

export default function Cookies() {
  return (
    <>
      <Seo
        title="Cookiebeleid — Kaimanmich"
        description="Welke cookies en browseropslag kaimanmich.be gebruikt, waarom, hoe lang, en hoe je je keuze aanpast."
        path="/cookies"
      />
      <LegalLayout
        label="Cookies"
        lines={['Cookie-', 'beleid.']}
        intro="Geen tracking, geen advertenties. Hieronder staat alles wat deze site in je browser bewaart — het is een korte lijst."
        updated="20 oktober 2026"
        sections={SECTIONS}
      >
        <LegalSection id="wat" n={1} title="Wat cookies zijn">
          <p>
            Cookies en lokale opslag zijn kleine stukjes informatie die een website in je browser bewaart. Sommige zijn
            nodig om de site te laten werken; voor andere — zoals statistieken of advertenties — moet een site eerst je
            toestemming vragen.
          </p>
        </LegalSection>

        <LegalSection id="lijst" n={2} title="Wat deze site gebruikt">
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">Naam</th>
                  <th scope="col">Van wie</th>
                  <th scope="col">Waarvoor</th>
                  <th scope="col">Soort</th>
                  <th scope="col">Duur</th>
                </tr>
              </thead>
              <tbody>
                {ITEMS.map((item) => (
                  <tr key={item.name}>
                    <td>
                      <code>{item.name}</code>
                    </td>
                    <td>{item.provider}</td>
                    <td>{item.purpose}</td>
                    <td>{item.category}</td>
                    <td>{item.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            De twee Cloudflare-cookies worden geplaatst door de dienst die een deel van onze foto’s levert, niet door
            ons. Ze dienen alleen voor beveiliging. Meer over hoe die partijen met gegevens omgaan, staat in onze{' '}
            <RouterLink to="/privacy">privacyverklaring</RouterLink>.
          </p>
        </LegalSection>

        <LegalSection id="geen" n={3} title="Wat we niet gebruiken">
          <p>
            Geen Google Analytics, geen Meta- of TikTok-pixels, geen advertentie- of retargetingcookies, geen ingesloten
            video’s of kaarten. De lettertypes staan op onze eigen server. De live demo’s van onze concepten plaatsen
            zelf geen cookies en bewaren niets in je browser; ze worden pas geladen als je erop klikt.
          </p>
          <p>
            In de cookiebanner kun je toestemming geven voor <strong>statistieken</strong>. Die staat standaard uit en
            we gebruiken momenteel geen statistiekentool. Schakelen we er later een in, dan kiezen we een
            privacyvriendelijke variant, voegen we die hier toe en wordt ze alleen geladen als je daarvoor toestemming
            gaf.
          </p>
        </LegalSection>

        <LegalSection id="keuze" n={4} title="Je keuze aanpassen">
          <p>
            Je kunt je keuze altijd wijzigen of intrekken, ook via de link “Cookie-instellingen” onderaan elke pagina.
            Je kunt cookies en lokale opslag ook wissen in de instellingen van je browser.
          </p>
          <button type="button" className={styles.button} onClick={openConsentSettings}>
            Cookie-instellingen openen
          </button>
        </LegalSection>
      </LegalLayout>
    </>
  );
}
