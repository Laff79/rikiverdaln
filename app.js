// ---- Data (innebygd fallback) ----
let companies = {
  "Stiklestad Kulturhus": [
    "Premiere på ny musical blir utsolgt → kurs opp 40%",
    "Olav den hellige spøker i gangene → kurs ned 25%",
    "Ordføreren roser kulturhuset i tale → kurs opp 15%",
    "Skuespiller glemmer replikk på scenen → kurs ned 10%",
    "VR-visning av Håvamål lanseres → kurs opp 30%",
    "Stiklestadspillet får dårlig anmeldelse i Adresseavisen → kurs ned 20%",
    "Gratis kaffe til alle besøkende → kurs opp 15%",
    "Teknisk feil under åpningsshow → kurs ned 20%",
    "Kulturhuset selger ut juleshowet på 5 minutter → kurs opp 25%",
    "Scenen leies ut til rockekonsert med En Dans På Nevroser → kurs opp 35%",
    "Skuespiller sovner under prøve → kurs ned 15%",
    "Festival trekker dobbelt så mange som i fjor → kurs opp 40%",
    "Skandale på premierefesten → kurs ned 20%",
    "Barneteateret imponerer → kurs opp 10%",
    "Lokal maleriutstilling blir kritikerrost → kurs opp 20%",
    "Strømmen går midt i forestilling → kurs ned 15%",
    "Ny scene bygges på dugnad → kurs opp 25%",
    "Improvisert Vømmøl-show skaper kaos → kurs opp 15%",
    "Turistbusser fra Sverige strømmer til → kurs opp 30%",
    "Ingen publikummere møter opp til mandagsforestilling → kurs ned 25%"
  ],
  "Aker Verdal": [
    "Øystein Helden finner opp en genial patent → kurs opp 15%",
    "Martine Rønsåsbjørg vinner quiz på julebordet → kurs opp 20%",
    "Lars Ole Olsen synger Sputnik i hallen → kurs opp 25%",
    "Gigantkontrakt signert i Brasil → kurs opp 60%",
    "Streik på verftet → kurs ned 40%",
    "Kranen setter ny løfterekord → kurs opp 30%",
    "Offshore-krisen rammer hardt → kurs ned 35%",
    "Innovasjonspris til Aker Verdal → kurs opp 25%",
    "Snøstorm stopper produksjonen → kurs ned 15%",
    "Fagforeningen går til streik → kurs ned 20%",
    "Ny havvind-satsing lanseres → kurs opp 35%",
    "Øystein Helden triller pølseboden inn i hallen → kurs opp 15%",
    "Produksjonsrekord på 48 timer → kurs opp 30%",
    "Martine Rønsåsbjørg glemmer nøkler til hallen → kurs ned 10%",
    "Offisiell åpning av ny kai → kurs opp 20%",
    "Feilberegning forsinker leveransen → kurs ned 25%",
    "Lars Ole Olsen deler ut signerte gitarplektre → kurs opp 10%",
    "Kaffeautomaten ute av drift → kurs ned 5%",
    "Statsministeren besøker verftet → kurs opp 40%",
    "Byggestans på grunn av kulde → kurs ned 15%"
  ],
  "Elvegården Barnehage": [
    "Barna lager utstilling med lego → kurs opp 15%",
    "Vannlekkasje i kjelleren → kurs ned 20%",
    "Foreldreundersøkelse gir toppscore → kurs opp 25%",
    "Tre barn lærer å sykle på samme dag → kurs opp 15%",
    "Barnehagen får støtte til bussturer → kurs opp 20%",
    "Kjøkkenet går tomt for saft → kurs ned 10%",
    "Ny lekeapparat på plass → kurs opp 30%",
    "Stengt pga. omgangssyke → kurs ned 25%",
    "Prosjekt vant miljøpris → kurs opp 20%",
    "Personalet kler seg ut som superhelter → kurs opp 15%",
    "Brannøvelse går galt → kurs ned 15%",
    "Barna arrangerer kunstutstilling → kurs opp 20%",
    "Kaniner på besøk i barnehagen → kurs opp 15%",
    "Tidlivakta brenner grøten → kurs ned 10%",
    "Sommeravslutning trekker rekordpublikum → kurs opp 25%",
    "Juletrefest avlyst → kurs ned 20%",
    "Foreldremøte går viralt på TikTok → kurs opp 10%",
    "Barnehagen får ny minibuss → kurs opp 15%",
    "Storm ødelegger lekeapparater → kurs ned 20%",
    "Barn lager Vømmøl-sanger → kurs opp 15%"
  ],
  "Bruktbo Mule": [
    "Tanja Helden omorganiserer hele butikken på en dag → kurs opp 30%",
    "Gudrun Ramfjord setter fyr på stol → kurs ned 35%",
    "Kunde finner hellig relikvium → kurs opp 15%",
    "NRK lager reportasje om rotete lager → kurs opp 25%",
    "Tomt for kaffe i kantina → kurs ned 20%",
    "Rekordbesøk på loppemarked → kurs opp 30%",
    "Varebil punkterer på E6 → kurs ned 15%",
    "Sofa fra 70-tallet går viralt på TikTok → kurs opp 40%",
    "Bruktbo Mule kåres til Grønn bedrift → kurs opp 25%",
    "Kundeklage på ødelagt TV → kurs ned 10%",
    "Stjålet sykkel solgt tilbake til eier → kurs opp 15%",
    "Prisøkning på retro-møbler → kurs opp 30%",
    "Brukthandlerkonferanse i Verdal → kurs opp 20%",
    "Boligmarkedet svikter → kurs ned 20%",
    "Gratisdag går over budsjett → kurs ned 25%",
    "Gudrun Ramfjord glemmer å prise varene → kurs ned 10%",
    "Tanja Helden arrangerer motevisning i bruktklær → kurs opp 20%",
    "Regnvær ødelegger marked → kurs ned 15%",
    "TikTok-influencer besøker Bruktbo → kurs opp 35%",
    "Bruktbo starter egen podcast → kurs opp 15%"
  ],
  "Wow Medialab": [
    "Lina Solstad leverer VR-presentasjon uten strøm → kurs ned 30%",
    "Torbjørn Solstad lanserer Vømmøl-filter i AR → kurs opp 40%",
    "Wow lager reklamefilm for Prix Ørmelen → kurs opp 20%",
    "Kundemøte holdes i Minecraft → kurs opp 15%",
    "Prosjektor eksploderer under demo → kurs ned 25%",
    "Ny logo kritiseres på Facebook → kurs ned 15%",
    "Samarbeid med Aker om VR-trening → kurs opp 35%",
    "Kaffe sølt over server → kurs ned 20%",
    "Lanserer AI som skriver Vømmøl-tekster → kurs opp 25%",
    "Feilskrevet pressemelding går viralt → kurs opp 15%",
    "Lina Solstad kåres til årets gründer → kurs opp 30%",
    "Torbjørn Solstad mister USB-stick med prosjekt → kurs ned 15%",
    "Wow lager Vømmøl-spill i VR → kurs opp 40%",
    "PC krasjer midt i presentasjon → kurs ned 20%",
    "Nytt medielab-prosjekt vinner pris → kurs opp 25%",
    "Hackere legger inn russe-sanger på nettsiden → kurs ned 10%",
    "Wow Medialab kåres til beste arbeidsplass → kurs opp 20%",
    "Lokalavis anklager dem for fake news → kurs ned 15%",
    "Ny dronefilming av Ørin skaper engasjement → kurs opp 20%",
    "Investor trekker seg → kurs ned 25%"
  ],
  "Lag": [
    "Ole Morten Helden tegner skeiv grunnmur → kurs ned 30%",
    "Tor Åge Helden møter på byggeplass i bunad → kurs opp 25%",
    "Byggelaget glemmer spiker → kurs ned 20%",
    "Vinner anbud på rådhus → kurs opp 40%",
    "Materialprisene skyter i været → kurs ned 25%",
    "Hele staben drar på Vømmølfestival → kurs opp 15%",
    "Ole Morten Helden glemmer tegninger hjemme → kurs ned 10%",
    "Tor Åge Helden leder rekordrask bygging → kurs opp 35%",
    "Regnvær forsinker prosjekt → kurs ned 20%",
    "TV2 lager dokumentar om byggeprosjektet → kurs opp 25%",
    "Arbeidsulykke setter prosjekt på vent → kurs ned 30%",
    "Kaffeautomaten virker igjen → kurs opp 10%",
    "Lag får oppdrag i Sverige → kurs opp 30%",
    "Kommunen avlyser byggeprosjekt → kurs ned 25%",
    "Ole Morten Helden synger på taket → kurs opp 15%",
    "Feil mål på blåkopi → kurs ned 20%",
    "Tor Åge Helden vant byggmester-pris → kurs opp 35%",
    "Arbeidere streiker → kurs ned 30%",
    "Kundene jubler over nytt næringsbygg → kurs opp 20%",
    "Buldoser kjører seg fast → kurs ned 15%"
  ],
  "NAV Verdal": [
    "Lars Øyvinn Helden møter til avtalt tid → kurs opp 20%",
    "System krasjer under meldekort → kurs ned 30%",
    "NAV-ansatte arrangerer karaoke → kurs opp 15%",
    "Tiltak for En Dans På Nevroser → kurs opp 40%",
    "Alle får dobbelt utbetalt ved feil → kurs ned 25%",
    "Kaffemaskin i resepsjonen gratis → kurs opp 10%",
    "Møte med 200 personer på en dag → kurs opp 30%",
    "Datasystem ute i 3 dager → kurs ned 35%",
    "Ny NAV-app lanseres → kurs opp 25%",
    "Bygget må stenge pga. strømbrudd → kurs ned 20%",
    "Ordfører skryter av NAV Verdal → kurs opp 15%",
    "Lang kø utenfor kontoret → kurs ned 10%",
    "NAV Verdal kåres til mest effektive i fylket → kurs opp 25%",
    "Feilutbetaling til 1000 personer → kurs ned 30%",
    "Gratis vaffeldag på NAV → kurs opp 20%",
    "Alle printere slutter å virke → kurs ned 10%",
    "NAV Verdal får ny leder → kurs opp 15%",
    "Systemet blir hacket → kurs ned 40%",
    "Lars Øyvinn Helden får jobbtilbud → kurs opp 20%",
    "Arbeidsmarkedstiltak utvides → kurs opp 25%"
  ],
  "Veksttorget": [
    "Veronica Helden holder kurs i børs-triks → kurs opp 20%",
    "CV-mal på nettsiden har skrivefeil → kurs ned 15%",
    "Veksttorget arrangerer speed-dating for jobbsøkere → kurs opp 25%",
    "EU-midler brukt på pizza og brus → kurs ned 20%",
    "Praktikant oppfinner ny støvsuger → kurs opp 30%",
    "Veronica Helden kåres til månedens ansatt → kurs opp 15%",
    "Ny avtale med NAV → kurs opp 20%",
    "Prosjekt får støtte fra Innovasjon Norge → kurs opp 25%",
    "Datasystem krasjer → kurs ned 20%",
    "Jobbmesse får rekordoppmøte → kurs opp 30%",
    "Veronica Helden glemmer å sende ut invitasjoner → kurs ned 15%",
    "Ny kursserie i intervju-teknikk → kurs opp 20%",
    "Dårlig medieomtale i Innherred → kurs ned 25%",
    "Digital plattform lanseres → kurs opp 20%",
    "Veksttorget får kritikk for dårlig kaffe → kurs ned 10%",
    "Samarbeid med Wow Medialab → kurs opp 25%",
    "Ung gründer får startpakke → kurs opp 30%",
    "Veronica Helden synger på personalfesten → kurs opp 10%",
    "Veksttorget vinner nasjonal pris → kurs opp 40%",
    "Alle printere stopper samtidig → kurs ned 15%"
  ],
  "Prix Ørmelen": [
    "Fredagskø gir rekordsalg → kurs opp 30%",
    "Tomt for smågodt før påske → kurs ned 20%",
    "Gratis kaffe-kampanje → kurs opp 25%",
    "Butikksjef glemmer å bestille Pepsi Max → kurs ned 30%",
    "Ny selvbetjent kasse → kurs opp 15%",
    "Brannalarm går under handletur → kurs ned 25%",
    "Kundetilfredshet på topp → kurs opp 20%",
    "Tyveri av smågodt → kurs ned 10%",
    "Butikken får pris for billigste melk → kurs opp 15%",
    "Kø til langt ut i gata → kurs opp 20%",
    "Frysedisk går i stykker → kurs ned 20%",
    "Barn selger lodd utenfor Prix → kurs opp 10%",
    "Verdal IL handler inn alt til cup → kurs opp 30%",
    "Regnvær øker salg av paraplyer → kurs opp 15%",
    "Kritikk for lange køer → kurs ned 15%",
    "Kundekortkampanje → kurs opp 20%",
    "Gratis kake ved jubileum → kurs opp 25%",
    "Energidrikk går viralt → kurs opp 30%",
    "Prisøkning på smør → kurs ned 15%",
    "Kaffeavtalen blir revet bort → kurs opp 20%"
  ],
  "Verdal Hotell": [
    "Fullbooket under Vømmølfestival → kurs opp 40%",
    "Dårlig TripAdvisor-anmeldelse → kurs ned 25%",
    "Ny konferansesal åpner → kurs opp 20%",
    "Kokk mister kontroll på buffeten → kurs ned 15%",
    "Bryllupsfest varer i tre dager → kurs opp 30%",
    "Heisen stopper midt i natta → kurs ned 20%",
    "Hotell får pris for beste frokost → kurs opp 25%",
    "Gjester klager på støy → kurs ned 10%",
    "Rockeband ødelegger rom → kurs ned 30%",
    "Kjendis bor på hotellet → kurs opp 20%",
    "Strømbrudd midt under middag → kurs ned 15%",
    "Gratis spa-weekend utloddes → kurs opp 25%",
    "Utenbys konferanse flyttes til Verdal → kurs opp 30%",
    "Kaker forsvinner fra frokostbuffet → kurs ned 10%",
    "Hotell utvider med ny fløy → kurs opp 35%",
    "Brannalarm går under middag → kurs ned 20%",
    "Gjester deler bilder av utsikten → kurs opp 15%",
    "Kritikk for dyre rompriser → kurs ned 20%",
    "Ny sjef ansatt → kurs opp 15%",
    "Rom selges ut på rekordtid → kurs opp 30%"
  ],
  "Verdal IL": [
    "Opprykk til OBOS-ligaen → kurs opp 50%",
    "Nedrykkstrussel → kurs ned 30%",
    "Seier mot Levanger FK → kurs opp 25%",
    "Tap mot Nardo → kurs ned 20%",
    "Sponsoravtale med Prix Ørmelen → kurs opp 15%",
    "Ny trener ansatt → kurs opp 20%",
    "Spiller skårer hat-trick → kurs opp 30%",
    "Keeper glemmer hanskene → kurs ned 15%",
    "Dugnadsfest gir millionoverskudd → kurs opp 40%",
    "Spillerekkord i kiosken → kurs opp 10%",
    "Regnvær avlyser kamp → kurs ned 20%",
    "Vømmølgutta spiller på stadion → kurs opp 35%",
    "Dommerfeil koster seieren → kurs ned 25%",
    "Ny tribune åpner → kurs opp 20%",
    "Spiller skader seg på trening → kurs ned 15%",
    "Cupseier feires i tre dager → kurs opp 30%",
    "Kritikk for dårlig gress → kurs ned 10%",
    "Sponsor trekker seg → kurs ned 25%",
    "Ung spiller selges til RBK → kurs opp 40%",
    "Fans arrangerer pyroshow → kurs opp 15%"
  ],
  "Coop Extra Verdal": [
    "Rekordomsetning i jula → kurs opp 20%",
    "Kassedata svikter → kurs ned 15%",
    "Gratis kaffe til alle → kurs opp 15%",
    "Lang kø til kassa → kurs ned 10%",
    "Butikken pusser opp → kurs opp 25%",
    "Brannalarm går midt i handletid → kurs ned 20%",
    "Kundeklubb gir rekordpåmelding → kurs opp 20%",
    "Tomt for smågodt → kurs ned 15%",
    "Gratis smaksprøver trekker kø → kurs opp 15%",
    "Ny fruktavdeling åpner → kurs opp 20%",
    "Kritikk for tomme hyller → kurs ned 10%",
    "Black Friday gir kaos → kurs opp 30%",
    "Kundekortkampanje → kurs opp 20%",
    "Strømbrudd stopper kassa → kurs ned 25%",
    "Butikksjef kåres til årets leder → kurs opp 20%",
    "Gratis handleposer → kurs opp 10%",
    "Prispress fra konkurrent → kurs ned 15%",
    "Lokal avis roser ferskvaredisken → kurs opp 15%",
    "Leveransefeil gir tomme hyller → kurs ned 20%",
    "Solkampanje på grillmat → kurs opp 15%"
  ],
  "Farmors Fargerike Verden": [
    "Eli Anne Helden maler gigantisk veggkunst i sentrum → kurs opp 35%",
    "Kunstverk velter under åpning → kurs ned 20%",
    "Utstilling utsolgt første dag → kurs opp 40%",
    "Fargeknapp går viralt på TikTok → kurs opp 25%",
    "Penselstreik i atelieret → kurs ned 15%",
    "Barneverksted trekker rekordmange → kurs opp 20%",
    "Fargemangel hos leverandør → kurs ned 10%",
    "Kritikerroste akvareller → kurs opp 30%",
    "Regn ødelegger utekunst → kurs ned 15%",
    "Kunstnerprat på Stiklestad → kurs opp 15%",
    "Kunstnatt med live-musikk → kurs opp 20%",
    "Falsk signatur avsløres → kurs ned 25%",
    "Samarbeid med Wow Medialab (AR-galleri) → kurs opp 30%",
    "Feilblandet maling i 50 spann → kurs ned 20%",
    "Donasjon til barnehager → kurs opp 10%",
    "Nytt fargekart lanseres → kurs opp 15%",
    "Gavekortkampanje → kurs opp 20%",
    "Kunst på togstasjonen skaper debatt → kurs opp 15%",
    "Levering til Aker Verdal kantine → kurs opp 10%",
    "Eli Anne Helden vinner lokal kunstpris → kurs opp 35%"
  ]
};

