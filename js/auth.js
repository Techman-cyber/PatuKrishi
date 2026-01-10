let authMode = "login"; // or signup

function openAuth() {
  openModal("authModal");
}

function toggleAuthMode() {
  authMode = authMode === "login" ? "signup" : "login";
  document.getElementById("authTitle").textContent =
    authMode === "login" ? "Login" : "Signup";

  document.getElementById("authName").style.display =
    authMode === "signup" ? "block" : "none";
}

function submitAuth() {
  const name = document.getElementById("authName").value;
  const email = document.getElementById("authEmail").value;
  const password = document.getElementById("authPassword").value;

  if (!email || !password) {
    alert("Please fill required fields");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || {};

  if (authMode === "signup") {
    if (users[email]) {
      alert("User already exists");
      return;
    }
    users[email] = { name, email };
    localStorage.setItem("users", JSON.stringify(users));
  }

  if (!users[email]) {
    alert("User not found");
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(users[email]));
  closeModal("authModal");
  updateUserUI();
}

function updateUserUI() {
  const user = getCurrentUser();
  const authNav = document.getElementById("authNav");

  if (!authNav) return;

  if (user) {
    authNav.innerHTML = `
      <a href="#" onclick="logoutUser()">
        👤 ${user.name || "Farmer"} (Logout)
      </a>
    `;
  } else {
    authNav.innerHTML = `
      <a href="#" onclick="openAuth()">Login</a>
    `;
  }
}

window.onload = updateUserUI;

function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser"));
}
