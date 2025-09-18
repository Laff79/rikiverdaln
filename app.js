let companies = {};
let stockPrices = {};
let holdings = {}; // { company: qty }
let cash = 1000;
let day = 1;

// spillmodus
let totalDays = null; // 10,20,30 eller null (uendelig)
let currentModeKey = null; // '10','20','30','inf'
let currentDiff = 'easy';     // easy|normal|hard
let currentScenario = 'classic'; // classic|havvind|kulturboom|dagligvare|byggeboom|toffetider

// Nyhetsbuffer for feed
const NEWS_LIMIT_VISIBLE = 30;
const NEWS_LIMIT_BUFFER  = 200;
let newsBuffer = [];

// Startpriser
const startPrices = {
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

// Vanskelighetsgrader
const DIFFICULTIES = {
  easy:   { startCash:1500, commission:0.005, driftMin:-1.0, driftMax: 1.8, dayBiasRange:0.40 },
  normal: { startCash:1000, commission:0.010, driftMin:-1.5, driftMax: 1.5, dayBiasRange:0.30 },
  hard:   { startCash: 800, commission:0.015, driftMin:-2.0, driftMax: 1.2, dayBiasRange:0.25 }
};

// Scenarioer: vekter for sannsynlighet og helningsbias på markedet
function baseWeights() {
  const w = {};
  Object.keys(startPrices).forEach(name => w[name] = 1.0);
  return w;
}
const SCENARIOS = {
  classic:     { label:"Klassisk",       bias:0.00, weights: baseWeights() },
  havvind:     { label:"Havvind-år",     bias:0.15, weights: (()=>{ const w=baseWeights(); w["Aker Verdal"]=3.0; w["Wow Medialab"]=1.4; w["Lag"]=1.2; return w; })() },
  kulturboom:  { label:"Kulturboom",     bias:0.10, weights: (()=>{ const w=baseWeights(); w["Stiklestad Kulturhus"]=2.5; w["Farmors Fargerike Verden"]=2.0; w["Verdal Hotell"]=1.3; return w; })() },
  dagligvare:  { label:"Dagligvare-krig",bias:0.05, weights: (()=>{ const w=baseWeights(); w["Coop Extra Verdal"]=2.0; w["Prix Ørmelen"]=2.0; return w; })() },
  byggeboom:   { label:"Byggeboom",      bias:0.12, weights: (()=>{ const w=baseWeights(); w["Lag"]=2.5; return w; })() },
  toffetider:  { label:"Tøffe tider",    bias:-0.25,weights: baseWeights() }
};

// Antall nyheter per dag (2 eller 3)
function newsCountToday() { return Math.random() < 0.5 ? 2 : 3; }

async function loadData() {
  const res = await fetch("hendelser.json");
  companies = await res.json();

  // startskjerm knapper
  document.querySelectorAll('.diffBtn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.diffBtn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      currentDiff = btn.dataset.diff;
      renderHighscores();
    });
  });
  document.querySelectorAll('.scenBtn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.scenBtn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      currentScenario = btn.dataset.scen;
      renderHighscores();
    });
  });
  document.querySelectorAll('.modeBtn').forEach(btn => {
    btn.addEventListener('click', () => startGame(btn.dataset.days));
  });

  // sluttskjerm
  document.getElementById('restartBtn').addEventListener('click', () => {
    const key = currentModeKey || '20';
    startGame(key === 'inf' ? '∞' : key);
  });
  document.getElementById('toStartBtn').addEventListener('click', showStart);

  // feed kontroller
  document.getElementById("clearFeedBtn").addEventListener("click", () => { newsBuffer = []; renderFeed(); });
  document.getElementById("compactToggle").addEventListener("change", (e)=>{
    document.getElementById("newsItems").classList.toggle("compact", e.target.checked);
  });

  showStart();
}

function resetState(){
  stockPrices = {};
  holdings = {};
  newsBuffer = [];
  day = 1;

  const diff = DIFFICULTIES[currentDiff];
  cash = diff.startCash;

  for (let name in companies) {
    stockPrices[name] = startPrices[name] ?? 100;
    holdings[name] = 0;
  }
}

function showStart(){
  document.getElementById('startScreen').classList.add('visible');
  document.getElementById('endScreen').classList.remove('visible');
  resetState();
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
  updateUI();
}

