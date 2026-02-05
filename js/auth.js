console.log("auth.js LOADED");

/* =========================
   Firebase Session Listener
========================= */
firebaseAuth.onAuthStateChanged(user => {
  if (user) {
    updateUserUI({
      uid: user.uid,
      email: user.email,
      name: user.displayName
    });
  } else {
    updateUserUI(null);
  }
});

/* =========================
   Auth Modal Controls
========================= */
let authMode = "login"; // login | signup

window.openAuth = function () {
  openModal("authModal");
};

function toggleAuthMode() {
  authMode = authMode === "login" ? "signup" : "login";

  document.getElementById("authTitle").textContent =
    authMode === "login" ? "Login" : "Signup";

  document.getElementById("authName").style.display =
    authMode === "signup" ? "block" : "none";
}

/* =========================
   Submit Login / Signup
========================= */
function submitAuth() {
  const email = document.getElementById("authEmail").value;
  const password = document.getElementById("authPassword").value;
  const name = document.getElementById("authName").value;

  if (!email || !password) {
    alert("Missing credentials");
    return;
  }

  if (authMode === "signup") {
    firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(cred => cred.user.updateProfile({ displayName: name }))
      .then(() => closeModal("authModal"))
      .catch(err => alert(err.message));
  } else {
    firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => closeModal("authModal"))
      .catch(err => alert(err.message));
  }
}

/* =========================
   Navbar UI Update
========================= */
document.addEventListener("DOMContentLoaded", () => {

  const authButton = document.getElementById("authButton");
  const preferencesButton = document.getElementById("preferencesButton");

  // Attach listeners ONCE
  authButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (firebaseAuth.currentUser) {
      firebaseAuth.signOut();
    } else {
      openModal("authModal");
    }
  });

  preferencesButton.addEventListener("click", (e) => {
    e.preventDefault();
    openPreferences();
  });

});