// ---- State ----

function ensureCompanies(){
  if (!companies || Object.keys(companies).length === 0){
    console.warn('companies var tom — lager syntetisk liste fra stockPrices.');
    companies = Object.fromEntries(Object.keys(stockPrices).map(n=>[n,["Ingen nyheter tilgjengelig → kurs opp 0%","Systemmelding: datasett ikke lastet → kurs ned 0%"]]));
  }
}


let stockPrices = {
  "Aker Verdal": 600,
  "Stiklestad Kulturhus": 300,
  "Coop Extra Verdal": 250,
  "Lag": 230,
  "Verdal Hotell": 200,
  "Verdal IL": 180,
  "Wow Medialab": 150,
  "Veksttorget": 150,
  "NAV Verdal": 140,
  "Bruktbo Mule": 130,
  "Elvegården Barnehage": 110,
  "Prix Ørmelen": 100,
  "Farmors Fargerike Verden": 80
};
let holdings = {}, cash = 1000, day = 1;
let totalDays = null; // 10/20/30 eller null
let currentModeKey = null;
let currentDiff = 'easy'; // easy|normal|hard

// New Global State
let priceHistory = {}; // Stores { day: { company: price } }
let impactedCompanies = [];
let currentSort = 'name'; // 'name', 'price', 'change'


