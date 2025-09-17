let companies = {};
let stockPrices = {};
let holdings = {}; // { company: qty }
let cash = 1000;

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

async function loadData() {
  const res = await fetch("hendelser.json");
  companies = await res.json();

  for (let name in companies) {
    stockPrices[name] = startPrices[name] ?? 100;
    holdings[name] = 0;
  }

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
}

function logNews(text){
  const list = document.getElementById("newsItems");
  const item = document.createElement("div");
  item.className = "news";
  item.textContent = text;
  list.prepend(item);
}

function parseChange(evt){
  const m = evt.match(/(opp|ned)\s+(\d+)%/);
  if(!m) return null;
  const dir = m[1];
  const pct = parseInt(m[2],10);
  return dir === "opp" ? (p)=>p*(1+pct/100) : (p)=>p*(1-pct/100);
}

function drawEvent() {
  const select = document.getElementById("companySelect");
  const company = select.value;
  if(!company) return;

  const events = companies[company];
  const randomEvent = events[Math.floor(Math.random() * events.length)];

  const changer = parseChange(randomEvent);
  if (changer) {
    const before = stockPrices[company];
    const after = Math.max(0, changer(before));
    stockPrices[company] = after;
    logNews(`📰 ${company}: ${randomEvent} (fra ${fmt(before)} til ${fmt(after)})`);
    updateUI();
  } else {
    logNews(`📰 ${company}: ${randomEvent}`);
  }
}

function buy() {
  const company = document.getElementById("companySelect").value;
  const qty = Math.max(1, Math.floor(parseInt(document.getElementById("quantityInput").value,10) || 0));
  const price = stockPrices[company];
  const cost = qty * price;
  if (cost > cash) {
    logNews(`⚠️ Ikke nok kontanter til å kjøpe ${qty} x ${company} (${fmt(cost)}).`);
    return;
  }
  cash -= cost;
  holdings[company] += qty;
  logNews(`✅ Kjøp: ${qty} x ${company} @ ${fmt(price)} (kostnad ${fmt(cost)}).`);
  updateUI();
}

function sell() {
  const company = document.getElementById("companySelect").value;
  const qty = Math.max(1, Math.floor(parseInt(document.getElementById("quantityInput").value,10) || 0));
  if (holdings[company] < qty) {
    logNews(`⚠️ Du eier ikke nok ${company}-aksjer til å selge ${qty}.`);
    return;
  }
  const price = stockPrices[company];
  const proceeds = qty * price;
  holdings[company] -= qty;
  cash += proceeds;
  logNews(`💰 Salg: ${qty} x ${company} @ ${fmt(price)} (inntekt ${fmt(proceeds)}).`);
  updateUI();
}

document.getElementById("drawEvent").addEventListener("click", drawEvent);
document.getElementById("buyBtn").addEventListener("click", buy);
document.getElementById("sellBtn").addEventListener("click", sell);

loadData();
