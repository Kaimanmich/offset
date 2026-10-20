import { Link as RouterLink } from 'react-router';
import { LegalLayout, LegalSection } from '../components/LegalLayout.jsx';
import { Seo } from '../components/Seo.jsx';
import { STUDIO } from '../data/content.js';

// Draft grounded in what this site actually does (audited 2026-10-20): no analytics or
// marketing trackers, self-hosted fonts, a mailto contact form, two localStorage keys,
// photos served from the Pexels CDN (Cloudflare), hosted on GitHub Pages. Not legal advice — have it reviewed.
const SECTIONS = [
  { id: 'wie', title: 'Wie we zijn' },
  { id: 'gegevens', title: 'Welke gegevens en waarom' },
  { id: 'ontvangers', title: 'Met wie we gegevens delen' },
  { id: 'bewaring', title: 'Hoe lang we gegevens bewaren' },
  { id: 'rechten', title: 'Je rechten' },
  { id: 'klacht', title: 'Een klacht indienen' },
  { id: 'overig', title: 'Beveiliging en wijzigingen' },
];

export default function Privacy() {
  const { legal, email } = STUDIO;
  return (
    <>
      <Seo
        title="Privacyverklaring — Kaimanmich"
        description="Hoe Kaimanmich omgaat met je persoonsgegevens: welke gegevens we verwerken, waarom, hoe lang, en welke rechten je hebt."
        path="/privacy"
      />
      <LegalLayout
        label="Privacy"
        lines={['Privacy-', 'verklaring.']}
        intro="Kort gezegd: we volgen je niet, we verkopen niets en we vragen alleen wat we nodig hebben om je te kunnen helpen."
        updated="20 oktober 2026"
        sections={SECTIONS}
      >
        <LegalSection id="wie" n={1} title="Wie we zijn">
          <p>
            Kaimanmich is de handelsnaam van <strong>{legal.name}</strong>, {legal.form} en
            verwerkingsverantwoordelijke voor je persoonsgegevens.
          </p>
          <ul>
            <li>
              Adres: {legal.street}, {legal.postalCode} {legal.city}, {legal.country}
            </li>
            <li>Ondernemingsnummer: {legal.enterpriseNumber}</li>
            <li>Btw-nummer: {legal.vat}</li>
            <li>
              E-mail: <a href={`mailto:${email}`}>{email}</a>
            </li>
          </ul>
          <p>
            We hebben geen functionaris voor gegevensbescherming aangesteld; daar zijn we als kleine onderneming niet
            toe verplicht. Voor alle vragen over privacy kun je ons rechtstreeks mailen.
          </p>
          <p>
            Bouwen of hosten we een website voor een klant, dan is die klant de verwerkingsverantwoordelijke voor de
            gegevens op zijn site en treden wij op als verwerker. Die afspraken staan in onze{' '}
            <RouterLink to="/voorwaarden#persoonsgegevens">algemene voorwaarden</RouterLink>.
          </p>
        </LegalSection>

        <LegalSection id="gegevens" n={2} title="Welke gegevens en waarom">
          <p>
            <strong>Als je ons contacteert.</strong> Via het contactformulier of per e-mail ontvangen we je naam,
            e-mailadres, en wat je zelf invult: bedrijf, soort project, budget en je bericht. Het formulier op deze
            site verstuurt of bewaart zelf niets — het opent je eigen e-mailprogramma met je aanvraag al ingevuld, en
            pas als jij op verzenden drukt, komt die bij ons terecht. We gebruiken die gegevens om je te antwoorden en
            een voorstel of offerte op te maken. <strong>Rechtsgrond:</strong> stappen die je zelf vraagt vóór een
            mogelijke overeenkomst (art. 6.1.b AVG), of ons gerechtvaardigd belang om op algemene vragen te antwoorden
            (art. 6.1.f AVG).
          </p>
          <p>
            <strong>Als je klant wordt.</strong> Dan verwerken we contact- en facturatiegegevens om het project uit te
            voeren en te factureren. <strong>Rechtsgrond:</strong> de uitvoering van de overeenkomst (art. 6.1.b) en
            onze wettelijke boekhoud- en fiscale verplichtingen (art. 6.1.c).
          </p>
          <p>
            <strong>Technische gegevens.</strong> Zoals bij elke website registreert de server waarop de site draait
            technische gegevens van bezoeken, zoals je IP-adres, browser en het tijdstip. Die worden alleen gebruikt
            om de site veilig en werkend te houden. <strong>Rechtsgrond:</strong> gerechtvaardigd belang (art. 6.1.f).
            Je bent niet verplicht ons persoonsgegevens te geven; zonder contactgegevens kunnen we je alleen niet
            antwoorden.
          </p>
          <p>
            <strong>Opslag in je browser.</strong> We bewaren je cookiekeuze en of je onze aanbieding gesloten hebt,
            lokaal in je eigen browser. Wat precies, lees je in ons <RouterLink to="/cookies">cookiebeleid</RouterLink>.
          </p>
          <p>
            We gebruiken <strong>geen</strong> statistieken-, advertentie- of trackingtools, we maken geen profielen
            en we nemen geen geautomatiseerde beslissingen over jou.
          </p>
        </LegalSection>

        <LegalSection id="ontvangers" n={3} title="Met wie we gegevens delen">
          <p>We verkopen je gegevens nooit. We werken alleen met dienstverleners die nodig zijn om de site en onze communicatie te laten draaien:</p>
          <ul>
            <li>
              <strong>GitHub Pages</strong> (GitHub, Inc., Verenigde Staten) host deze website. GitHub registreert
              daarbij technische gegevens zoals je IP-adres om de dienst te beveiligen. GitHub is aangesloten bij het
              EU-VS Data Privacy Framework, op basis waarvan gegevens rechtmatig naar de VS mogen worden doorgegeven.
            </li>
            <li>
              <strong>Onze e-maildienst</strong>: de dienstverlener die de mailbox voor {email} beheert, ontvangt de
              berichten die je ons stuurt.
            </li>
            <li>
              <strong>Boekhouding en overheid</strong>: als je klant wordt, gaan facturatiegegevens naar wie onze
              boekhouding doet en naar de overheid wanneer de wet dat vereist (bijvoorbeeld de FOD Financiën).
            </li>
            <li>
              <strong>Pexels</strong> (via het netwerk van Cloudflare): een deel van de foto’s op deze site wordt
              rechtstreeks van Pexels geladen. Daarbij komt je IP-adres bij Pexels en Cloudflare terecht, en plaatst
              Cloudflare twee beveiligingscookies. Deze partijen kunnen gegevens buiten de Europese Economische Ruimte
              verwerken; zie hun eigen privacybeleid.
            </li>
          </ul>
          <p>De lettertypes van deze site staan op onze eigen server; daarvoor wordt niets naar derden gestuurd.</p>
          <p>
            <strong>Live demo’s van onze concepten.</strong> Op de pagina van elk concept kun je een live demo openen.
            Die wordt pas geladen als je daar zelf op klikt. De demo’s van The House of Baroque en Riot House laden dan
            lettertypes van Google Fonts, en The House of Baroque ook beelden van Wikimedia Commons. Daarbij komt je
            IP-adres bij die partijen terecht; Google kan die gegevens buiten de Europese Economische Ruimte verwerken.
            De demo’s van Huisarts Claes en Groenhof Tuinen laden niets van derden.
          </p>
        </LegalSection>

        <LegalSection id="bewaring" n={4} title="Hoe lang we gegevens bewaren">
          <ul>
            <li>
              <strong>Contactaanvragen</strong> zonder vervolg: tot 12 maanden na het laatste contact.
            </li>
            <li>
              <strong>Klant- en facturatiegegevens</strong>: 7 jaar, zoals de Belgische boekhoudwetgeving vereist.
            </li>
            <li>
              <strong>Serverlogs</strong>: wij hebben er geen toegang toe; GitHub bewaart ze zolang dat nodig is voor de
              beveiliging van zijn dienst, volgens het{' '}
              <a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noreferrer">
                privacybeleid van GitHub
              </a>
              .
            </li>
            <li>
              <strong>Opslag in je browser</strong>: tot je die zelf wist; zie het{' '}
              <RouterLink to="/cookies">cookiebeleid</RouterLink>.
            </li>
          </ul>
        </LegalSection>

        <LegalSection id="rechten" n={5} title="Je rechten">
          <p>Je hebt het recht om:</p>
          <ul>
            <li>je gegevens in te kijken en een kopie te krijgen;</li>
            <li>onjuiste gegevens te laten verbeteren;</li>
            <li>je gegevens te laten wissen, tenzij we ze wettelijk moeten bewaren;</li>
            <li>de verwerking te laten beperken;</li>
            <li>je gegevens in een gangbaar formaat te ontvangen (overdraagbaarheid);</li>
            <li>bezwaar te maken tegen verwerking op basis van ons gerechtvaardigd belang;</li>
            <li>een gegeven toestemming op elk moment in te trekken.</li>
          </ul>
          <p>
            Mail daarvoor naar <a href={`mailto:${email}`}>{email}</a>. We antwoorden binnen een maand, zoals de AVG
            voorschrijft. Om je gegevens te beschermen, kunnen we je vragen te bevestigen wie je bent.
          </p>
        </LegalSection>

        <LegalSection id="klacht" n={6} title="Een klacht indienen">
          <p>
            Ben je niet tevreden over hoe we met je gegevens omgaan? Laat het ons eerst weten, dan zoeken we samen een
            oplossing. Je kunt ook altijd klacht indienen bij de Belgische toezichthouder:
          </p>
          <p>
            <strong>Gegevensbeschermingsautoriteit (GBA)</strong>
            <br />
            Drukpersstraat 35, 1000 Brussel
            <br />
            <a href="mailto:contact@apd-gba.be">contact@apd-gba.be</a> ·{' '}
            <a href="https://www.gegevensbeschermingsautoriteit.be" target="_blank" rel="noreferrer">
              gegevensbeschermingsautoriteit.be
            </a>
          </p>
        </LegalSection>

        <LegalSection id="overig" n={7} title="Beveiliging en wijzigingen">
          <p>
            De site wordt via een versleutelde verbinding (HTTPS) aangeboden en we beperken de toegang tot je gegevens
            tot wie ze nodig heeft. Wijzigt deze verklaring, dan passen we de datum bovenaan aan; bij belangrijke
            wijzigingen vragen we je cookiekeuze opnieuw.
          </p>
        </LegalSection>
      </LegalLayout>
    </>
  );
}