// Constants
const VOLATILITY_FACTOR = 0.10; // News impact can vary by +/- 10%
const DEPENDENCIES = {
    // Primary Company: [{ dependent: 'Other Company', keywords: ['keyword'], effect: 0.10 }]
    "Wow Medialab": [
        { dependent: "Aker Verdal", keywords: ["Aker"], effect: 0.15 }, // Samarbeid med Aker om VR-trening -> Aker gets +15% of the news-effect (if positive)
        { dependent: "Prix Ørmelen", keywords: ["Prix Ørmelen"], effect: 0.05 },
    ],
    "Verdal IL": [
        { dependent: "Prix Ørmelen", keywords: ["Prix Ørmelen"], effect: 0.05 },
    ],
    "Farmors Fargerike Verden": [
        { dependent: "Wow Medialab", keywords: ["Wow Medialab"], effect: 0.10 },
        { dependent: "Aker Verdal", keywords: ["Aker Verdal", "kantine"], effect: 0.05 },
    ],
    "NAV Verdal": [
        { dependent: "Veksttorget", keywords: ["NAV"], effect: 0.10 },
    ],
    "Stiklestad Kulturhus": [
        { dependent: "NAV Verdal", keywords: ["Nevroser"], effect: 0.10 }, // Tiltak for En Dans På Nevroser
        { dependent: "Verdal Hotell", keywords: ["Festival", "juleshowet"], effect: 0.15 },
        { dependent: "Farmors Fargerike Verden", keywords: ["maleriutstilling"], effect: 0.05 },
    ],
    "Veksttorget": [
        { dependent: "Wow Medialab", keywords: ["Wow Medialab"], effect: 0.10 },
        { dependent: "NAV Verdal", keywords: ["NAV"], effect: 0.10 }
    ]
};


