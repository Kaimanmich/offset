import { Link as RouterLink } from 'react-router';
import { LegalLayout, LegalSection } from '../components/LegalLayout.jsx';
import { Seo } from '../components/Seo.jsx';
import { STUDIO, TERMS } from '../data/content.js';

// Algemene voorwaarden for a Belgian eenmanszaak selling web design to businesses and consumers.
// Covers WER boek VI (consumer info, withdrawal right + model form), boek XIX (consumer debts),
// the late-payment act for businesses, and the processor role for client sites.
// The commercial figures live in TERMS (content.js). Not legal advice — have it reviewed.
const SECTIONS = [
  { id: 'toepassing', title: 'Wie we zijn en wanneer dit geldt' },
  { id: 'offerte', title: 'Offerte en overeenkomst' },
  { id: 'prijzen', title: 'Prijzen en betaling' },
  { id: 'uitvoering', title: 'Uitvoering en oplevering' },
  { id: 'maandplannen', title: 'Hosting en maandplannen' },
  { id: 'eigendom', title: 'Intellectuele eigendom' },
  { id: 'persoonsgegevens', title: 'Persoonsgegevens op je website' },
  { id: 'herroeping', title: 'Herroepingsrecht voor consumenten' },
  { id: 'aansprakelijkheid', title: 'Garantie en aansprakelijkheid' },
  { id: 'geschillen', title: 'Klachten en geschillen' },
];

