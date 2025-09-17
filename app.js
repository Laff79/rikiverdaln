let companies = {};
let stockPrices = {};
let holdings = {}; // { company: qty }
let cash = 1000;
let day = 1;

// Nyhetsbuffer for kontrollert feed
const NEWS_LIMIT_VISIBLE = 30;   // vis maks 30 i DOM
const NEWS_LIMIT_BUFFER  = 200;  // behold maks 200 i minnet
let newsBuffer = [];             // nyeste først

// MARKEDSOPPSETT
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

// Små svingninger for ikke-rammede selskaper
const DRIFT_MIN = -1.5;
const DRIFT_MAX =  1.5;

// Antall nyheter per dag (2 eller 3)
function newsCountToday() {
  return Math.random() < 0.5 ? 2 : 3;
}

async function loadData() {
  const res = await fetch("hendelser.json");
  companies = await res.json();

  for (let name in companies) {
    stockPrices[name] = startPrices[name] ?? 100;
    holdings[name] = 0;
  }

  // UI hooks
  document.getElementById("clearFeedBtn").addEventListener("click", () => { newsBuffer = []; renderFeed(); });
  document.getElementById("compactToggle").addEventListener("change", (e)=>{
    const el = document.getElementById("newsItems");
    el.classList.toggle("compact", e.target.checked);
  });

  populateSelect();
  updateUI();
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
  document.getElementById("cashEl").textContent = fmt(cash);
  const p = portfolioValue();
  document.getElementById("portfolioValueEl").textContent = fmt(p);
  document.getElementById("totalValueEl").textContent = fmt(p + cash);
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
  // vis kun de NEWS_LIMIT_VISIBLE nyeste
  const visible = newsBuffer.slice(0, NEWS_LIMIT_VISIBLE);
  visible.forEach(text => {
    const item = document.createElement("div");
    item.className = "news";
    item.textContent = text;
    list.appendChild(item);
  });
  // oppdater teller
  document.getElementById("visibleCount").textContent = visible.length;
  document.getElementById("totalCount").textContent = newsBuffer.length;
}

function pushNews(text){
  newsBuffer.unshift(text); // nyeste først
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

function randomCompanies(k){
  const keys = Object.keys(companies);
  const chosen = [];
  while (chosen.length < k) {
    const c = keys[Math.floor(Math.random()*keys.length)];
    if (!chosen.includes(c)) chosen.push(c);
  }
  return chosen;
}

function clamp(n){ return Math.max(0, n); }

function nextDay(){
  const n = Math.random() < 0.5 ? 2 : 3;
  const impacted = randomCompanies(n);
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

  // 2) Markedsdrift for resten
  Object.keys(stockPrices).forEach(name => {
    if (impacted.includes(name)) return;
    const driftPct = -1.5 + Math.random()*(1.5 - (-1.5));
    const before = stockPrices[name];
    const after = clamp(before * (1 + driftPct/100));
    stockPrices[name] = after;
  });

  day += 1;
  updateUI();
}

function buy() {
  const company = document.getElementById("companySelect").value;
  const qty = Math.max(1, Math.floor(parseInt(document.getElementById("quantityInput").value,10) || 0));
  const price = stockPrices[company];
  const cost = qty * price;
  if (cost > cash) {
    pushNews(`⚠️ Ikke nok kontanter til å kjøpe ${qty} x ${company} (${fmt(cost)}).`);
    renderFeed();
    return;
  }
  cash -= cost;
  holdings[company] += qty;
  pushNews(`✅ Kjøp: ${qty} x ${company} @ ${fmt(price)} (kostnad ${fmt(cost)}).`);
  updateUI();
}

function sell() {
  const company = document.getElementById("companySelect").value;
  const qty = Math.max(1, Math.floor(parseInt(document.getElementById("quantityInput").value,10) || 0));
  if (holdings[company] < qty) {
    pushNews(`⚠️ Du eier ikke nok ${company}-aksjer til å selge ${qty}.`);
    renderFeed();
    return;
  }
  const price = stockPrices[company];
  const proceeds = qty * price;
  holdings[company] -= qty;
  cash += proceeds;
  pushNews(`💰 Salg: ${qty} x ${company} @ ${fmt(price)} (inntekt ${fmt(proceeds)}).`);
  updateUI();
}

document.getElementById("nextDayBtn").addEventListener("click", nextDay);
document.getElementById("buyBtn").addEventListener("click", buy);
document.getElementById("sellBtn").addEventListener("click", sell);

loadData();