// debounce helper
function debounceNext(fn){
  const btn = document.getElementById('nextDayBtn');
  return function(){ if (btn.disabled) return; btn.disabled = true; try{ fn(); } finally { setTimeout(()=>btn.disabled=false,300); } }
}

const NEWS_LIMIT_VISIBLE = 30, NEWS_LIMIT_BUFFER = 200;
let newsBuffer = [];

// delta tracking
let prevPrices = {}, lastChangePct = {};

const DIFFICULTIES = {
  easy:   { startCash:1500, commission:0.005, driftMin:-1.0, driftMax: 1.8, dayBiasRange:0.40 },
  normal: { startCash:1000, commission:0.010, driftMin:-1.5, driftMax: 1.5, dayBiasRange:0.30 },
  hard:   { startCash: 800, commission:0.015, driftMin:-2.0, driftMax: 1.2, dayBiasRange:0.25 }
};

function newsCountToday() { return Math.random() < 0.5 ? 2 : 3; }
function fmt(n) { return `${n.toFixed(0)} kr`; }
function clamp(n) { return Math.max(1, n); } // Clamp at 1 kr, not 0

document.addEventListener('DOMContentLoaded', () => {
  // try external dataset, but always keep fallback if it fails
  tryLoadExternal().finally(()=>{
    // Bind UI
    document.body.addEventListener('click', (e)=>{
      if (e.target.classList.contains('diffBtn')) {
        document.querySelectorAll('.diffBtn').forEach(b=>b.classList.remove('active'));
        e.target.classList.add('active');
        currentDiff = e.target.dataset.diff;
        renderHighscores();
      }
      if (e.target.classList.contains('modeBtn')) {
        startGame(e.target.dataset.days);
      }
      // NEW: Sorting handler
      if (e.target.classList.contains('sortBtn')) {
        document.querySelectorAll('.sortBtn').forEach(b=>b.classList.remove('active'));
        e.target.classList.add('active');
        currentSort = e.target.dataset.sort;
        updatePricesPanel();
      }
    });

    // NEW: Real-time trade update listener
    document.getElementById('quantityInput').addEventListener('input', updateTradePreview);
    document.getElementById('companySelect').addEventListener('change', updateTradePreview);


    document.getElementById('restartBtn').addEventListener('click', () => {
      const key = currentModeKey || '20'; startGame(key === 'inf' ? '∞' : key);
    });
    document.getElementById('toStartBtn').addEventListener('click', showStart);
    document.getElementById('clearFeedBtn').addEventListener('click', () => { newsBuffer = []; renderFeed(); });
    document.getElementById('compactToggle').addEventListener('change', (e)=>{
      document.getElementById('newsItems').classList.toggle('compact', e.target.checked);
    });
    document.getElementById('nextDayBtn').addEventListener('click', debounceNext(nextDay));
    document.getElementById('buyBtn').addEventListener('click', buy);
    document.getElementById('sellBtn').addEventListener('click', sell);

    ensureCompanies(); showStart();
  });
});

