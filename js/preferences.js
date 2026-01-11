// Open Preferences Modal
function openPreferences() {
  const user = firebaseAuth.currentUser;

  if (!user) {
    alert("Please login first");
    return;
  }

  loadPreferences(user.uid);
  openModal("prefsModal");
}

// Load preferences from Firestore
async function loadPreferences(uid) {
  try {
    const doc = await db.collection("preferences").doc(uid).get();

    if (!doc.exists) return;

    const prefs = doc.data();

    document.getElementById("prefState").value =
      prefs.location?.state || "";

    document.getElementById("prefCity").value =
      prefs.location?.city || "";

    document
      .querySelectorAll("#prefsModal input[type=checkbox]")
      .forEach(cb => {
        cb.checked = prefs.crops?.includes(cb.value) || false;
      });

  } catch (err) {
    console.error("Failed to load preferences:", err);
  }
}

// Save preferences to Firestore
function savePreferences() {
  const user = firebaseAuth.currentUser;
  if (!user) return;

  const state = document.getElementById("prefState").value.trim();
  const city = document.getElementById("prefCity").value.trim();

  const crops = [];
  document
    .querySelectorAll("#prefsModal input[type=checkbox]:checked")
    .forEach(cb => crops.push(cb.value));

  const prefs = {
    location: { state, city },
    crops,
    updatedAt: new Date()
  };

  db.collection("preferences")
    .doc(user.uid)
    .set(prefs)
    .then(() => {
      closeModal("prefsModal");
      showNotification("Preferences saved");
    })
    .catch(err => {
      console.error("Failed to save preferences:", err);
    });
}
