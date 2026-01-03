document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("show");
});

const music = document.getElementById("bgMusic");
const icon = document.getElementById("musicIcon");

document.getElementById("musicToggle").onclick = () => {
  if (music.paused) {
    music.play();
    icon.className = "fas fa-pause";
  } else {
    music.pause();
    icon.className = "fas fa-play";
  }
};
