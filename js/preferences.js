function openPreferences() {
  const user = getCurrentUser();
  if (!user) {
    alert("Please login first");
    return;
  }

  const prefs = getPreferences(user.email);

  document.getElementById("prefState").value = prefs.location?.state || "";
  document.getElementById("prefCity").value = prefs.location?.city || "";

  document.querySelectorAll("#prefsModal input[type=checkbox]").forEach(cb => {
    cb.checked = prefs.crops?.includes(cb.value) || false;
  });

  openModal("prefsModal");
}

function savePreferences() {
  const user = getCurrentUser();
  if (!user) return;

  const state = document.getElementById("prefState").value.trim();
  const city = document.getElementById("prefCity").value.trim();

  const crops = [];
  document.querySelectorAll("#prefsModal input[type=checkbox]:checked")
    .forEach(cb => crops.push(cb.value));

  const prefs = {
    location: { state, city },
    crops
  };

  localStorage.setItem(`prefs_${user.email}`, JSON.stringify(prefs));
  closeModal("prefsModal");
  showNotification("Preferences saved");
}

function getPreferences(email) {
  return JSON.parse(localStorage.getItem(`prefs_${email}`)) || {};
}
