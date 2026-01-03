// MANDI PRICES TOOL (Demo Data)

function openMandiModal() {
  const mandiData = [
    { crop: "Wheat", price: "₹2150 / quintal" },
    { crop: "Rice", price: "₹2380 / quintal" },
    { crop: "Maize", price: "₹1870 / quintal" }
  ];

  let message = "📊 Mandi Prices (Sample)\n\n";
  mandiData.forEach(item => {
    message += `${item.crop}: ${item.price}\n`;
  });

  alert(message);
  showNotification("Mandi prices loaded");
}