async function tryLoadExternal(){
  try {
    const res = await fetch('hendelser.json', {cache:'no-store'});
    if (!res.ok) throw new Error('HTTP '+res.status);
    const json = await res.json();
    if (json && Object.keys(json).length >= 5) companies = json;
  } catch(e){
    console.warn('Bruker innebygd dataset. Årsak:', e.message);
  }
}

function resetState(){
  holdings = {}; newsBuffer = []; day = 1;
  prevPrices = {}; lastChangePct = {};
  cash = DIFFICULTIES[currentDiff].startCash;
  Object.keys(companies).forEach(n => holdings[n] = 0);
  priceHistory = {}; // NEW: Reset history
  impactedCompanies = []; // NEW: Reset impacts
}

function showStart(){
  document.getElementById('startScreen').classList.add('visible');
  document.getElementById('endScreen').classList.remove('visible');
  resetState();
  ensureCompanies();
  populateSelect();
  updateUI();
  renderHighscores();
}

function startGame(daysChoice){
  if (daysChoice === '∞') { totalDays = null; currentModeKey = 'inf'; }
  else { totalDays = parseInt(daysChoice,10); currentModeKey = String(totalDays); }
  document.getElementById('startScreen').classList.remove('visible');
  document.getElementById('endScreen').classList.remove('visible');
  resetState();
  // Set initial prices at day 1 start
  Object.keys(companies).forEach(name => {
      stockPrices[name] = stockPrices[name] ?? 100;
      prevPrices[name] = stockPrices[name];
  });
  updateUI();
}

