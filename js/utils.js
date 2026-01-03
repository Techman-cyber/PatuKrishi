// ================================
// NOTIFICATIONS
// ================================
function showNotification(message) {
  const box = document.getElementById("notification");
  const text = document.getElementById("notificationText");
  text.textContent = message;
  box.style.display = "block";

  setTimeout(() => {
    box.style.display = "none";
  }, 3000);
}

// ================================
// MODAL HELPERS
// ================================
function openModal(id) {
  document.getElementById(id).classList.add("active");
}

function closeModal(id) {
  document.getElementById(id).classList.remove("active");
}

// Close modal on background click
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("tool-modal")) {
    e.target.classList.remove("active");
  }
});

// Close modal on ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".tool-modal.active")
      .forEach(m => m.classList.remove("active"));
  }
});
