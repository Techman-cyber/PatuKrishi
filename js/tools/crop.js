// CROP ADVISORY TOOL (Rule-based Demo)

function openCropModal() {
  const month = new Date().getMonth() + 1;
  let advice = "";

  if (month >= 6 && month <= 9) {
    advice = "🌱 Kharif Season\nRecommended crops:\n• Rice\n• Maize\n• Cotton";
  } else if (month >= 10 && month <= 2) {
    advice = "🌾 Rabi Season\nRecommended crops:\n• Wheat\n• Mustard\n• Gram";
  } else {
    advice = "🌻 Zaid Season\nRecommended crops:\n• Watermelon\n• Cucumber";
  }

  alert(advice);
  showNotification("Crop advisory generated");
}