function renderHighscores(){
  const labels = {'10':'10 dager','20':'20 dager','30':'30 dager','inf':'Uendelig'};
  const hsDiv = document.getElementById('highscores');
  const modes = ['10','20','30','inf'];
  const lines = modes.map(m=>{
    const key = hsKey(m, currentDiff, currentScenario);
    const val = localStorage.getItem(key);
    const dLabel = ({easy:'Lett', normal:'Normal', hard:'Hard'})[currentDiff];
    const sLabel = SCENARIOS[currentScenario].label;
    return `<div>Highscore ${labels[m]} – ${dLabel} – ${sLabel}: <strong>${val ? Number(val).toFixed(0)+' kr' : '–'}</strong></div>`;
  });
  hsDiv.innerHTML = lines.join('');
}

function hsKey(modeKey, diff, scen){
  return `ib_highscore_${modeKey}_${diff}_${scen}`;
}

function maybeEndGame(){
  if (totalDays && day > totalDays){
    const p = portfolioValue();
    const total = p + cash;

    document.getElementById('sumMode').textContent = (currentModeKey==='inf'?'Uendelig': currentModeKey+' dager');
    document.getElementById('sumDiff').textContent = ({easy:'Lett', normal:'Normal', hard:'Hard'})[currentDiff];
    document.getElementById('sumScen').textContent = SCENARIOS[currentScenario].label;
    document.getElementById('sumDays').textContent = totalDays;
    document.getElementById('sumCash').textContent = fmt(cash);
    document.getElementById('sumPortfolio').textContent = fmt(p);
    document.getElementById('sumTotal').textContent = fmt(total);

    const key = hsKey(currentModeKey || '20', currentDiff, currentScenario);
    const prev = Number(localStorage.getItem(key) || 0);
    let note = '';
    if (!prev || total > prev){
      localStorage.setItem(key, String(total));
      note = '🎉 Ny highscore!';
    } else {
      note = `Beste til nå: ${prev.toFixed(0)} kr`;
    }
    document.getElementById('sumHighscore').textContent = note;
    renderHighscores();
    document.getElementById('endScreen').classList.add('visible');
  }
}

function populateSelect() {
  const select = document.getElementById("companySelect");
  select.innerHTML = "";
  Object.keys(companies).forEach(name => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = `${name} (${fmt(stockPrices[name])})`;
    select.appendChild(option);
  });
}

function fmt(n){ return `${n.toFixed(0)} kr`; }

function updatePricesPanel() {
  const container = document.getElementById("prices");
  container.innerHTML = "";
  Object.entries(stockPrices)
    .sort((a,b)=>a[0].localeCompare(b[0]))
    .forEach(([name,price])=>{
      const row = document.createElement("div");
      row.className = "price";
      row.innerHTML = `<span>${name}</span><strong>${fmt(price)}</strong>`;
      container.appendChild(row);
    });
}

function portfolioValue() {
  return Object.entries(holdings).reduce((sum,[name,qty]) => sum + qty*stockPrices[name], 0);
}

function updatePortfolioTable() {
  const tbody = document.querySelector("#portfolioTable tbody");
  tbody.innerHTML = "";
  Object.entries(holdings)
    .filter(([_,qty])=>qty>0)
    .sort((a,b)=>a[0].localeCompare(b[0]))
    .forEach(([name,qty])=>{
      const tr = document.createElement("tr");
      const value = qty*stockPrices[name];
      tr.innerHTML = `<td>${name}</td><td>${qty}</td><td>${fmt(stockPrices[name])}</td><td>${fmt(value)}</td>`;
      tbody.appendChild(tr);
    });
}

function updateKPIs() {
  document.getElementById("dayEl").textContent = day;
  document.getElementById("daysLeftEl").textContent = totalDays ? (totalDays - (day-1)) : '∞';
  document.getElementById("cashEl").textContent = fmt(cash);
  document.getElementById("portfolioValueEl").textContent = fmt(portfolioValue());
  document.getElementById("totalValueEl").textContent = fmt(portfolioValue() + cash);
  document.getElementById("feeEl").textContent = `${(DIFFICULTIES[currentDiff].commission*100).toFixed(1)}%`;
}

function updateSelectLabels(){
  const select = document.getElementById("companySelect");
  [...select.options].forEach(opt => {
    const name = opt.value;
    opt.textContent = `${name} (${fmt(stockPrices[name])})`;
  });
}

function updateUI(){
  updatePricesPanel();
  updatePortfolioTable();
  updateKPIs();
  updateSelectLabels();
  renderFeed();
}

function renderFeed(){
  const list = document.getElementById("newsItems");
  list.innerHTML = "";
  const visible = newsBuffer.slice(0, NEWS_LIMIT_VISIBLE);
  visible.forEach(text => {
    const item = document.createElement("div");
    item.className = "news";
    item.textContent = text;
    list.appendChild(item);
  });
  document.getElementById("visibleCount").textContent = visible.length;
  document.getElementById("totalCount").textContent = newsBuffer.length;
}