function renderHighscores(){
  const labels = {'10':'10 dager','20':'20 dager','30':'30 dager','inf':'Uendelig'};
  const hsDiv = document.getElementById('highscores');
  const modes = ['10','20','30','inf'];
  const dLabel = {easy:'Lett', normal:'Normal', hard:'Hard'}[currentDiff];
  const lines = modes.map(m=>{
    const key = `ib_highscore_${m}_${currentDiff}`;
    const val = localStorage.getItem(key);
    return `<div>Highscore ${labels[m]} – ${dLabel}: <strong>${val ? Number(val).toFixed(0)+' kr' : '–'}</strong></div>`;
  });
  hsDiv.innerHTML = lines.join('');
}

function maybeEndGame(){
  if (totalDays && day > totalDays){
    const p = portfolioValue();
    const total = p + cash;
    document.getElementById('sumMode').textContent = (currentModeKey==='inf'?'Uendelig': currentModeKey+' dager');
    document.getElementById('sumDiff').textContent = {easy:'Lett', normal:'Normal', hard:'Hard'}[currentDiff];
    document.getElementById('sumDays').textContent = totalDays;
    document.getElementById('sumCash').textContent = fmt(cash);
    document.getElementById('sumPortfolio').textContent = fmt(p);
    document.getElementById('sumTotal').textContent = fmt(total);
    const key = `ib_highscore_${currentModeKey || '20'}_${currentDiff}`;
    const prev = Number(localStorage.getItem(key) || 0);
    let note = '';
    if (!prev || total > prev){ localStorage.setItem(key, String(total)); note = '🎉 Ny highscore!'; }
    else { note = `Beste til nå: ${prev.toFixed(0)} kr`; }
    document.getElementById('sumHighscore').textContent = note;
    document.getElementById('endScreen').classList.add('visible');
  }
}

function populateSelect() {
  const select = document.getElementById('companySelect');
  select.innerHTML = '';
  ensureCompanies();
  const names = Object.keys(companies);
  names.forEach(name => {
    const option = document.createElement('option');
    option.value = name;
    // Fjernet pris fra option text
    option.textContent = name;
    select.appendChild(option);
  });
  document.getElementById('companyCount').textContent = `${names.length} bedrifter`;
  updateTradePreview(); // NEW: Call on select population
}

function updateTradePreview(){
  const diff = DIFFICULTIES[currentDiff];
  const fee = diff.commission;
  const company = document.getElementById('companySelect').value;
  const qtyInput = document.getElementById('quantityInput');
  const qty = Math.max(1, Math.floor(parseInt(qtyInput.value,10) || 0));
  const price = stockPrices[company] ?? 100;
  const currentHolding = holdings[company] || 0;

  document.getElementById('currentHoldingEl').textContent = currentHolding;

  // Max Buy Calculation
  const maxBuyQty = Math.floor(cash / (price * (1 + fee)));
  document.getElementById('maxBuyEl').textContent = maxBuyQty > 0 ? `${maxBuyQty} (${fmt(maxBuyQty * price * (1 + fee))})` : '0';

  // Cost/Proceeds Preview
  if (qty > 0) {
    const buyCost = qty * price * (1 + fee);
    const sellProceeds = qty * price * (1 - fee);
    
    let previewHtml = '';
    // Check if player can afford to buy
    if (buyCost <= cash) {
      previewHtml = `Kjøp: ${fmt(buyCost)} (Totalt)`;
    } else if (qty <= currentHolding) {
      // Show sell if buy is too expensive but sell is possible
      previewHtml = `Salg: ${fmt(sellProceeds)} (Netto)`;
    } else {
      previewHtml = `Mangler kontanter/aksjer`;
    }

    document.getElementById('costPreviewEl').textContent = previewHtml;

    // Validation for buy/sell buttons
    document.getElementById('buyBtn').disabled = buyCost > cash;
    document.getElementById('sellBtn').disabled = qty > currentHolding;

  } else {
    document.getElementById('costPreviewEl').textContent = 'Angi antall';
    document.getElementById('buyBtn').disabled = true;
    document.getElementById('sellBtn').disabled = true;
  }
}


