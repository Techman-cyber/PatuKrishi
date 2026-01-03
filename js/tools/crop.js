// CROP ADVISORY TOOL (Rule-based Demo)

function openCropModal() {
  const month = new Date().getMonth() + 1;
  let advice = "";

  if (month >= 6 && month <= 9) {
    advice = "🌱 Kharif Season: Rice, Maize, Cotton";
  } else if (month >= 10 && month <= 2) {
    advice = "🌾 Rabi Season: Wheat, Mustard, Gram";
  } else {
    advice = "🌻 Zaid Season: Watermelon, Cucumber";
  }

  document.getElementById("cropAdviceText").textContent = advice;
  openModal("cropModal");
  showNotification("Crop advisory generated");
}
