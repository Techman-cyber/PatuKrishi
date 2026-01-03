function showNotification(message) {
  const box = document.getElementById("notification");
  const text = document.getElementById("notificationText");
  text.textContent = message;
  box.style.display = "block";

  setTimeout(() => {
    box.style.display = "none";
  }, 3000);
}
