// Single source for studio copy, pricing and imagery. Pages read from here.

// Files in public/ live under the deploy base: / on a custom domain, /<repo>/ on GitHub Pages.
const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const STUDIO = {
  name: 'Kaimanmich',
  tagline: 'Webdesign — uw expert voor online zichtbaarheid',
  email: 'info@kaimanmich.be',
  location: 'Herentals — België',
  coordinates: '51.18°N — 4.83°E',
  timeZone: 'Europe/Brussels',
  // Where the site is served from — set in .env, overridden by the GitHub Pages workflow.
  url: import.meta.env.VITE_SITE_URL.replace(/\/+$/, ''),
  // Wettelijke vermeldingen (WER boek XII): shown in the footer, privacy statement and terms.
  legal: {
    name: 'Michiel Nelis',
    form: 'eenmanszaak (student-zelfstandige)',
    street: 'Nijverheidsstraat 3',
    postalCode: '2200',
    city: 'Herentals',
    country: 'België',
    enterpriseNumber: '1043.596.373',
    vat: 'BE 1043.596.373',
    vatRegime: 'Btw-vrijgesteld — bijzondere vrijstellingsregeling kleine ondernemingen (art. 56bis WBTW)',
    court: 'de ondernemingsrechtbank Antwerpen, afdeling Turnhout',
  },
  // Only real profiles; the footer and contact page hide the list while it is empty.
  social: [],
};

// Shown with every price list. Under the small-business exemption no VAT is charged, so prices are final.
export const PRICE_NOTE = 'Alle prijzen zijn eindprijzen: Kaimanmich is btw-vrijgesteld (bijzondere vrijstellingsregeling kleine ondernemingen).';

// Commercial terms used in the algemene voorwaarden — change them here, the page follows.
export const TERMS = {
  updated: '20 oktober 2026',
  quoteValidityDays: 30,
  depositPercent: 50,
  paymentDays: 14,
  feedbackRounds: 2,
  bugfixDays: 30,
  monthlyNoticeMonths: 1,
};

export const NAV = [
  { to: '/projecten', label: 'Werk' },
  { to: '/diensten', label: 'Diensten' },
  { to: '/contact', label: 'Contact' },
];

// Pexels photo ids — rendered through the Pexels CDN at the width needed.
export const IMAGES = {
  concreteLines: { id: 13848642, alt: 'Monochrome betonnen gevel doorsneden door harde schaduwen en rechte lijnen' },
  shadowWall: { id: 36969840, alt: 'Geometrische schaduwen op een getextureerde betonmuur' },
  barbican: { id: 20875003, alt: 'Zwart-witbeeld van brutalistische torens van de Barbican Estate in Londen' },
  curvedForm: { id: 29652324, alt: 'Gladde, abstracte gebogen vorm in grijstinten' },
  spiral: { id: 30271356, alt: 'Brutalistische betonnen wenteltrap van onderen gefotografeerd, in zwart-wit' },
  stairs: { id: 16130244, alt: 'Betonnen trap die oplost in het donker' },
  shadowGeometry: { id: 9276243, alt: 'Geometrische architecturale schaduwen die een abstract patroon vormen' },
};

export const SERVICES = [
  {
    slug: 'landingspagina',
    title: 'Landingspagina',
    short: 'Landingspagina',
    price: 295,
    image: IMAGES.shadowWall,
    summary: 'Eén pagina, één idee, zonder compromis uitgevoerd.',
    forLabel: 'Voor',
    for: ["Websites van één pagina", 'Campagnes', 'Lanceringen', 'Personal brands', 'Kleine ondernemingen'],
    includes: ['Ontwerp op maat', 'Responsive ontwikkeling', 'Animaties', 'Contactsectie', 'SEO-basis', 'Livegang'],
  },
  {
    slug: 'bedrijfswebsite',
    title: 'Bedrijfswebsite',
    short: 'Bedrijfswebsite',
    price: 750,
    image: IMAGES.barbican,
    summary: "Tot vijf pagina's die je zaak er even doordacht laten uitzien als ze is.",
    forLabel: 'Geschikt voor',
    for: ['Lokale ondernemingen', 'Dienstverleners', 'Zelfstandigen en vrije beroepen', "Studio's", 'Kleine bedrijven'],
    includes: ["Tot 5 pagina's", 'Ontwerp op maat', 'Responsive ontwikkeling', 'Animaties', 'Contactformulier', 'Basis-SEO', 'Livegang'],
  },
  {
    slug: 'premium-website',
    title: 'Premium website',
    short: 'Premium website',
    price: 1500,
    image: IMAGES.curvedForm,
    featured: true,
    summary: 'Het signatuurpakket: art direction, motion en interactie tot in het detail.',
    forLabel: 'Voor',
    for: ['Merken die beduidend meer design en interactie willen'],
    includes: [
      "5–10 pagina's",
      'Art direction op maat',
      'Geavanceerde animaties',
      'Interactieve secties',
      'Uitgebreid responsive design',
      'SEO-fundament',
      'Analytics-installatie',
      'Livegang',
    ],
  },
];

