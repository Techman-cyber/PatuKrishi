function openMandiModal() {
  openModal("mandiModal");
}

async function loadMandiPrices() {
  const resultBox = document.getElementById("mandiResult");
  const filter = document.getElementById("cropFilter").value;

  resultBox.innerHTML = '<div class="shimmer" style="height:20px;"></div>';

  try {
    const res = await fetch("assets/data/mandi-prices.json");
    const data = await res.json();

    let filtered = data;
    if (filter) {
      filtered = data.filter(item => item.crop === filter);
    }

    if (filtered.length === 0) {
      resultBox.innerHTML = "<p>No data found.</p>";
      return;
    }

    resultBox.innerHTML = filtered.map(item => `
      <div class="mandi-item">
        <strong>${item.crop}</strong><br>
        ${item.mandi}, ${item.state}<br>
        ₹${item.price} / quintal
      </div>
    `).join("");

  } catch (err) {
    console.error(err);
    resultBox.innerHTML =
      "<p>Unable to load mandi prices. Please try again later.</p>";
  }
}