export default function Terms() {
  const { legal, email } = STUDIO;
  const t = TERMS;
  const address = `${legal.street}, ${legal.postalCode} ${legal.city}`;

  return (
    <>
      <Seo
        title="Algemene voorwaarden — Kaimanmich"
        description="De algemene voorwaarden van Kaimanmich voor webdesign, hosting en maandplannen: offerte, betaling, oplevering, herroepingsrecht en aansprakelijkheid."
        path="/voorwaarden"
      />
      <LegalLayout
        label="Voorwaarden"
        lines={['Algemene', 'voorwaarden.']}
        intro="Duidelijke afspraken vooraf, zodat we tijdens het project alleen over je website hoeven te praten."
        updated={t.updated}
        sections={SECTIONS}
      >
        <LegalSection id="toepassing" n={1} title="Wie we zijn en wanneer dit geldt">
          <p>
            Kaimanmich is de handelsnaam van <strong>{legal.name}</strong>, {legal.form}, {address}. Ondernemingsnummer{' '}
            {legal.enterpriseNumber}, btw-nummer {legal.vat}. E-mail: <a href={`mailto:${email}`}>{email}</a>.
          </p>
          <p>
            Deze voorwaarden gelden voor elke offerte en elke overeenkomst met Kaimanmich, zowel met ondernemingen als
            met consumenten. Algemene voorwaarden van de klant gelden alleen als we die schriftelijk aanvaarden. Staat
            er in een offerte of overeenkomst iets anders dan hier, dan geldt wat in de offerte of overeenkomst staat.
          </p>
        </LegalSection>

        <LegalSection id="offerte" n={2} title="Offerte en overeenkomst">
          <ul>
            <li>
              De prijzen op deze website zijn startprijzen. Elk project krijgt een offerte op maat; die is{' '}
              {t.quoteValidityDays} dagen geldig.
            </li>
            <li>
              De overeenkomst komt tot stand zodra je de offerte schriftelijk aanvaardt — een bevestiging per e-mail
              volstaat.
            </li>
            <li>
              Wat in de offerte staat, hoort bij het project. Extra pagina’s, functies of wijzigingen daarbuiten
              voeren we pas uit nadat je de prijs ervan hebt goedgekeurd.
            </li>
          </ul>
        </LegalSection>

        <LegalSection id="prijzen" n={3} title="Prijzen en betaling">
          <ul>
            <li>
              Kaimanmich valt onder de bijzondere vrijstellingsregeling voor kleine ondernemingen (art. 56bis
              Btw-wetboek). We rekenen dus geen btw aan: de prijs in de offerte is de eindprijs.
            </li>
            <li>
              Bij de start van een project factureren we een voorschot van {t.depositPercent}%. Het saldo factureren we
              bij de oplevering, vóór de site live gaat.
            </li>
            <li>Facturen betaal je binnen {t.paymentDays} dagen na de factuurdatum.</li>
            <li>
              <strong>Ben je een onderneming</strong> en betaal je niet op tijd, dan zijn zonder aanmaning de
              nalatigheidsinterest en de forfaitaire vergoeding van €40 verschuldigd volgens de wet van 2 augustus 2002
              betreffende de bestrijding van de betalingsachterstand bij handelstransacties.
            </li>
            <li>
              <strong>Ben je een consument</strong>, dan sturen we eerst een kosteloze herinnering en krijg je
              minstens 14 dagen om te betalen. Pas daarna kunnen interesten en een schadevergoeding worden aangerekend,
              binnen de grenzen van boek XIX van het Wetboek van economisch recht.
            </li>
            <li>
              Zolang een vervallen factuur niet betaald is, mogen we verdere werken of de livegang uitstellen, na je
              daarover eerst te hebben verwittigd.
            </li>
          </ul>
        </LegalSection>

        <LegalSection id="uitvoering" n={4} title="Uitvoering en oplevering">
          <ul>
            <li>
              We plannen het project samen. Termijnen zijn een inschatting; als teksten, beelden of feedback later
              komen dan afgesproken, schuift de planning mee op.
            </li>
            <li>
              Je bezorgt de inhoud die je zelf aanlevert (teksten, logo’s, foto’s) en staat ervoor in dat je die mag
              gebruiken.
            </li>
            <li>
              In elk pakket zitten {t.feedbackRounds} feedbackrondes op het ontwerp. Bijkomende rondes of grote
              koerswijzigingen prijzen we apart, na je akkoord.
            </li>
            <li>
              Na de oplevering heb je 14 dagen om de site na te kijken en opmerkingen door te geven. Zonder opmerkingen
              binnen die termijn, of zodra de site op jouw vraag live gaat, geldt ze als aanvaard. Je wettelijke
              rechten als consument blijven daarbij altijd behouden.
            </li>
          </ul>
        </LegalSection>

        <LegalSection id="maandplannen" n={5} title="Hosting en maandplannen">
          <ul>
            <li>
              Maandplannen (Hosting, Hosting + wijzigingen) komen bovenop een pakket. Ze lopen per maand, worden
              maandelijks vooraf gefactureerd en zijn opzegbaar per e-mail met een opzegtermijn van{' '}
              {t.monthlyNoticeMonths === 1 ? 'één maand' : `${t.monthlyNoticeMonths} maanden`}.
            </li>
            <li>
              We registreren je domeinnaam op jouw naam. Zeg je het maandplan op, dan bezorgen we je de
              verhuiscode van je domeinnaam en de bestanden van je website, zodat je die elders kunt onderbrengen.
            </li>
            <li>
              Het uur aan wijzigingen in Hosting + wijzigingen geldt per kalendermaand. Een uur dat je niet gebruikt,
              schuift niet door naar een volgende maand.
            </li>
            <li>
              We doen ons best om je site altijd bereikbaar te houden, maar we hangen af van hosting- en
              netwerkdiensten van derden. Een onderbreking bij die partijen geeft geen recht op schadevergoeding.
            </li>
            <li>
              Wijzigen we de prijs van een maandplan, dan laten we je dat minstens een maand vooraf weten. Je kunt dan
              kosteloos opzeggen voor de nieuwe prijs ingaat.
            </li>
          </ul>
        </LegalSection>

        <LegalSection id="eigendom" n={6} title="Intellectuele eigendom">
          <ul>
            <li>
              Zodra alle facturen voor het project betaald zijn, mag je het ontwerp en de code van je website vrij
              gebruiken, aanpassen en laten hosten waar je wilt.
            </li>
            <li>
              Algemene bouwstenen, werkwijzen en code die we in meerdere projecten gebruiken, blijven van Kaimanmich;
              je krijgt er een gebruiksrecht op voor je website.
            </li>
            <li>
              Foto’s, lettertypes of andere onderdelen van derden vallen onder de licentie van die derden. We kiezen
              alleen materiaal dat voor je website gebruikt mag worden.
            </li>
            <li>
              We mogen de opgeleverde website tonen in ons portfolio, tenzij je dat bij de opdracht schriftelijk
              weigert.
            </li>
          </ul>
        </LegalSection>

        <LegalSection id="persoonsgegevens" n={7} title="Persoonsgegevens op je website">
          <p>
            Verzamelt je website persoonsgegevens — via een contactformulier of boekingssysteem bijvoorbeeld — dan ben
            jij de verwerkingsverantwoordelijke. Hosten of beheren wij die site, dan zijn wij je verwerker in de zin van
            artikel 28 AVG. Als verwerker:
          </p>
          <ul>
            <li>verwerken we die gegevens alleen voor het beheer en de hosting van je website, en alleen op jouw instructie;</li>
            <li>houden we ze vertrouwelijk en beveiligen we ze passend;</li>
            <li>werken we alleen met onderaannemers (zoals de hostingprovider) die dezelfde verplichtingen naleven;</li>
            <li>helpen we je bij vragen van betrokkenen en melden we je een datalek zonder onnodige vertraging;</li>
            <li>wissen of bezorgen we je de gegevens aan het einde van de samenwerking, naar jouw keuze.</li>
          </ul>
          <p>
            Hoe Kaimanmich zelf met jouw gegevens omgaat, lees je in onze{' '}
            <RouterLink to="/privacy">privacyverklaring</RouterLink>.
          </p>
        </LegalSection>

        <LegalSection id="herroeping" n={8} title="Herroepingsrecht voor consumenten">
          <p>
            Sluit je als consument op afstand een overeenkomst met ons (per e-mail bijvoorbeeld), dan mag je die
            binnen 14 dagen na het sluiten ervan herroepen, zonder een reden op te geven. Laat ons dat ondubbelzinnig
            weten, per e-mail naar <a href={`mailto:${email}`}>{email}</a> of met het modelformulier hieronder.
            We betalen wat je al betaalde terug binnen 14 dagen nadat we je herroeping ontvingen.
          </p>
          <p>
            Vraag je ons uitdrukkelijk om al binnen die 14 dagen met het werk te beginnen, dan betaal je bij herroeping
            het deel van het werk dat we al uitvoerden. Is de dienst op jouw vraag binnen die termijn volledig
            uitgevoerd, en bevestigde je vooraf dat je je herroepingsrecht dan verliest, dan kun je niet meer herroepen.
          </p>
          <div className="legal-form">
            <p>
              <strong>Modelformulier voor herroeping</strong>
              <br />
              (vul dit formulier alleen in en stuur het terug als je de overeenkomst wilt herroepen)
            </p>
            <ul>
              <li>
                Aan: {legal.name} (Kaimanmich), {address}, {email}
              </li>
              <li>
                Ik/Wij (*) deel/delen (*) u hierbij mee dat ik/wij (*) onze overeenkomst betreffende de verrichting van
                de volgende dienst herroep/herroepen (*):
              </li>
              <li>Besteld op:</li>
              <li>Naam/Namen consument(en):</li>
              <li>Adres consument(en):</li>
              <li>Handtekening van consument(en) (alleen als dit formulier op papier wordt ingediend):</li>
              <li>Datum:</li>
            </ul>
            <p>(*) Doorhalen wat niet van toepassing is.</p>
          </div>
        </LegalSection>

        <LegalSection id="aansprakelijkheid" n={9} title="Garantie en aansprakelijkheid">
          <ul>
            <li>
              Fouten in wat we bouwden, die je binnen {t.bugfixDays} dagen na de oplevering meldt, herstellen we
              kosteloos. Als consument heb je daarnaast altijd de wettelijke garantie op digitale inhoud en diensten.
            </li>
            <li>
              We zijn niet aansprakelijk voor schade door inhoud die je zelf aanlevert, door wijzigingen die anderen
              aan de site maken, of door storingen bij diensten van derden.
            </li>
            <li>
              Onze aansprakelijkheid is beperkt tot het bedrag dat je voor het betrokken project of maandplan betaalde.
              Die beperking geldt niet bij opzet of zware fout, en doet niets af aan de rechten die de wet je als
              consument dwingend toekent.
            </li>
            <li>
              Bij overmacht — omstandigheden buiten onze wil, zoals een langdurige storing bij een hostingprovider —
              schorten we onze verplichtingen op zolang die toestand duurt.
            </li>
          </ul>
        </LegalSection>

        <LegalSection id="geschillen" n={10} title="Klachten en geschillen">
          <p>
            Ben je niet tevreden? Mail ons op <a href={`mailto:${email}`}>{email}</a>; we zoeken eerst samen een
            oplossing. Als consument kun je ook terecht bij de{' '}
            <a href="https://consumentenombudsdienst.be" target="_blank" rel="noreferrer">
              Consumentenombudsdienst
            </a>
            .
          </p>
          <p>
            Op deze voorwaarden en elke overeenkomst met Kaimanmich is het Belgisch recht van toepassing. Geschillen
            met ondernemingen behoren tot de bevoegdheid van {legal.court}. Voor consumenten gelden de wettelijke
            regels over de bevoegde rechtbank.
          </p>
        </LegalSection>
      </LegalLayout>
    </>
  );
}