// Monthly plans, billed on top of any package — never folded into a package price.
export const MONTHLY = [
  {
    slug: 'hosting',
    label: 'Hosting',
    price: 49,
    text: 'Je site online, veilig en up-to-date — zonder dat je er zelf naar moet omkijken.',
    includes: ['Snelle, beveiligde hosting met SSL', 'Technische updates en back-ups', 'Domeinnaam inbegrepen'],
  },
  {
    slug: 'hosting-onderhoud',
    label: 'Hosting + wijzigingen',
    price: 99,
    featured: true,
    text: 'Alles uit Hosting, plus elke maand een uur waarin we je site voor je aanpassen.',
    includes: ['Alles uit Hosting', 'Elke maand 1 uur aan wijzigingen', 'Teksten, beelden en kleine aanpassingen'],
  },
];

export const ADDONS = [
  { label: 'SEO', price: 'vanaf €150' },
  { label: 'Boekingssysteem', price: 'vanaf €250' },
  { label: 'Copywriting', price: 'vanaf €150' },
  { label: 'Geavanceerde animaties', price: 'vanaf €250' },
];

export const PROCESS = [
  {
    title: 'Ontdekken',
    text: 'We leren je zaak, je publiek, je positionering en je doelen kennen voor we één scherm ontwerpen.',
    tags: ['Gesprekken', 'Onderzoek', 'Audit'],
  },
  {
    title: 'Bepalen',
    text: 'Structuur, inhoud en richting leggen we zwart op wit vast — de sitemap, de prioriteiten en het ene idee waar de hele site om draait.',
    tags: ['Sitemap', 'Contentplan', 'Richting'],
  },
  {
    title: 'Ontwerpen',
    text: 'Art direction, typografie en interactie ontwerpen we samen, scherm per scherm, tot elke pagina haar plek verdient.',
    tags: ['Art direction', 'Interface', 'Motion'],
  },
  {
    title: 'Bouwen',
    text: 'Met de hand gebouwd, responsive en snel. Motion wordt ontworpen in plaats van achteraf toegevoegd, en toegankelijkheid zit erin vanaf de eerste regel.',
    tags: ['Ontwikkeling', 'Content', 'Performance'],
  },
  {
    title: 'Lanceren',
    text: 'Testen op alle toestellen, SEO-fundament, analytics en livegang — daarna blijven we dichtbij terwijl de site zich zet.',
    tags: ['QA', 'SEO', 'Livegang'],
  },
];

export const PROJECT_TYPES = [
  { value: 'landingspagina', label: 'Landingspagina' },
  { value: 'bedrijfswebsite', label: 'Bedrijfswebsite' },
  { value: 'premium-website', label: 'Premium website' },
  { value: 'hosting', label: 'Hosting of maandelijkse wijzigingen' },
  { value: 'andere', label: 'Iets anders' },
];

export const BUDGETS = ['Minder dan €500', '€500–€1.500', '€1.500–€3.000', '€3.000+', 'Nog niet zeker'];

// Open places on /projecten reserved for the first client work.
export const CLIENT_SLOTS = 2;

