// CHATBOT MODULE

const chatToggle = document.getElementById("chatToggle");
const chatbotModal = document.getElementById("chatbotModal");
const chatBody = document.getElementById("chatBody");
const chatInput = document.getElementById("chatInput");

chatToggle.onclick = () => {
  chatbotModal.style.display = "flex";
};

function closeChatbot() {
  chatbotModal.style.display = "none";
}

function sendMessage() {
  const userText = chatInput.value.trim();
  if (!userText) return;

  appendMessage("user", userText);
  chatInput.value = "";

  setTimeout(() => {
    const reply = generateBotReply(userText);
    appendMessage("bot", reply);
  }, 600);
}

function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.className = sender === "user" ? "chat-msg user" : "chat-msg bot";
  msg.textContent = text;
  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function generateBotReply(input) {
  input = input.toLowerCase();

  if (input.includes("weather"))
    return "You can check weather using the Weather tool 🌦";

  if (input.includes("price") || input.includes("mandi"))
    return "Use the Mandi Prices tool to get crop prices 📊";

  if (input.includes("crop"))
    return "Crop advisory is available based on the season 🌱";

  return "I can help with weather, mandi prices, and crop advice 🌾";
}