function updatePricesPanel() {
  const container = document.getElementById('prices');
  container.innerHTML = '';

  let sortedPrices = Object.entries(stockPrices)
    .map(([name, price]) => {
      const prev = prevPrices[name] ?? price;
      const pct = prev ? ((price/prev)-1)*100 : 0;
      lastChangePct[name] = pct;
      return { name, price, pct };
    });

  // Apply Sorting
  if (currentSort === 'name') {
    sortedPrices.sort((a, b) => a.name.localeCompare(b.name));
  } else if (currentSort === 'price') {
    sortedPrices.sort((a, b) => b.price - a.price); // Descending
  } else if (currentSort === 'change') {
    sortedPrices.sort((a, b) => b.pct - a.pct); // Descending
  }

  sortedPrices.forEach(({name, price, pct})=>{
      let arrow = '⏸️', deltaClass='flat';
      if (pct > 0.05) { arrow='▲'; deltaClass='up'; }
      else if (pct < -0.05) { arrow='▼'; deltaClass='down'; }

      const isImpacted = impactedCompanies.includes(name); // NEW: Check for impact
      const row = document.createElement('div');
      row.className = `price ${isImpacted ? 'impacted' : ''}`; // NEW: Add class
      row.innerHTML = `<span class="name"><span class="arrow ${deltaClass}">${arrow}</span>${name}</span>
                       <strong>${fmt(price)}</strong>
                       <span class="delta ${deltaClass}">${pct>=0?'+':''}${pct.toFixed(1)}%</span>`;
      container.appendChild(row);
  });
}

function portfolioValue() { return Object.entries(holdings).reduce((s,[n,q]) => s + q*(stockPrices[n] ?? 100), 0); }

function updatePortfolioTable() {
  const tbody = document.querySelector('#portfolioTable tbody');
  tbody.innerHTML = '';
  Object.entries(holdings).filter(([_,q])=>q>0).sort((a,b)=>a[0].localeCompare(b[0])).forEach(([name,qty])=>{
    const tr = document.createElement('tr');
    const value = qty*(stockPrices[name] ?? 100);
    tr.innerHTML = `<td>${name}</td><td>${qty}</td><td>${fmt(stockPrices[name] ?? 100)}</td><td>${fmt(value)}</td>`;
    tbody.appendChild(tr);
  });
}

function updateKPIs() {
  document.getElementById('dayEl').textContent = day;
  document.getElementById('daysLeftEl').textContent = totalDays ? (totalDays - (day-1)) : '∞';
  document.getElementById('cashEl').textContent = fmt(cash);
  const p = portfolioValue();
  document.getElementById('portfolioValueEl').textContent = fmt(p);
  document.getElementById('totalValueEl').textContent = fmt(p + cash);
  document.getElementById('feeEl').textContent = `${(DIFFICULTIES[currentDiff].commission*100).toFixed(1)}%`;
}

function renderFeed(){
  const list = document.getElementById('newsItems');
  list.innerHTML = '';
  const visible = newsBuffer.slice(0, NEWS_LIMIT_VISIBLE);
  visible.forEach(text => {
    const item = document.createElement('div');
    item.className = 'news';
    item.textContent = text;
    list.appendChild(item);
  });
  document.getElementById('visibleCount').textContent = visible.length;
  document.getElementById('totalCount').textContent = newsBuffer.length;
}

function updateUI(){
  updatePricesPanel();
  updatePortfolioTable();
  updateKPIs();
  populateSelect();
  renderFeed();
  updateTradePreview(); // NEW: Call here to update holding/cost
}

function pushNews(text){
  newsBuffer.unshift(text);
  if (newsBuffer.length > NEWS_LIMIT_BUFFER) newsBuffer = newsBuffer.slice(0, NEWS_LIMIT_BUFFER);
}

function parseChange(evt){
  const m = evt.match(/(opp|ned)\s+(\d+)%/);
  if(!m) return null;
  const dir = m[1], pct = parseInt(m[2],10);

  // NEW: Variert nyhetspåvirkning (Randomisation)
  const deviation = (Math.random() * VOLATILITY_FACTOR * 2) - VOLATILITY_FACTOR; // +/- 10% of the effect
  
  // Calculate final change factor (1 + finalPct/100)
  const baseFactor = pct / 100;
  const deviationAmount = baseFactor * deviation;
  const finalFactor = baseFactor + deviationAmount;

  // Use base factor for reporting, but apply finalFactor for calculation
  if (dir === 'opp') return { dir: 1, basePct: pct, finalFactor: 1 + finalFactor, func: (p) => p * (1 + finalFactor) };
  else return { dir: -1, basePct: pct, finalFactor: -finalFactor, func: (p) => p * (1 - finalFactor) };
}

function sampleNoReplace(keys, k){
  const pool = [...keys], out = [];
  while(out.length < k && pool.length){
    const i = Math.floor(Math.random()*pool.length);
    out.push(pool[i]); pool.splice(i,1);
  }
  return out;
}