function pushNews(text){
  newsBuffer.unshift(text);
  if (newsBuffer.length > NEWS_LIMIT_BUFFER) {
    newsBuffer = newsBuffer.slice(0, NEWS_LIMIT_BUFFER);
  }
}

function parseChange(evt){
  const m = evt.match(/(opp|ned)\s+(\d+)%/);
  if(!m) return null;
  const dir = m[1];
  const pct = parseInt(m[2],10);
  return dir === "opp" ? (p)=>p*(1+pct/100) : (p)=>p*(1-pct/100);
}

// vektet trekk av bedrifter (uten erstatning)
function weightedSampleNoReplace(weightMap, k){
  const names = Object.keys(weightMap);
  const weights = names.map(n=>Math.max(0.0001, weightMap[n]));
  const chosen = [];
  const used = new Set();

  function pickOne(){
    let total = 0;
    for (let i=0;i<names.length;i++){ if(!used.has(names[i])) total += weights[i]; }
    let r = Math.random() * total;
    for (let i=0;i<names.length;i++){
      const n = names[i];
      if (used.has(n)) continue;
      r -= weights[i];
      if (r <= 0) return n;
    }
    // fallback
    for (let i=0;i<names.length;i++){ if(!used.has(names[i])) return names[i]; }
  }

  while (chosen.length < k && chosen.length < names.length){
    const n = pickOne();
    chosen.push(n);
    used.add(n);
  }
  return chosen;
}

function clamp(n){ return Math.max(0, n); }

function nextDay(){
  const diff = DIFFICULTIES[currentDiff];
  const scen = SCENARIOS[currentScenario];

  // hvor mange nyheter
  const n = newsCountToday();
  // daglig bias (tilfeldig ±) + scenario bias
  const dayBias = (Math.random()*2 - 1) * diff.dayBiasRange + scen.bias;

  // vektet valg av bedrifter for nyheter
  const impacted = weightedSampleNoReplace(scen.weights, n);
  pushNews(`📅 Dag ${day}: ${n} nyhet(er) rammer ${impacted.join(", ")}`);

  // 1) Trekk og anvend nyheter for de påvirkede selskapene
  impacted.forEach(company => {
    const events = companies[company];
    const evt = events[Math.floor(Math.random()*events.length)];
    const changer = parseChange(evt);
    if (changer) {
      const before = stockPrices[company];
      const after = clamp(changer(before));
      stockPrices[company] = after;
      pushNews(`📰 ${company}: ${evt} (fra ${fmt(before)} til ${fmt(after)})`);
    } else {
      pushNews(`📰 ${company}: ${evt}`);
    }
  });

  // 2) Markedsdrift for resten (med bias)
  Object.keys(stockPrices).forEach(name => {
    if (impacted.includes(name)) return;
    const u = Math.random();
    const driftPct = diff.driftMin + u*(diff.driftMax - diff.driftMin) + dayBias; // legg til bias
    const before = stockPrices[name];
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
  const company = document.getElementById("companySelect").value;
  const qty = Math.max(1, Math.floor(parseInt(document.getElementById("quantityInput").value,10) || 0));
  const price = stockPrices[company];
  const base = qty * price;
  const cost = base * (1 + fee);
  if (cost > cash) {
    pushNews(`⚠️ Ikke nok kontanter: ${qty} x ${company} @ ${fmt(price)} + kurtasje (${(fee*100).toFixed(1)}%) = ${fmt(cost)}.`);
    renderFeed();
    return;
  }
  cash -= cost;
  holdings[company] += qty;
  pushNews(`✅ Kjøp: ${qty} x ${company} @ ${fmt(price)} (kostnad ${fmt(cost)} inkl. kurtasje).`);
  updateUI();
}

function sell() {
  const diff = DIFFICULTIES[currentDiff];
  const fee = diff.commission;
  const company = document.getElementById("companySelect").value;
  const qty = Math.max(1, Math.floor(parseInt(document.getElementById("quantityInput").value,10) || 0));
  if (holdings[company] < qty) {
    pushNews(`⚠️ Du eier ikke nok ${company}-aksjer til å selge ${qty}.`);
    renderFeed();
    return;
  }
  const price = stockPrices[company];
  const base = qty * price;
  const proceeds = base * (1 - fee);
  holdings[company] -= qty;
  cash += proceeds;
  pushNews(`💰 Salg: ${qty} x ${company} @ ${fmt(price)} (inntekt ${fmt(proceeds)} etter kurtasje).`);
  updateUI();
}

document.getElementById("nextDayBtn").addEventListener("click", nextDay);
document.getElementById("buyBtn").addEventListener("click", buy);
document.getElementById("sellBtn").addEventListener("click", sell);

loadData();