// Self-initiated concepts — always presented as concepts, never as client work.
// Screens are 2000×852 captures from the running builds (/public/work); each concept is also
// built into /public/demos/<slug>/ and can be scrolled live on /werk/<slug>.
export const PROJECTS = [
  {
    slug: 'house-of-baroque',
    title: 'The House of Baroque',
    kind: 'Museumwebsite',
    year: '2026',
    summary: 'Een fictief museum voor zeventiende-eeuwse kunst, ontworpen als een digitaal paleis.',
    vision: [
      'De opdracht die we onszelf gaven: laat een museumsite aanvoelen als een wandeling door het gebouw, niet als bladeren door een catalogus. Elke pagina heeft het ritme van een reeks zalen — donkere ruimtes, één bundel licht, het werk in het midden.',
      'Het licht is geleend van Caravaggio: bijna zwarte achtergronden, warme ivoren letters en antiek goud, alleen daar waar het oog moet landen. Klassieke schreeflettertypes dragen de stem, handgetekend filigraan omlijst de randen, en de collectie hangt in salonstijl voor ze opengaat in een schermvullende viewer met toelichting van de conservator.',
    ],
    direction: 'Clair-obscur, ingetogen, ceremonieel',
    type: 'Cormorant Garamond · EB Garamond · Jost',
    palette: ['#0b0a08', '#591318', '#c6a15c', '#f1e7d3'],
    features: ['Collectie in salonopstelling', 'Schermvullende kunstwerk-viewer', 'Handgetekend SVG-ornament', 'Smooth scroll en parallax'],
    demo: asset('demos/house-of-baroque/index.html'),
    // The live demo loads these when opened; disclosed on the page and in the privacy statement.
    thirdParties: ['Google Fonts', 'Wikimedia Commons'],
    cover: { src: asset('work/baroque-hero.webp'), alt: 'Homepage van The House of Baroque: titel in schreefletters over Caravaggio’s De roeping van Matteüs' },
    shots: [
      { src: asset('work/baroque-collection.webp'), alt: 'Collectiepagina met twee Judith-schilderijen in vergulde lijsten op een donkere wand' },
      { src: asset('work/baroque-museum.webp'), alt: 'Museumsectie met de titel “Where art becomes architecture” boven een beschilderd plafond' },
      { src: asset('work/baroque-visit.webp'), alt: 'Bezoekerssectie met openingsuren, tickets en rondleidingen in goud op donkerbruin' },
    ],
  },
  {
    slug: 'riot-house',
    title: 'Riot House',
    kind: 'Brandingwebsite',
    year: '2026',
    summary: 'Een fictieve kunststudio en creative house in Rotterdam, met een merk dat niet stil wil zitten.',
    vision: [
      'Waar de meeste studiosites fluisteren, is deze gebouwd om te roepen. De merkzin — art should be loud — werd de designregel: de website gedraagt zich zelf als de studiomuur, vol opgeprikt, gelaagd en bewust ongetemd.',
      'Botsende primaire kleuren op warm papier, vijf lettertypes die in één titel op elkaar knallen, scheve kaders, stickers, handschrift en marquees. De chaos staat op een strak raster, zodat alles navigeerbaar blijft: naast elke luide beweging staat een rustige.',
    ],
    direction: 'Maximalistische collage, gecontroleerde chaos',
    type: 'Anton · Playfair Display · Bebas Neue · Space Mono · Caveat',
    palette: ['#f3e9d6', '#1e2ff5', '#e5122e', '#c6ff3a', '#ff2f97'],
    features: ['Collage-hero met pointer-parallax', 'Gegenereerde kunstwerken', 'Salonwand met bijschriften', 'Eigen cursor en magnetische UI'],
    demo: asset('demos/riot-house/index.html'),
    thirdParties: ['Google Fonts'],
    cover: { src: asset('work/riot-house-hero.webp'), alt: 'Homepage van Riot House: “Art should be loud” in botsende lettertypes over een collage in kleurvlakken' },
    shots: [
      { src: asset('work/riot-house-salon.webp'), alt: 'Scheve kunstwerkkaders op crèmepapier met handgeschreven titels en een zwarte bijschriftband' },
      { src: asset('work/riot-house-footer.webp'), alt: 'Rode footer met omlijnde titel “Strange.”, gestapelde navigatie en een nieuwsbriefveld' },
    ],
  },
  {
    slug: 'huisarts-claes',
    title: 'Huisarts Claes',
    kind: 'Website huisartsenpraktijk',
    year: '2026',
    summary: 'Een fictieve huisartsenpraktijk in Hasselt: rustig, warm en meteen duidelijk hoe je een afspraak maakt.',
    vision: [
      'Bij de huisarts zoekt niemand spektakel. Mensen willen drie dingen weten: kan ik terecht, hoe snel, en bij wie. De hele pagina is daarop gebouwd — de afspraakknop staat altijd binnen handbereik en het belangrijkste staat in de eerste schermhoogte.',
      'Een kalm marineblauw en zachte, handgetekende lijnen vervangen het klinische wit van de meeste praktijksites. Een heldere schreefloze letter draagt de inhoud, een cursieve schreef geeft de arts een persoonlijke stem. Snel, toegankelijk en gebouwd als template, zodat een echte praktijk er vlot op kan overstappen.',
    ],
    direction: 'Kalm, persoonlijk, vertrouwenwekkend',
    type: 'Urbanist · Source Sans 3 · Newsreader',
    palette: ['#e8eaf0', '#fcfcfe', '#1c2a6e', '#a8b3ee'],
    features: ['Afspraakknop altijd binnen handbereik', 'Persoonlijke boodschap van de arts', 'Toegankelijk en snel geladen', 'Template: alle tekst in één bestand'],
    demo: asset('demos/huisarts-claes/index.html'),
    thirdParties: [],
    cover: { src: asset('work/huisarts-hero.webp'), alt: 'Homepage van Huisarts Claes: de titel “Gezond worden begint bij een goed gesprek” naast een portret in marineblauw' },
    shots: [
      { src: asset('work/huisarts-a.webp'), alt: 'Kerncijfers van de praktijk en het zorgaanbod in een rustige lijst' },
      { src: asset('work/huisarts-b.webp'), alt: 'Werkwijze in drie stappen, verbonden door een golvende lijn' },
    ],
  },
  {
    slug: 'groenhof-tuinen',
    title: 'Groenhof Tuinen',
    kind: 'Landingspagina tuinaannemer',
    year: '2026',
    summary: 'Een fictieve tuinaannemer uit Hasselt, met een landingspagina die even uitnodigend voelt als een goed aangelegde tuin.',
    vision: [
      'Een tuinaannemer verkoopt iets wat je moet zien om het te geloven. Daarom opent de pagina met een volle, levende tuin en één duidelijke stap: plan een tuinbezoek. Wie verder scrolt, krijgt diensten, werkwijze, werkgebied en projecten — telkens met de volgende stap binnen handbereik.',
      'Het palet komt rechtstreeks uit de tuin: mos, bosgroen en een frisse limoentoets voor de acties, op zachte salie- en zandtinten. Een ronde, vriendelijke titelletter naast een sobere broodtekst houdt alles toegankelijk, en een eigen kaart van het werkgebied maakt het lokaal en tastbaar.',
    ],
    direction: 'Natuurlijk, uitnodigend, lokaal',
    type: 'Outfit · Public Sans',
    palette: ['#f7f5ef', '#eef2e6', '#4a7524', '#23401a', '#c8e04b'],
    features: ['Hero met één duidelijke eerste stap', 'Eigen kaart van het werkgebied', 'Video-timelapse met ondertitels', 'Offerteknop steeds binnen handbereik'],
    demo: asset('demos/groenhof-tuinen/index.html'),
    thirdParties: [],
    cover: { src: asset('work/groenhof-hero.webp'), alt: 'Homepage van Groenhof Tuinen: “Maak van uw tuin de mooiste plek van uw huis” over een weelderige tuin' },
    shots: [
      { src: asset('work/groenhof-a.webp'), alt: 'Sectie “Waarom Groenhof” met voordelen en een raster van tuinfoto’s' },
      { src: asset('work/groenhof-b.webp'), alt: 'Kaart van het werkgebied rond Hasselt met contactgegevens' },
    ],
  },
];

export const formatPrice = (n) => `€${n.toLocaleString('nl-BE')}`;