function nextDay(){
  // NEW: Store full price history before changes
  priceHistory[day] = Object.fromEntries(Object.entries(stockPrices));

  // snapshot previous prices at start
  prevPrices = Object.fromEntries(Object.entries(stockPrices).map(([k,v])=>[k,v]));
  impactedCompanies = []; // NEW: Reset impacted companies list

  const diff = DIFFICULTIES[currentDiff];
  const n = newsCountToday();
  const dayBias = (Math.random()*2 - 1) * diff.dayBiasRange;

  const primaryImpacted = sampleNoReplace(Object.keys(companies), n);
  
  pushNews(`📅 Dag ${day}: ${n} nyhet(er) rammer ${primaryImpacted.join(', ')}`);

  // Track dependencies for later processing (to apply secondary effects after primary)
  const secondaryEffects = {};

  primaryImpacted.forEach(company => {
    const events = companies[company];
    const evt = events[Math.floor(Math.random()*events.length)];
    const changeResult = parseChange(evt);

    if (changeResult) {
      const before = stockPrices[company] ?? 100;
      const after = clamp(changeResult.func(before));
      stockPrices[company] = after;
      impactedCompanies.push(company);

      const actualPct = ((after/before)-1)*100;
      pushNews(`📰 ${company}: ${evt} (Real endring: ${actualPct>=0?'+':''}${actualPct.toFixed(1)}%, fra ${fmt(before)} til ${fmt(after)})`); 

      // NEW: Selskapsavhengigheter (Dependency check)
      if (DEPENDENCIES[company]){
        DEPENDENCIES[company].forEach(dep => {
          // Check if news text contains one of the keywords
          if (dep.keywords.some(k => evt.includes(k))){
            const depEffect = changeResult.dir * actualPct * dep.effect; // Secondary effect is a percentage of the actual change
            // Add to secondary effects buffer
            secondaryEffects[dep.dependent] = (secondaryEffects[dep.dependent] || 0) + depEffect;
          }
        });
      }

    } else {
      pushNews(`📰 ${company}: ${evt}`);
    }
  });

  // Apply Secondary Effects from Dependencies
  Object.entries(secondaryEffects).forEach(([depName, totalEffectPct]) => {
      const before = stockPrices[depName] ?? 100;
      const after = clamp(before * (1 + totalEffectPct / 100));
      stockPrices[depName] = after;
      if (!impactedCompanies.includes(depName)) impactedCompanies.push(depName); // Secondary impact is also tracked
      pushNews(`🔗 ${depName}: Påvirket av relaterte nyheter (${totalEffectPct>=0?'+':''}${totalEffectPct.toFixed(1)}%, fra ${fmt(before)} til ${fmt(after)})`);
  });


  // Apply Drift (Unimpacted companies)
  Object.keys(stockPrices).forEach(name => {
    // Check if company was primary or secondary impacted
    if (impactedCompanies.includes(name)) return;
    
    const u = Math.random();
    const driftPct = diff.driftMin + u*(diff.driftMax - diff.driftMin) + dayBias;
    const before = stockPrices[name] ?? 100;
    const after = clamp(before * (1 + driftPct/100));
    stockPrices[name] = after;
  });

  day += 1;
  updateUI();
  maybeEndGame();
}

function buy() {
  const diff = DIFFICULTIES[currentDiff];
  const fee = diff.commission;
  const company = document.getElementById('companySelect').value;
  const qty = Math.max(1, Math.floor(parseInt(document.getElementById('quantityInput').value,10) || 0)); 
  const price = stockPrices[company] ?? 100;
  const cost = qty * price * (1 + fee);
  
  if (cost > cash) { 
    pushNews(`⚠️ Ikke nok kontanter: ${qty} x ${company} @ ${fmt(price)} + kurtasje ${(fee*100).toFixed(1)}% = ${fmt(cost)}.`); 
    renderFeed(); 
    return; 
  }
  
  holdings[company] = (holdings[company] || 0) + qty;
  cash -= cost; 

  pushNews(`✅ Kjøp: ${qty} x ${company} @ ${fmt(price)} (kostnad ${fmt(cost)} inkl. kurtasje).`);
  updateUI();
}

function sell() {
  const diff = DIFFICULTIES[currentDiff];
  const fee = diff.commission;
  const company = document.getElementById('companySelect').value;
  const qty = Math.max(1, Math.floor(parseInt(document.getElementById('quantityInput').value,10) || 0)); 
  
  if ((holdings[company]||0) < qty) { 
    pushNews(`⚠️ Du eier ikke nok ${company}-aksjer til å selge ${qty}.`); 
    renderFeed(); 
    return; 
  }
  
  const price = stockPrices[company] ?? 100;
  const proceeds = qty * price * (1 - fee);
  
  holdings[company] -= qty; 
  cash += proceeds;
  
  pushNews(`💰 Salg: ${qty} x ${company} @ ${fmt(price)} (inntekt ${fmt(proceeds)} etter kurtasje).`);
  updateUI();
}
