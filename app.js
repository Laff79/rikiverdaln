let companies = {};
let stockPrices = {};

async function loadData() {
  const res = await fetch("hendelser.json");
  companies = await res.json();

  // Sett startpris for alle bedrifter
  for (let name in companies) {
    stockPrices[name] = 100; // alle starter på 100
  }

  populateSelect();
  updateStockPrices();
}

function populateSelect() {
  const select = document.getElementById("companySelect");
  for (let name in companies) {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    select.appendChild(option);
  }
}

function updateStockPrices() {
  const container = document.getElementById("stockPrices");
  container.innerHTML = "<h3>Aksjekurser</h3>";
  for (let name in stockPrices) {
    const p = document.createElement("p");
    p.textContent = `${name}: ${stockPrices[name]} kr`;
    container.appendChild(p);
  }
}

function drawEvent() {
  const select = document.getElementById("companySelect");
  const company = select.value;

  const events = companies[company];
  const randomEvent = events[Math.floor(Math.random() * events.length)];

  // Legg til nyhet
  const feed = document.getElementById("newsFeed");
  const div = document.createElement("div");
  div.className = "news-item";
  div.textContent = `${company}: ${randomEvent}`;
  feed.prepend(div);

  // Finn kursendring
  const match = randomEvent.match(/(opp|ned) (\d+)%/);
  if (match) {
    const direction = match[1];
    const value = parseInt(match[2]);

    if (direction === "opp") {
      stockPrices[company] += value;
    } else {
      stockPrices[company] -= value;
      if (stockPrices[company] < 0) stockPrices[company] = 0;
    }
    updateStockPrices();
  }
}

document.getElementById("drawEvent").addEventListener("click", drawEvent);

loadData();